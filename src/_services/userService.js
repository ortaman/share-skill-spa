import { BASEURL } from '../_constants/app.const'


export const UserService = {
    login,
    logout
};

function login(data) {
  const url = `${BASEURL}/login` ;
  const request = {
    headers: {"Content-type": "application/json; charset=UTF-8"},
    method: 'POST',
    body: JSON.stringify(data)
  };

  return fetch(url, request)
    .then(handleResponse)
    .then(response => {
        localStorage.setItem('Token', response.token);
        return response;
    });
};

function logout() {
    localStorage.removeItem('Token');
};


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = data || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
