import 'whatwg-fetch';
// public functions
export function getUsers(){
  return get('users');
}


// private functions
function get(url){
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}
