import { START_STUDENT_ATHLETES_SEARCH, RECEIVED_STUDENT_ATHLETES, GET_STUDENT_ATHLETE } from '../actions/action';

const intitalStateApi = {
  studentAthletesArray: [],
  all: [],
  studentAthlete: null,
  gettingStudentAthletes: false
};

function studentAthlete(state = intitalStateApi, action) {
  switch(action.type) {

    case 'GET_STUDENT_ATHLETES' :
      return {
        ...state,
        studentAthletesArray: action.payload.data
      }


    case 'START_STUDENT_ATHLETES_SEARCH' :
      return {
        ...state,
        gettingStudentAthletes: true
    }

    case 'RECEIVED_STUDENT_ATHLETES' :
    console.log('in reducer for recieved')
    console.log(action.studentAthletesArray)
      return {
        ...state,
        studentAthletesArray: action.studentAthletesArray,
        gettingStudentAthletes: false
      }



    case 'GET_STUDENT_ATHLETE' :
      return {
        ...state,
        studentAthlete: action.payload.data
      }

    case 'RECEIVED_STUDENT_ATHLETES' :
        return {
          ...state,
          studentAthlete: action.studentAthletes
        }


    default:
     return state;
 }
}

export default studentAthlete;
