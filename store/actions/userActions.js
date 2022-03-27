import ACTION_CONSTANTS from './actionTypes'

export const setUserDeatails = (data) => dispatch =>{
    dispatch({
        type:ACTION_CONSTANTS.USER_DETAILS,
        payload:data
    })
}