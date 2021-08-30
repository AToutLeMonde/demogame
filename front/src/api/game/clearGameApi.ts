import axios from "axios"
import { config } from "src/config"
import { showApiBad } from "src/utils"
import { callApi } from "../callApi"
import { ApiResp, Player } from "../model"


export const clearGameApi = async ():Promise<ApiResp<any>> => {
  
  return await callApi(() => axios.get(`${config.backendUrl}/clear-game`),
  showApiBad)
}