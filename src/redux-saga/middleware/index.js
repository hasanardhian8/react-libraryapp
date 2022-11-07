import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUser from "../constans/UsersConstant";

import { handleSignup, handleSignin, handleSignout } from "./UsersSaga";

function* watchAll() {
  yield all([
    // User
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
  ]);
}

export default watchAll;