import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();  

// public functions
export function getUsers(){
  return get('users');
}

// routing
function get(url){
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// http response functions 
function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}
