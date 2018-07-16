
const intitalStateApi = {
  singleUser: [],
  studentAthletesArray: [],
  all: [],
  singleAthlete: [],
  singleProfile: [],
  singleAthletic: [],
  singleAcademic: [],
  gettingSingleUser: false,
  gettingStudentAthletes: false,
  gettingSingleAthlete: false,
  gettingProfile: false,
  gettingAthetic: false,
  gettingAcademic: false,
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

    case 'GET_USER' :
      return {
        ...state
    }

    case 'START_GET_USER' :
      return {
        ...state,
        gettingSingleUser: true
    }

    case 'RECEIVED_GET_USER' :
      return {
        ...state,
        singleUser: action.singleUser,
        userId: action.singleUser.id,
        gettingSingleUser: false
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

    case 'GET_ATHLETIC' :
      return {
        ...state
    }

    case 'START_GET_ATHLETIC' :
      return {
        ...state,
        gettingAthetic: true
    }

    case 'RECEIVED_GET_ATHLETIC' :
      return {
        ...state,
        singleAthletic: action.singleAthletic,
        gettingAthetic: false,
      }

    case 'GET_ACADEMIC' :
      return {
        ...state
    }

    case 'START_GET_ACADEMIC' :
      return {
        ...state,
        gettingAcademic: true
    }

    case 'RECEIVED_GET_ACADEMIC' :
      return {
        ...state,
        singleAcademic: action.singleAcademic,
        gettingAcademic: false,
      }

    default:
     return state;
 }

}

export default studentAthlete;
