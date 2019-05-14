// action types
export const Types = {
  ADD_REQUEST: 'USERS_ADD_REQUEST',
  ADD_SUCCESS: 'USERS_ADD_SUCCESS',
  ADD_FAILURE: 'USERS_ADD_FAILURE',
};

// reducers
const initialState = {
  loading: false,
  error: false,
  data: [],
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true, error: false };

    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case Types.ADD_SUCCESS:
      return {
        loading: false,
        error: false,
        data: [
          ...state.data,
          action.payload.data,
        ],
      };

    default:
      return state;
  }
}
// actions
export const Creators = {
  addUserRequest: (githubuser, coordinates) => ({
    type: Types.ADD_REQUEST,
    payload: { githubuser, coordinates },
  }),
  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),
  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
