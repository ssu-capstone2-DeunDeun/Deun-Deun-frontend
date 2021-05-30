import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
import client from './client';

// export const signup = (userRequestDto) => {
//    client.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN);
//     client.post(API_BASE_URL + '/user', userRequestDto)
// }
// export const signup = (userRequestDto) =>
//     client.post(API_BASE_URL + '/user', userRequestDto)

export const signup = (userRequestDto) =>
	client.post(API_BASE_URL + '/user', userRequestDto, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
		}
	});

export const getUserInfo = () =>
	client.get(API_BASE_URL + '/user', {
		headers: {
			Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
		}
	});

export const getHashtags = () =>
	client.get(API_BASE_URL + '/hashtags', {
		headers: {
			Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
		}
	});

export const addHashtags = (hashtagInfoIds) =>
	// client.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN);
	client.post(API_BASE_URL + '/user/hashtags', hashtagInfoIds, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
		}
	});

// export const isDuplicatedNickname = (isDuplicatedNickname) => (
//     client.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN);
// client.get(API_BASE_URL + `/user/nickname?nickname=${isDuplicatedNickname}`);
// );

export const isDuplicatedNickname = (isDuplicatedNickname) =>
	client.get(API_BASE_URL + `/user/nickname?nickname=${isDuplicatedNickname}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
		}
	});

export const isDuplicatedClubName = (clubName) => client.get(API_BASE_URL + `/clubs/check=${clubName}`);
