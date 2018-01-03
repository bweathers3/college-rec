import decode from 'jwt-decode';
import auth0 from 'auth0-js';
import  axios from 'axios';

export function homeBaseState() {
  return {
    type: 'HOME_BASE_STATE'
  }
}

//####################### auth0 login/logout
const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';
const CLIENT_ID = 'WvJ6rYTxRexqciAB_bJr6d2PHFMmLmNx';
const CLIENT_DOMAIN = 'get-recruited.auth0.com';
const REDIRECT = 'http://localhost:3000/callback';
const SCOPE = 'openid';
const AUDIENCE = 'https://get-recruited.auth0.com/userinfo';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

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

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

export function setAccessToken() {
  let accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

export function setIdToken() {
  let idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

// new studentAthlete record

export const ADD_NEW_ATHLETE = "ADD_NEW_ATHLETE";
export const ADD_SPORT_FOR_ATHLETE = "ADD_SPORT_FOR_ATHLETE";

export const GET_STUDENT_ATHLETES = "GET_STUDENT_ATHLETES";
export const GET_STUDENT_ATHLETE = "GET_STUDENT_ATHLETE";
export const CREATE_STUDENT_ATHLETE = "CREATE_STUDENT_ATHLETE";
export const DELETE_STUDENT_ATHLETE = "DELETE_STUDENT_ATHLETE";

const API_URL = "http://localhost:5000/api/v1" ;


export const addNewAthlete = (idToken, firstName, middleName, lastName, gender, beginUniversity, fullName) => {
 return {
 type: ADD_NEW_ATHLETE,
 idToken: idToken,
 firstName: firstName,
 middleName: middleName,
 lastName: lastName,
 gender:  gender,
 beginUniversity: beginUniversity,
 fullName: fullName
 }
}

export const addSportForAthlete = (idToken, fullName, sport) => {
 return {
 type: ADD_SPORT_FOR_ATHLETE,
 idToken: idToken,
 fullName: fullName,
 sport: sport
 }
}

export function getStudentAthletes(){
  const request = axios.get('${API_URL}/studentAthletes');
  return{
    type: GET_STUDENT_ATHLETES,
    payload: request
  };
}

export function getStudentAthlete(id){
  const request = axios.get('${API_URL}/studentAthlete/${id}');

  return{
    type: GET_STUDENT_ATHLETE,
    payload: request
  };
}

export function createStudentAthlete(props){
  const request = axios.post('${API_URL}/studentAthletes', props);
  return{
    type: CREATE_STUDENT_ATHLETE,
    payload: request
  };
}

export function deleteStudentAthlete(id){
  const request = axios.delete('${API_URL}/studentAthletes/${id}');

  return{
    type: DELETE_STUDENT_ATHLETE,
    payload: request
  };
}
