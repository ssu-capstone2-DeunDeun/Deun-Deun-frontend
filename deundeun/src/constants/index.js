export const API_BASE_URL = 'http://ec2-3-36-65-95.ap-northeast-2.compute.amazonaws.com:8080';
export const ACCESS_TOKEN = '';

// export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'
export const OAUTH2_REDIRECT_URI = 'http://groopy.site'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_ur"i=' + OAUTH2_REDIRECT_URI;
export const NAVER_AUTH_URL = API_BASE_URL + '/oauth2/authorize/naver?redirect_uri=' + OAUTH2_REDIRECT_URI;