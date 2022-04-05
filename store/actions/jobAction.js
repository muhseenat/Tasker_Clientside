import ACTION_CONSTANTS from './actionTypes'

export const setJobDetails = (data) => dispatch =>{
    dispatch({
        type:ACTION_CONSTANTS.JOB_DETAILS,
        payload:data
    })
}