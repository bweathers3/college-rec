
import { salesPoint1, salesPoint2, salesPoint3 } from '../appData/salesPoints';

// create a homePage object
const homePageState = {
  pointOne: salesPoint1,
  pointTwo: salesPoint2,
  pointThree: salesPoint3
}

function salesPointsHome(state = homePageState, action) {
  switch(action.type) {
    case 'HOME_BASE_STATE' :
      return {
        ...state,
        pointOne: salesPoint1,
        pointTwo: salesPoint2,
        pointThree: salesPoint3
      }

  default:
     return state;
 }
}

export default salesPointsHome;
