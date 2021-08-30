import { action, createStore, thunk } from "easy-peasy";
import { StoreModel } from "./model";
import * as _ from 'lodash/fp'
import { clearGameApi, confirmLeadApi, createPlayerApi, getConfirmedLeadsApi, getNotConfirmedLeadsApi, getPlayersApi } from "src/api";
import { buildAvatars } from "./lib";
import { getRandom, showBadLead, showGoodLead } from "src/utils";

const avatarPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const store = createStore<StoreModel>({
  currentPage: 'rules', //'game-1',
  setCurrentPage: action( (state, payload) => {
    state.currentPage = payload;
  }),

  bagX: 0,

  setBagX: action( (state, payload) => {
    state.bagX = payload;
  }),

  avatars: buildAvatars(),
  hideAvatar: action( (state, index) => {
    if (state.avatars[index]) {
      state.avatars[index].isVisible = false;
    }
  }),
  regenerateAvatats: action( (state, payload) => {
    const newAvatars = buildAvatars();

    //const visibleIndexes = [];
    let notVisibleIndexes = [];
    state.avatars.forEach((i, index)=> {
      if (i.isVisible) {
        i.isVisible = false;        
      }else {
        notVisibleIndexes.push(index)
      }
    })

    const max = getRandom(2, 6);

    
    //
    for (let i = 0; i < max; i++) {
      const index = getRandom(0, notVisibleIndexes.length - 1);
      const avatarIndex = notVisibleIndexes[index];
      
      if (newAvatars[avatarIndex]) {
        newAvatars[avatarIndex].isVisible = true;
      }

      notVisibleIndexes.splice(index, 1);
      
    }
    state.avatars = newAvatars;

  }),

  leadPositions: [],
  hiddenLeadIds: [],
  catchedIds: [],

  


  catchLeadId: action( (state, leadId) => {
    
    if (state.catchedIds.indexOf(leadId) === -1) {
      
      state.catchedIds.push(leadId);
      const found = state.leadPositions.find(i=>i.leadId === leadId);
      found.x = - 400;
    }
    confirmLeadApi(leadId)
  }),

  updateLeadPosition: action( (state, payload) => {
    const leadId = payload.leadId;
    const found = state.leadPositions.find(i=>i.leadId === leadId);
    //console.log('found',found)
    if (!found) {
      if (state.catchedIds.indexOf(leadId) === -1 
        && state.hiddenLeadIds.indexOf(leadId) === -1
       && state.leadPositions.length < 3) {
        state.leadPositions.push(payload)
      }
    }else {



      const y = found.speed + found.y
      if (y >= 540) {
        state.hiddenLeadIds.push(leadId) 
        state.leadPositions = state.leadPositions.filter(i => i.leadId !== leadId)
      }else {
        found.y = y;
      }
      
    }
  }),

  playerIds: [],
  playerById: {},
  scoreByPlayerId: {},
  
  confirmedLeadIds: [],
  confirmedLeadById: {},
  myConfrimedLeadIds: [],

  nonConfirmedLeadIds: [],
  nonConfirmedLeadById: {},

  isReady: false,
  player: null,
  

  getState: thunk((actions, payload, helpers) => {
    return helpers.getState();
  }),

  setGameIsReady: action((state, payload) => {
    state.isReady = true;
  }),

  setGameIsNotReady: action((state, payload) => {
    state.avatars = buildAvatars();
    state.leadPositions = [];
    state.bagX = 0;
    state.hiddenLeadIds = [];
    state.catchedIds = [];
    state.isReady = false;
    state.player = null;

    state.playerIds = [];
    state.playerById = {};
    state.scoreByPlayerId = {};
  
    state.confirmedLeadIds = [];
    state.confirmedLeadById = {};
    state.myConfrimedLeadIds = [];

    state.nonConfirmedLeadIds = [];
    state.nonConfirmedLeadById = {};

  }),

  setPlayer: action((state, payload) => {
    state.player = payload;
  }),

  setPlayers: action((state, payload) => {
    const ids = [];
    const byId = {};

    payload.forEach(i=> {
      const id = i.playerId;
      ids.push(id);
      byId[id] = i
    })

    state.playerIds = ids;
    state.playerById = byId;
  }),

  setConfirmedLeads: action((state, payload) => {
    const ids = [];
    const byId = {};
    const myLeadIds = [];
    const myId = state.player?.playerId;
    const group = state.player?.playerGroup;

    payload.forEach(i=> {
      const id = i.leadId ;
      ids.push(id);
      byId[id] = i

      if (group === 1 && i.fromPlayerId === myId) {
        myLeadIds.push(id)
      }else if (group === 2 && i.toPlayerId === myId) {
        myLeadIds.push(id)
      }
    })

    state.playerIds = ids;
    state.playerById = byId;
    state.myConfrimedLeadIds = myLeadIds;
  }),

  setNonConfirmedLeads: action((state, payload) => {
    const ids = [];
    const byId = {};

    payload.forEach(i=> {
      const id = i.leadId;
      ids.push(id);
      byId[id] = {...i}
    })

    //console.log(byId)
    state.nonConfirmedLeadIds = ids;
    state.nonConfirmedLeadById = byId;
  }),

  startGame: thunk(async (actions, payload, helpers) => {
    actions.setGameIsNotReady();
    const resp = await createPlayerApi(payload);
    if (!resp.isOk) return;
    actions.setPlayer(resp.body);
    return resp.body;
    
  }),

  loadPlayers: thunk(async(actions, payload, helpers) => {
    const resp = await getPlayersApi();
    if (resp.isOk) {
      actions.setPlayers(resp.body)
      return resp.body;
    }
  }),

  loadConfirmedLeads: thunk(async (actions, payload, helpers) => {
    const resp = await getConfirmedLeadsApi();
    if (resp.isOk) {
      actions.setConfirmedLeads(resp.body)
      actions.calculatePlayersScore();
    }
  }),

  loadNonConfirmedLeads: thunk(async (actions, payload, helpers) => {    
    const resp = await getNotConfirmedLeadsApi(helpers.getState().player.playerId);
    
    if (resp.isOk) {
      actions.setNonConfirmedLeads(resp.body)
    }
  }),

  calculatePlayersScore: action((state, payload) => {

    const scoreById = {}
    
    state.confirmedLeadIds.forEach(id => {
      const lead = state.confirmedLeadById[id];
      if (lead) {
        const fromPlayerId = lead.fromPlayerId;
        const toPlayerId = lead.toPlayerId;
        
        const fromPlayer = state.playerById[fromPlayerId];
        const toPlayer = state.playerById[toPlayerId];

        if (fromPlayer && toPlayer) {
          let fromPlayerScore = 0;
          let toPlayerScore = lead.profit;

          if (lead.profit > 0) {
            fromPlayerScore = 5000;
          }

          if (!scoreById[fromPlayerId]) {
            scoreById[fromPlayerId] = fromPlayerScore;
          }else {
            scoreById[fromPlayerId] = scoreById[fromPlayerId] + fromPlayerScore;
          }

          if (!scoreById[toPlayerId]) {
            scoreById[toPlayerId] = toPlayerScore;
          }else {
            scoreById[toPlayerId] = scoreById[toPlayerId] + toPlayerScore;
          }
        }
      }
    })

    state.scoreByPlayerId = scoreById;
    
  }),

  clearGame: thunk(async (actions, payload, helpers) => {
    await clearGameApi()
    actions.setGameIsNotReady();
  }),
})