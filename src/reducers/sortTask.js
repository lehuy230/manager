import * as types from './../constans/ActionTypes';

var initialState = {
    sortBy:'name',
    sortValue:1
};

var myReducer = (state = initialState,action) =>{
    switch (action.type) {
        case types.SORT:
            console.log(action);
            return action;
            // return action.filter;
            default:return state;
    }
};
export default myReducer;