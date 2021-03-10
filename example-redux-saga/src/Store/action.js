export const getUser = (id) => {
    return {type: 'GET_USER', payload: id};
}

export const postUser = (newUser) => {
    return {type: 'POST_USER', payload: newUser};
}

export const deleteUser = (id) => {
    return {type: 'REMOVE_USER', payload: id};
}
