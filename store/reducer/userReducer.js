import ACTION_CONSTANTS from "../actions/actionTypes";

const initialState = {
  userData:{}
  
}

const userDetails = (state = initialState, action)=> {
  switch (action.type) {
    case ACTION_CONSTANTS.USER_DETAILS:
      return {...state, userData: action.payload};
    default:
      return state;
  }
}

export default userDetails;
