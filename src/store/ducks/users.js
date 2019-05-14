// action types
export const Types = {
  ADD_REQUEST: 'USERS_ADD_REQUEST',
  ADD_SUCCESS: 'USERS_ADD_SUCCESS',
  ADD_FAILURE: 'USERS_ADD_FAILURE',
  ADD_OPENMODAL: 'USERS_ADD_OPENMODAL',
  ADD_CLOSEMODAL: 'USERS_ADD_CLOSEMODAL',
};

// reducers
const initialState = {
  loading: false,
  error: false,
  isModalOpen: false,
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
        isModalOpen: false,
      };

    case Types.ADD_OPENMODAL:
      return { ...state, isModalOpen: true };

    case Types.ADD_CLOSEMODAL:
      return { ...state, isModalOpen: false, error: false };

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
  addUserOpenModal: () => ({ type: Types.ADD_OPENMODAL }),
  addUserCloseModal: () => ({ type: Types.ADD_CLOSEMODAL }),
};
