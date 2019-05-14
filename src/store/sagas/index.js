import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';

import api from '~/services/api';
import {
  Creators as UsersActions,
  Types as UsersTypes,
} from '~/store/ducks/users';

function* usersAdd(action) {
  try {
    const { githubuser, coordinates } = action.payload;
    const { data: users } = yield select(state => state.users);

    if (users.find(u => u.login === githubuser)) {
      yield put(UsersActions.addUserFailure('Usuário já adicionado'));
    } else {
      const { data } = yield call(api.get, `/users/${githubuser}`);
      yield put(UsersActions.addUserSuccess({
        id: data.id,
        login: data.login,
        bio: data.bio,
        avatar: data.avatar_url,
        coordinates,
      }));
    }
  } catch (err) {
    yield put(UsersActions.addUserFailure('Usuário não encontrado'));
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest(UsersTypes.ADD_REQUEST, usersAdd),
  ]);
}
