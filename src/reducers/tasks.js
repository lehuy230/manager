import { connect } from 'react-redux';
import * as types from './../constans/ActionTypes';

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState =data?data: [];
var s4=()=>{
    return Math.floor((1+Math.random()) * 0x10000).toString().substring(1);
  }
 var genarateID=()=>{
    return s4() + s4() + "-" + s4() + s4() + "-" + s4() + s4() + "-" + s4() + s4() + "-" + s4() + s4();
  }
  var findIndex = (tasks,id) =>{
    var result = -1;
    tasks.forEach((task, index) => {
      if(task.id === id){
        result = index;
      }
    });
    return result;
  }
var myReducer = (state = initialState,action) =>{
    switch (action.type) {
        case types.LIST_ALL:
            console.log(action);
                return state; 
            // default:return state;
        case types.ADD_TASK:
             console.log(action);
             var task ={
              id: action.task.id,
              name:action.task.name,
              status:action.task.status === true?true:false
             }
             if(!task.id){
                task.id = genarateID(); 
                state.push(task);
             }else{
              index = findIndex(state,task.id);
              state[index]=task;
             }
            
                localStorage.setItem('tasks',JSON.stringify(state));
                return [...state];
        case types.UPDATE_STATUS:
            console.log(action);
            var id = action.id;
            var index = findIndex(state,id);
           if(index !== -1){
            // var cloneTask ={...state[index]};
            //     cloneTask.status = !cloneTask.status;
            //     state[index] = cloneTask;
            state[index] = {
                ...state[index],
                status:!state[index].status
            }
             localStorage.setItem('tasks',JSON.stringify(state));
           }
            return[...state];
        case types.DELETE_TASK:
          var id = action.id;
          var index = findIndex(state,id);
          if(index!==-1){
            state.splice(index,1);
            localStorage.setItem('tasks',JSON.stringify(state));
          }
          return[...state];
         
            default:return state;
    }
};
export default myReducer;