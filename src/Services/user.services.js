import { config } from "../config";



export const userService = {
    login,
    logout,
    register,
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    };

    return fetch(`${config.apiUrl}/users/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
            return user;
        })
}

function logout() {
    localStorage.removeItem('user')
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user})
    }
    return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}

// function getAll() {
    
// }

// function getById(id) {
    
// }

// function update(user) {
    
// }


// function _delete(id) {
    
// }

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout()
                // location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error)
        }
        return data
    })
}