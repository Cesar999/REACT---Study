const initialState = {users: [], error:''};

function reducer(state=initialState, action) {
    switch(action.type){
        case 'ADD_USER':
            for(let user of state.users){
                if(user.id === action.payload.id) {
                    return state;
                }
            }
            return {error:'', users: [...state.users, action.payload]};
        case 'DELETE_USER':
            return {error:'', users: [...state.users.filter(user=>user.id!==action.payload)]}
        case 'REQUEST_FAILED':
            return  {...state, error: action.payload}
        default:
            return state;
    }
}

export default reducer;