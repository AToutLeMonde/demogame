import axios from 'axios';
import { config } from 'src/config';
import { showApiBad } from 'src/utils';

import { callApi } from '../callApi';
import { ApiResp, Lead, Player } from '../model';


export const confirmLeadApi = async (leadId: string): Promise<ApiResp<Lead>> => {

  return await callApi(() => axios.post(`${config.backendUrl}/confirm-lead?leadId=${leadId}`),
    showApiBad)
}