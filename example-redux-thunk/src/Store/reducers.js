const testUser = {
    email: "leslie_ggl@hotmail.com",
    favoriteColor: "00ff00",
    username: "Leslie",
    age: 29,
    sex: "female"
}
const initialState = {users: [testUser], currentUser: testUser};

export default (state=initialState, action) => {
	switch(action.type){
		case 'POST_USER':
			return {...state, users: [...state.users, action.payload]};
        case 'GET_USER':
            return {...state, currentUser: action.payload};
		default:
			return state;
	}
}
