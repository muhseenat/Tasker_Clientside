import ACTION_CONSTANTS from '../actions/actionTypes'


const initialState={
    jobData:JSON.parse(typeof window!=='undefined' && localStorage.getItem("jobs"))
}
const jobDetails = (state=initialState,action)=>{
    switch(action.type){
        case ACTION_CONSTANTS.JOB_DETAILS:
         return {...state,jobData:action.payload};
        default:
            return state; 
    }
}


export default jobDetails;