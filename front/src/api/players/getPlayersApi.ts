import axios from "axios"
import { config } from "src/config"
import { showApiBad } from "src/utils"
import { callApi } from "../callApi"
import { ApiResp, Player } from "../model"


export const getPlayersApi = async ():Promise<ApiResp<Player[]>> => {  
  return await callApi(() => axios.get(`${config.backendUrl}/get-players`))
}