import { ACCESS_TOKEN, API_BASE_URL } from "constants/index";
import client from "./client";

// export const signup = (userRequestDto) => {
//     client.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN);
//     client.post(API_BASE_URL + '/user', userRequestDto)
// }
export const signup = (userRequestDto) =>
    client.post(API_BASE_URL + '/user', userRequestDto);



// export const getCurrentUser = (username) => {
//     // const defaults = addHeader();
//     client.get(API_BASE_URL + `/user/${username}`);
// }


export const getHashtags = () =>
    client.get(API_BASE_URL + '/hashtags')


export const addHashtags = (hashtagInfoIds) =>
    // client.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN);
    client.post(API_BASE_URL + '/user/hashtags', hashtagInfoIds);


// export const isDuplicatedNickname = (isDuplicatedNickname) => (
//     client.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN);
// client.get(API_BASE_URL + `/user/nickname?nickname=${isDuplicatedNickname}`);
// );


export const isDuplicatedNickname = (isDuplicatedNickname) =>
    client.get(API_BASE_URL + `/user/nickname?nickname=${isDuplicatedNickname}`)
