import { ACCESS_TOKEN, API_BASE_URL } from "constants/index";
import client from "./client";

// 본 코드는 테스트용입니다.  proxy 값 확인해보기

// export const login = ({ username, password }) =>
//     client.post("/api/auth/login", { username, password });

// export const regsister = ({ username, password }) =>
//     client.post("/api/auth/register", { username, password });

// export const check = () =>
//     client.get("/api/auth/check");


// export const request = (options) => {
//     const headers = new Headers({
//         'Content-Type': 'application/json',
//     })

//     if (localStorage.getItem(ACCESS_TOKEN)) {
//         headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
//     }

//     const defaults = { headers: headers };
//     options = Object.assign({}, defaults, options);

//     return fetch(options.url, options)
//         .then(response =>
//             response.json().then(json => {
//                 if (!response.ok) {
//                     return Promise.reject(json);
//                 }
//                 return json;
//             })
//         );
// };


export const addHeader = () => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = { headers: headers };

    return defaults;
}

export const getCurrentUser = ({ username }) => {
    // const defaults = addHeader();

    client.get(API_BASE_URL + `/users/${username}`);
}

export const login = ({ loginRequest }) => {
    const defaults = addHeader();
    const body = Object.assign({}, defaults, loginRequest);


    client.post(API_BASE_URL + '/auth/login', body);
}

export const signup = ({ signupRequest }) => {
    const defaults = addHeader();
    const body = Object.assign({}, defaults, signupRequest);

    client.post(API_BASE_URL + '/users', body);
}