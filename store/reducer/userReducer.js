import ACTION_CONSTANTS from "../actions/actionTypes";

const initialState = {
  userData:JSON.parse(typeof window!=='undefined'&& localStorage.getItem("user")||null),
 
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
