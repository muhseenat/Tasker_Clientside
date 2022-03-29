import ACTION_CONSTANTS from "../actions/actionTypes";

const initialState = {
  userData:JSON.parse(typeof window!=='undefined'&& localStorage.getItem("user")),
  test:null
}

const userDetails = (state = initialState, action)=> {
  switch (action.type) {
    case ACTION_CONSTANTS.USER_DETAILS:
      return {...state, userData: action.payload};
    case ACTION_CONSTANTS.JOB_DETAILS:
        return {...state, test: action.payload};
    default:
      return state;
  }
}

export default userDetails;
