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
export const post = (post) =>
    screen.post(API_BASE_URL + `/clubs/${post.clubId}/posts`, post.postRequestDto, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    })


export const getClubPosts = (clubId) =>
    screen.get(API_BASE_URL + `/clubs/${clubId}/posts`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    })

export const getPost = (postId) =>
    screen.get(API_BASE_URL + `/posts/${postId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });

export const getPosts = () =>
    screen.get(API_BASE_URL + "/posts", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });


export const updatePost = (post) =>
    screen.patch(API_BASE_URL + `/posts/${post.postId}`, post.postRequestDto, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });


export const deletePost = (postId) =>
    screen.delete(API_BASE_URL + `/posts/${postId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });


export const likePost = (postId) =>
    screen.post(API_BASE_URL + `/like/posts/${postId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });

export const getPostLike = (postId) =>
    screen.get(API_BASE_URL + `/like/posts/${postId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });


