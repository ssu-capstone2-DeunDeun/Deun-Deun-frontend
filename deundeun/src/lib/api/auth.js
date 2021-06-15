import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
import client from './client';

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

export const getClubs = () =>
	client.get(API_BASE_URL + '/user/clubs', {
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

export const isDuplicatedNickname = (isDuplicatedNickname) =>
	client.get(API_BASE_URL + `/user/nickname?nickname=${isDuplicatedNickname}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
		}
	});

export const updateNickname = (nickname) =>
	client.patch(API_BASE_URL + `/user/nickname?nickname=${nickname}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
		}
	});

export const isDuplicatedClubName = (clubName) => client.get(API_BASE_URL + `/clubs/check?clubName=${clubName}`);

export const addClub = (clubRequestDto) =>
	client.post(API_BASE_URL + '/clubs', clubRequestDto, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
		}
	});

export const getClubInfo = (clubName) =>
	client.get(API_BASE_URL + `/clubs/${clubName}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
		}
	});
export const addApplication = (data) => {
	client.post(API_BASE_URL + `/clubs/${data.clubName}/forms`, data.newApplication, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
		}
	});
};

export const addRecruit = (data) => {
	client.post(API_BASE_URL + `/clubs/${data.clubName}/recruits`, data.newRecruit, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
		}
	});
};

export const sendAlarm = (messageRequest) => {
	client.post(API_BASE_URL + '/alarms', messageRequest, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
		}
	});
};
