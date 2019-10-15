

let initialState = {
    movies: [],
    error: "",
}

const reducer = (state=initialState,action) => {
    switch (action.type) {
        case 'LOAD_MOVIES':
            console.log(action.movies);
            return{
                ...state,
                movies: action.movies
            }
    }
    return state;
}

export default reducer;