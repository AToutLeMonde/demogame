const getResp = (resp) => {
  return resp?.data?.data ? resp?.data?.data : resp?.data
}

const isOk = (resp) => {
  if (!resp) return false;

  if (resp.status === 200 || resp.status === 302) {
    return true
  }

  return false;
}

export const callApi = async ( callFn, errorCallBackFn?):Promise<{
  isOk: boolean,
  body?:any,
  url: string,
  error?:any
}> => {


  

  let resp = null;
  let error = undefined;


  try {
    resp = await callFn();    
  }catch (err) {
    resp = err.response;
    error = err;
  }

  const result = {
    isOk: isOk(resp),
    body: getResp(resp),
    url: resp?.config?.url,
    error
  }

  if (!result.isOk && errorCallBackFn) {
    errorCallBackFn(result)
  }

  return result
}