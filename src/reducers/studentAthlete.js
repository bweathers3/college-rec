import { START_STUDENT_ATHLETES_SEARCH,
  RECEIVED_STUDENT_ATHLETES,
  START_SINGLE_ATHLETE_SEARCH,
  RECEIVED_SINGLE_ATHLETE,
  GET_STUDENT_ATHLETE } from '../actions/action';

const intitalStateApi = {
  studentAthletesArray: [],
  all: [],
  singleAthlete: [],
  gettingStudentAthletes: false,
  gettingSingleAthlete: false
};

function studentAthlete(state = intitalStateApi, action) {
  switch(action.type) {

    case 'START_STUDENT_ATHLETES_SEARCH' :
      return {
        ...state,
        gettingStudentAthletes: true
    }

    case 'RECEIVED_STUDENT_ATHLETES' :
      return {
        ...state,
        studentAthletesArray: action.studentAthletesArray,
        gettingStudentAthletes: false
      }

      case 'START_SINGLE_ATHLETE_SEARCH' :
        return {
          ...state,
          gettingSingleAthlete: true
      }

      case 'RECEIVED_SINGLE_ATHLETE' :
      console.log('in reducer for recieved single athlete')
      console.log(action.singleAthlete)
        return {
          ...state,
          singleAthlete: action.singleAthlete,
          gettingSingleAthlete: false
        }

    default:
     return state;
 }
}

export default studentAthlete;
