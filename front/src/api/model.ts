export type ApiResp<Type> = {
  isOk: boolean,
  body?: Type
}

export type Lead = {
  leadId?: string,
  fromPlayerId: string,
  toPlayerId: string,
  avatar: string,
  profession: string,  
  salary: number,
  amount: number,
  profit: number,
  isConfirmed: boolean
}

export type Player = {
  playerId?: string,
  playerName: string,
  playerGroup: number
}