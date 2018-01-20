import decode from 'jwt-decode';
import auth0 from 'auth0-js';
import axios from 'axios';


export function homeBaseState() {
  return {
    type: 'HOME_BASE_STATE'
  }
}

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';
const CLIENT_ID = 'WvJ6rYTxRexqciAB_bJr6d2PHFMmLmNx';
const CLIENT_DOMAIN = 'get-recruited.auth0.com';
const REDIRECT = 'http://localhost:3000/callback'; // development
//const REDIRECT = 'https://intense-mesa-15069.herokuapp.com/callback'; // development
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

export const GET_STUDENT_ATHLETES = "GET_STUDENT_ATHLETES";
export const START_STUDENT_ATHLETES_SEARCH = "START_STUDENT_ATHLETES_SEARCH";
export const RECEIVED_STUDENT_ATHLETES = "RECEIVED_STUDENT_ATHLETES";

export const GET_SINGLE_ATHLETE = "GET_SINGLE_ATHLETE";
export const START_SINGLE_ATHLETE_SEARCH = "START_SINGLE_ATHLETE_SEARCH";
export const RECEIVED_SINGLE_ATHLETE = "RECEIVED_SINGLE_ATHLETE";

export const CREATE_STUDENT_ATHLETE = "CREATE_STUDENT_ATHLETE";
export const START_CREATE_STUDENT_ATHLETE = "START_CREATE_STUDENT_ATHLETE";
export const RECEIVED_CREATE_STUDENT_ATHLETE = "RECEIVED_CREATE_STUDENT_ATHLETE";

export const CREATE_PROFILE = "CREATE_PROFILE";
export const START_CREATE_PROFILE = "START_CREATE_PROFILE";
export const RECEIVED_CREATE_PROFILE = "RECEIVED_CREATE_PROFILE";

export const DELETE_STUDENT_ATHLETE = "DELETE_STUDENT_ATHLETE";


const API_URL = "http://localhost:5000/api/v1" ; // development
//const API_URL = "https://intense-plateau-74097.herokuapp.com/api/v1" ; // heroku production

export function getStudentAthletes(){
  let url = API_URL + '/student_athletes'
  return (dispatch) => {
    type: GET_STUDENT_ATHLETES,
    dispatch(startStudentAthletesSearch())
      return axios.get( url ).then(
        (response) => {
          let athletesArray = response.data;
            dispatch(receivedStudentAthletes(athletesArray))
        },
        (err) => {
          console.log(err);
        }
    )
  }
}

export function startStudentAthletesSearch(){
  return {
    type : START_STUDENT_ATHLETES_SEARCH
  }
}

export function receivedStudentAthletes(athletes){
  return{
    type: RECEIVED_STUDENT_ATHLETES,
    studentAthletesArray: athletes
   }
}

export function getSingleAthlete(id){
  let url = API_URL + '/student_athletes/' + id
  return (dispatch) => {
    type: GET_SINGLE_ATHLETE,
    dispatch(startSingleAthleteSearch())
      return axios.get( url ).then(
        (response) => {
          let athlete = response.data;
            dispatch(receivedSingleAthlete(athlete))
        },
        (err) => {
          console.log(err);
        }
    )
  }
}

export function startSingleAthleteSearch(){
  return {
    type : START_SINGLE_ATHLETE_SEARCH
  }
}

export function receivedSingleAthlete(athlete){
  return{
    type: RECEIVED_SINGLE_ATHLETE,
    singleAthlete: athlete,
    athleteId: athlete.id
  }
}

export function createStudentAthlete(props){
  let url = API_URL + '/student_athletes/'
  return (dispatch) => {
    type: CREATE_STUDENT_ATHLETE,
    dispatch(startCreateStudentAthlete())
      return axios.post( url, props ).then(
        (response) => {
            dispatch(receivedCreateStudentAthlete())
        },
        (err) => {
          console.log(err);
        }
    )
  }
}

export function startCreateStudentAthlete(){
  return {
    type : START_CREATE_STUDENT_ATHLETE
  }
}

export function receivedCreateStudentAthlete(athlete){
  return{
    type: RECEIVED_CREATE_STUDENT_ATHLETE
  }
}

/*
export function createProfile(id, props){
  let url = API_URL + '/profiles/'
  return (dispatch) => {
    type: CREATE_PROFILE,
    dispatch(startCreateProfile())
      return axios.post( url, id, props ).then(
        (response) => {
            dispatch(receivedCreateProfile())
        },
        (err) => {
          console.log(err);
        }
    )
  }
}
*/

export function createProfile(id, props){
  let url = API_URL + '/profiles/'
  return (dispatch) => {
    type: CREATE_PROFILE,
    dispatch(startCreateProfile())
        let final_obj = {student_athlete_id: id, profile: props};
console.log('[action creator createProfile] (about to post) final_obj:');
console.log(final_obj);
        // return axios.post( url, id, props ).then(
        return axios.post( url, final_obj ).then(
        (response) => {
            dispatch(receivedCreateProfile())
        },
        (err) => {
          console.log(err);
        }
    )
  }
}

export function startCreateProfile(){
  return {
    type : START_CREATE_PROFILE
  }
}

export function receivedCreateProfile(profile){
  return{
    type: RECEIVED_CREATE_PROFILE
  }
}
