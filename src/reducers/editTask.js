import * as types from './../constans/ActionTypes';

var initialState = {
    id:'',
    name:'',
    status:false
};

var myReducer = (state = initialState,action) =>{
    switch (action.type) {
        case types.EDIT_ITEM:
            return action.task;
            default:return state;
    }
};
export default myReducer;