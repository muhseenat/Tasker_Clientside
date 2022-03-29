import ACTION_CONSTANTS from './actionTypes'

export const setUserDetails = (data) => dispatch =>{
    dispatch({
        type:ACTION_CONSTANTS.USER_DETAILS,
        payload:data
    })
}
export const testData = (data) => dispatch =>{
    dispatch({
        type:ACTION_CONSTANTS.JOB_DETAILS,
        payload:data
    })
}