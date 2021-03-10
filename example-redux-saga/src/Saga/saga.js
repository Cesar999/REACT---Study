import { call, put, takeLatest} from 'redux-saga/effects';
import {getUserByID, postUser, removeUser} from '../Api/api';

function* workerGetUser(action){
    try {
        const user = yield call(getUserByID, action.payload);
        yield put({type: 'ADD_USER', payload: user});
    }  catch(error) {
        yield put({type: 'REQUEST_FAILED', payload: error});
    }
}

function* workerPostUser(action){
    const newUser = yield call(postUser, action.payload);
    yield put({type: 'ADD_USER', payload: newUser});
}

function* workerRemoveUser(action){
    const removedUserID = yield call(removeUser, action.payload);
    yield put({type: 'DELETE_USER', payload: removedUserID});
}

function* watchUser(){
    yield takeLatest('GET_USER', workerGetUser);
    yield takeLatest('POST_USER', workerPostUser);
    yield takeLatest('REMOVE_USER', workerRemoveUser);
}

export {watchUser}