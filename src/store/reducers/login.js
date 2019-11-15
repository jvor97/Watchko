const initialState = {
    loading: false,
    error: null,
    userId: null,
    idToken: null
}

const reducer = (state=initialState,action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                loading: true
            }
        case 'LOGIN_SUCCESS':
            console.log(action.userId);
            return {
                ...state,
                loading: false,
                userId: action.userId,
                idToken: action.idToken,
                error: null
            }
        case 'LOGIN_FAIL':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case 'LOGIN_LOGOUT':
            return {
                ...state,
                idToken: null,
                userId: null
            }
    }
    return state;
}

export default reducer;