import { combineReducers } from 'redux';
import tasks from './tasks'
import isDisPlayForm from './isDisplayForm'
import editTask from './editTask';
import filterTable from './filterTable';
import search from './search';
import sortTask from './sortTask';

const myReducer = combineReducers({
    tasks:tasks,
    isDisPlayForm:isDisPlayForm,
    editTask:editTask,
    filterTable:filterTable,
    search:search,
    sortTask:sortTask

});

export default myReducer;