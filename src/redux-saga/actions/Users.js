import * as ActionType from "../constans/UsersConstant"

//SIGNUP
export const doSignUpRequest = (payload) => ({
    type: ActionType.ADD_SIGNUP_REQUEST,
    payload
})
export const doSignUpSucced = (payload) => ({
    type: ActionType.ADD_SIGNUP_SUCCED,
    payload
})
export const doSignUpFailed = (payload) => ({
    type: ActionType.ADD_SIGNUP_FAILED,
    payload
})

//SIGNIN
export const doSignInRequest = (payload) => ({
    type: ActionType.GET_SIGNIN_REQUEST,
    payload
})
export const doSignInSucced = (payload) => ({
    type: ActionType.GET_SIGNIN_SUCCED,
    payload
})
export const doSignInFailed = (payload) => ({
    type: ActionType.GET_SIGNIN_FAILED,
    payload
})

//SIGNOUT
export const doSignoutRequest = (payload) => ({
    type: ActionType.GET_SIGNOUT_REQUEST,
    payload,
});

export const doSignoutSucceed = (payload) => ({
    type: ActionType.GET_SIGNOUT_SUCCEED,
    payload,
});
