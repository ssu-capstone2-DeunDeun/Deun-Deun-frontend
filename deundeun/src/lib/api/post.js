import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
import screen from './screen';

//property -> data, like , view, applicant
export const getHome = (property) =>
    screen.get(API_BASE_URL + `/home?property=${property}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    })



//categoryType -> 여러가지 종류
export const getAllClubs = (categoryType) =>
    screen.get(API_BASE_URL + `/clubs?categoryType=${categoryType}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    })



// clubId는 정수입니다.
export const post = (clubId, postRequestDto) =>
    screen.post(API_BASE_URL + `/clubs/${clubId}/posts`, postRequestDto, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    })

