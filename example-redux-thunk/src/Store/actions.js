import {getUserAPI, postUserAPI} from '../Api/api';

export function getUser(name){
	return async (dispatch) => {
		let user = await getUserAPI(name);
		dispatch({type: 'GET_USER', payload: user});
	}
}

export function postUser(user){
	return async (dispatch) => {
		let res = await postUserAPI(user);
		dispatch({type: 'POST_USER', payload: res});
	}
}
