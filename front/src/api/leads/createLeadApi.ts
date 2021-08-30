import axios from "axios"
import { config } from "src/config"
import { showApiBad } from "src/utils"
import { callApi } from "../callApi"
import { ApiResp, Lead, Player } from "../model"


export const createLeadApi = async (lead: Lead):Promise<ApiResp<Lead[]>> => {
  
  return await callApi(() => axios.post(`${config.backendUrl}/create-lead`, lead))
}