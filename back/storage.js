const NodeCache = require( "node-cache" );
const cache = new NodeCache();

const { v4: uuidv4 } = require('uuid')



const createPlayer = ({
  playerName,
  playerGroup
}) => {

  const player = {
    playerId: uuidv4(),
    playerName,
    playerGroup
  }

  let players = cache.get("players" );
  if (!players) players = []
  players.push(player)
  cache.set( "players", players );

  
  return player;
}

const getPlayers = () => cache.get("players" ) || [];

const createLead = ({
  fromPlayerId,
  toPlayerId,
  salary,
  amount,
  isConfirmed,
  profit,
  avatar,
  profession

}) => {
  const lead = {
    leadId: uuidv4(),
    fromPlayerId,
    toPlayerId,
    salary,
    amount,
    isConfirmed,
    profit,
    avatar,
    profession
  }

  let leads = cache.get("leads" );
  if (!leads) leads = []
  leads.push(lead)
  cache.set( "leads", leads );
  return lead;
}

const getNotConfirmedLeads = (playerId) => (cache.get("leads" ) || []).filter(i=>!i.isConfirmed) // && i.playerId === playerId)

const getConfirmedLeads = () => (cache.get("leads" ) || []).filter(i=>!!i.isConfirmed)

const confirmLead = (leadId) => {
  
  const leads = (cache.get("leads" ) || []);

  leads.forEach(i=> {
    if (i.leadId === leadId) {
      i.isConfirmed = true
    }
  })
  cache.set( "leads", leads );
}

const clearGame = () => {
  cache.set( "leads", [] )
  cache.set( "players", [] )
}

module.exports = {  
  createPlayer,
  getPlayers,
  createLead,
  getNotConfirmedLeads,
  getConfirmedLeads,
  confirmLead,
  clearGame
}