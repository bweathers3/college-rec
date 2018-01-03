import { GET_STUDENT_ATHLETES, GET_STUDENT_ATHLETE } from '../actions/action';

const intitalStateApi = {all: [], article: null};

function studentAthleteApi(state = intitalStateApi, action) {
  switch(action.type) {
    case 'GET_STUDENT_ATHLETES' :
      return {
        ...state,
        all: action.payload.data
      }

    case 'GET_STUDENT_ATHLETE' :
      return {
        ...state,
        studentAthlete: action.payload.data
      }

    default:
     return state;
 }
}

export default studentAthleteApi;
