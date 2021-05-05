//default state of the data layer at starup
export const defaultState = {
    user: null,
};

//pushing data into global state
export const actionTypes = {
    SET_USER: "SET_USER"
};


//
const reducer = (state, action) => {
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
};

export default reducer;