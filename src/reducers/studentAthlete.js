import { addNewAthlete, addSportForAthlete } from '../actions/action';

function studentAthlete(state = [], action) {
  switch (action.type) {
    case 'ADD_NEW_ATHLETE':
      return   {
        ...state,
        idToken: action.idToken,
        firstName: action.firstName,
        middleName: action.middleName,
        lastName: action.lastName,
        gender:  action.gender,
        beginUniversity: action.beginUniversity,
        fullName: action.fullname
        }

    case 'ADD_SPORT_FOR_ATHLETE':
      return   {
        ...state,
        idToken: action.idToken,
        fullName: action.fullname,
        sport: action.sport
        }

    default:
      return state

  }
}

export default studentAthlete;
