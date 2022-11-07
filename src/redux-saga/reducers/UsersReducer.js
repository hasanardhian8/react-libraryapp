import * as ActionType from "../constants/UsersConstant";

const INIT_STATE = {
  regions: [],
};

const usersReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_USERS_REQUEST:
      return { ...state };
    case ActionType.GET_USERS_SUCCESS:
      return GetUsersSucceed(state, action);
      case ActionType.ADD_USERS_REQUEST:
            return { ...state }
        case ActionType.ADD_USERS_SUCCESS:
            return AddUsersSucceed(state, action)
    default:
      return GetUsersSucceed(state, action);
  }
};
const GetUsersSucceed = (state, action) => {
  return {
    ...state,
    users: action.payload,
  };
};

const AddUsersSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    users: [...state.users, payload],
  };
};

export default usersReducer;
