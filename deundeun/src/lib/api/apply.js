import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
import client from './client';


export const getApplyForms = (clubName) =>
    client.get(API_BASE_URL + `/clubs/${clubName}/forms`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });

export const getApplyForm = (clubInfo) =>
    client.get(API_BASE_URL + `/clubs/${clubInfo.clubName}/forms/${clubInfo.clubApplyFormId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });