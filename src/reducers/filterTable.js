import * as types from './../constans/ActionTypes';

var initialState = {
    name:'',
    status:-1
};

var myReducer = (state = initialState,action) =>{
    switch (action.type) {
        case types.FILTER_TABLE:
            console.log(action);
            return {
                name:action.filter.name,
                status:parseInt(action.filter.status)
            };
            // return action.filter;
            default:return state;
    }
};
export default myReducer;