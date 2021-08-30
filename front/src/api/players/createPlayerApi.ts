import axios from "axios"
import { config } from "src/config"
import { showApiBad } from "src/utils"
import { callApi } from "../callApi"
import { ApiResp, Player } from "../model"


export const createPlayerApi = async (player: Player):Promise<ApiResp<Player>> => {
  
  return await callApi(() => axios.post(`${config.backendUrl}/create-player`, player),
  showApiBad)
}