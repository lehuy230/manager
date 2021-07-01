import * as types from './../constans/ActionTypes';

var initialState = '';

var myReducer = (state = initialState,action) =>{
    switch (action.type) {
        case types.SEARCH:
            console.log(action);
            return action.keyword;
            // return action.filter;
            default:return state;
    }
};
export default myReducer;