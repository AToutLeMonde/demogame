import axios from "axios"
import { config } from "src/config"
import { showApiBad } from "src/utils"
import { callApi } from "../callApi"
import { ApiResp, Lead, Player } from "../model"


export const getConfirmedLeadsApi = async ():Promise<ApiResp<Lead[]>> => {
  
  return await callApi(() => axios.get(`${config.backendUrl}/get-confirmed-leads`))
}