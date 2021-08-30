import { Action, Thunk } from "easy-peasy";
import { Lead, Player } from "src/api";

export type StoreModel = {  
  currentPage: string,
  setCurrentPage: Action<StoreModel, string>,
  hiddenLeadIds: Array<string>,
  catchedIds: Array<string>,
  catchLeadId: Action<StoreModel, string>,

  bagX: number,
  setBagX: Action<StoreModel, number>,  

  avatars: Array<{
    eyebrows: string,
    eyes: string,
    nose: string,
    mouth: string,
    avatar: string,
    profession: string,
    salary:number,
    amount:number,
    profit:number,
    isVisible?: boolean
  }>,

  hideAvatar: Action<StoreModel, number>,
  regenerateAvatats: Action<StoreModel>,

  playerIds: Array<string>,
  playerById: Record<string, Player>,
  scoreByPlayerId: Record<string, number>,
  
  confirmedLeadIds: Array<string>,
  confirmedLeadById: Record<string, Lead>,
  myConfrimedLeadIds: Array<string>,

  nonConfirmedLeadIds: Array<string>,
  nonConfirmedLeadById: Record<string, Lead>,

  leadPositions: Array<{
    leadId: string,
    y?: number,
    x?: number,
    speed?: number,
    profit: number
  }>,

  updateLeadPosition: Action<StoreModel, {
    leadId: string,
    y?: number,
    x?: number,
    speed?: number,
    profit: number
  }>,

  isReady: boolean,
  player: Player,

  getState: Thunk<StoreModel>,

  setGameIsReady: Action<StoreModel>,
  setGameIsNotReady: Action<StoreModel>,

  setPlayer: Action<StoreModel, Player>,
  setPlayers: Action<StoreModel, Player[]>,
  setConfirmedLeads: Action<StoreModel, Lead[]>,
  setNonConfirmedLeads: Action<StoreModel, Lead[]>,

  startGame: Thunk<StoreModel, Player>,
  loadPlayers: Thunk<StoreModel>,
  loadConfirmedLeads: Thunk<StoreModel>,
  loadNonConfirmedLeads: Thunk<StoreModel>,
  calculatePlayersScore: Action<StoreModel>,
  clearGame: Thunk<StoreModel>,
  



}  