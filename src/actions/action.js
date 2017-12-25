import decode from 'jwt-decode';
import auth0 from 'auth0-js';

export function homeBaseState() {
  return {
    type: 'HOME_BASE_STATE'
  }
}

//#######################
const ID_TOKEN_KEY = 'id_token';
//const ACCESS_TOKEN_KEY = 'access_token';
const CLIENT_ID = 'WvJ6rYTxRexqciAB_bJr6d2PHFMmLmNx';
const CLIENT_DOMAIN = 'get-recruited.auth0.com';
const REDIRECT = 'http://localhost:3000/callback';
const SCOPE = 'openid';
const AUDIENCE = 'https://get-recruited.auth0.com/userinfo';
//#######################

//**** begin auth0

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

/*
function loginSuccess(profile) {
  return {
    type: LOGIN_SUCCESS,
    profile
  }
}

function loginError(err) {
  return {
    type: LOGIN_ERROR,
    err
  }
}
*/

var auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
});

export function login() {
  auth.authorize({
    responseType: 'token id_token',
    redirectUri: REDIRECT,
    audience: AUDIENCE,
    scope: SCOPE
  });
}

function logoutSuccess(profile) {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    return dispatch(logoutSuccess());
  }
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}
//**** end auth0
