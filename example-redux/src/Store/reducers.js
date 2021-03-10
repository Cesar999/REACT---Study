const initialState = {
	todos: [
		{text: 'Play Guitar', date: '2020-01-20', id:0, done: false},
		{text: 'Study JavaScript', date: '2020-02-18', id:1, done: false},
		{text: 'Workout at the GYM', date: '2020-03-06', id:2, done: false},
        {text: 'Work at the Office', date: '2020-03-06', id:3, done: false}
	]
};

export default (state=initialState, action) => {
	switch(action.type){
		case 'ADD_TODO':
            return {todos: [...state.todos, action.payload]};
        case 'DELETE_TODO':
            return {todos: [...state.todos.filter(todo=>todo.id!==action.payload)]};
        case 'COMPLETE_TODO':
            const newTodos = [...state.todos.map(todo=>{
                if(todo.id === action.payload){
                    return {...todo, done: !todo.done};
                }
                return todo;
            })];
            return {todos: newTodos};
		default:
			 return state;
	}
}
