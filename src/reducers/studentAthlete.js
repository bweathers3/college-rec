
const intitalStateApi = {
  studentAthletesArray: [],
  all: [],
  singleAthlete: [],
  singleProfile: [],
  gettingStudentAthletes: false,
  gettingSingleAthlete: false,
  gettingProfile: false,
  athleteId: ""
};

function studentAthlete(state = intitalStateApi, action) {
  switch(action.type) {

    case 'GET_STUDENT_ATHLETE' :
      return {
        ...state
    }

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

    case 'GET_SINGLE_ATHLETE' :
      return {
        ...state
    }

    case 'START_SINGLE_ATHLETE_SEARCH' :
      return {
        ...state,
        gettingSingleAthlete: true
    }

    case 'RECEIVED_SINGLE_ATHLETE' :
      return {
        ...state,
        singleAthlete: action.singleAthlete,
        athleteId: action.singleAthlete.id,
        gettingSingleAthlete: false
      }

    case 'GET_PROFILE' :
      return {
        ...state
    }

    case 'START_GET_PROFILE' :
      return {
        ...state,
        gettingProfile: true
    }

    case 'RECEIVED_GET_PROFILE' :
      return {
        ...state,
        singleProfile: action.singleProfile,
        gettingProfile: false,
      }

    default:
     return state;
 }

}

export default studentAthlete;
