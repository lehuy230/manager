import * as types from './../constans/ActionTypes';
export const listall = () =>{
    return {
        type:types.LIST_ALL
    }
};
export const addtask = (task) =>{
    return {
        type:types.ADD_TASK,
        task
    }
};
export const toggleForm = () =>{
    return{
        type:types.TOGGLE_FORM
    }
}
export const openForm =()=>{
    return{
        type:types.OPEN_FORM
    }
}
export const closeForm =()=>{
    return{
        type:types.CLOSE_FORM
    }
}
export const updateStatus = (id)=>{
    return{
        type:types.UPDATE_STATUS,
        id:id
    }
}
export const deleteTasks = (id)=>{
    return{
        type:types.DELETE_TASK,
        id:id
    }
}
export const editItem = (task)=>{
    return{
        type:types.EDIT_ITEM,
        task
    }
}
export const filterTask = (filter)=>{
    return{
        type:types.FILTER_TABLE,
        filter
    }
}
export const searchTask = (keyword)=>{
    return{
        type:types.SEARCH,
        keyword
    }
}
export const sortTask = (sortBy,sortValue)=>{
    return{
        type:types.SORT,
        sortBy,
        sortValue
    }
}