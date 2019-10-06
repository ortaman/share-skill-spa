
import { BASEURL } from '../_constants/app.const'


export const UserService = {
    obtainJWT,
    logout
};

function obtainJWT(data) {
  const url = `${BASEURL}/token/` ;
  const request = {
    Accept: 'application/json',
    headers: {"Content-type": "application/json"},
    method: 'POST',
    body: JSON.stringify(data),
  };

  return fetch(url, request)
    .then(handleResponse);
}

function logout() {
    localStorage.removeItem('Token');
    window.FB.logout();
};

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        if (!response.ok) {
            if (response.status === 401) {
                window.FB.logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
