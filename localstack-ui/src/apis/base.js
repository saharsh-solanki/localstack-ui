// contains code of base api
import axios from 'axios';

export function Response(status, data, status_code) {
  /* respose function to return same response object each time api make a call  */

  return {
    status: status,
    data: data,
    statusCode: status_code,
  };
}

export async function runApiBase(method, url, data, header) {
  /* Funtion used to run api request with data 
    Usage ==>  Method :- GET , POST , PATCH , PUT ............
               url    :- Api Call URL 
               data   :- Data to be passed with method
    */
  var responseStatus = false;
  var ResponseData = '';
  var statusCode = '';
  var obj = '';

  /* Configuarations for runnning API */
  var config = {
    method: method,
    url: url,
    headers: {
      ...header,
      // "Access-Control-Allow-Origin":"*",
      // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
  };

  if (method === 'get') {
    config['params'] = data;
  } else {
    config['data'] = data;
  }

  /* Make Api request */
  try {
    await axios(config)
      .then((response) => {
        /* Runs on Success */
        responseStatus = true;
        obj = response;
      })
      .catch((error) => {
        /* runs on error */
        responseStatus = false;
        obj = error?.response;
      });
  } catch (e) {
    responseStatus = false;
    console.log(e);
    ResponseData = e;
    statusCode = 4000;
  }

  if (obj) {
    ResponseData = obj.data;
    statusCode = obj?.request?.status;
  } else {
    ResponseData = {};
    statusCode = 4000;
  }

  return Response(responseStatus, ResponseData, statusCode);
}

export async function runApi(method, url, data, header) {
  /* A base for calling all api  
    Usage :- Take  Method argument example get post put patch delete
              url is the api url that need to be called 
              data is Request data that will passed to api 
              suppose if you not want to use authetication the auth should be false 
              for example a product is visiable to all so no need auth
              but a profile need auth 
    */
  const Result = await runApiBase(method, url, data, header);
  if (Result?.statusCode === 4000) {
    console.log('Server Down');
    //   ErrorToast("Server down please try after some time ");
  }
  return Result;
}
