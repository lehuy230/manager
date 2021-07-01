import React,{Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import {connect} from 'react-redux';
import * as actions from './actions/index';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      keyword:'',
      sortBy: 'name',
      sortValue:1
    
    }
  }
  onSort = (sortBy,sortValue) => {
    console.log(sortBy,sortValue);
    this.setState({
      sortBy:sortBy,
      sortValue:sortValue
    })
  }
  // onSearch = (keyword) =>{
  //   this.setState({
  //     keyword : keyword
  //   });
  // }
  // onFilter = (filterName,filterStatus) =>{
  //   filterStatus = parseInt(filterStatus,10);
  //   this.setState({
  //     filter : {
  //       name : filterName,
  //       status : filterStatus
  //     }
  //   });
  // }
  
  // onDelete = (id) =>{
  //   var index = this.findIndex(id);
  //   var {tasks} = this.state;
  //   if(index !== -1){
  //     tasks.splice(index,1);
  //     this.setState({
  //       tasks:tasks
  //     });
  //     localStorage.setItem('tasks',JSON.stringify(tasks));
  //   }
  //   this.onCloseForm();
  // }
  // onUpdate = (id) =>{
  //   var index = this.findIndex(id);
  //   var {tasks} = this.state;
  //   var taskEditting = tasks[index];
  //   this.setState({
  //     taskEditting:taskEditting
  //   });
  //   this.onShowForm();
  // }
  findIndex = (id) =>{
    var {tasks} = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if(task.id === id){
        result = index;
      }
    });
    return result;
  }
  toggleForm = () =>{
    // if(this.state.isDisPlayForm && this.state.taskEditting !== null){
    //   this.setState({
    //     isDisPlayForm : true,
    //     taskEditting:null
    //   });
    // }else{
    //   this.setState({
    //     isDisPlayForm : !this.state.isDisPlayForm,
    //     taskEditting:null
    //   });
    // }
    var {editTask} = this.props;
    if(editTask && editTask.id!=='')
    {
      this.props.onOpenForm();
    }else{
      this.props.onToggleForm();
    }
    
    this.props.onClearEditing({
      id:'',
      name:'',
      status:false
    });
   
  }
  onGenarateData = () =>{
    var tasks = [
     { id: this.genarateID(),
      name:"Học HTML5/CSS",
      status:false},
     { id: this.genarateID(),
        name:"Học Javascipt",
        status:true},
     { id: this.genarateID(),
          name:"Học bootstrap",
          status:false}
      
    ];
    // console.log(tasks);
    this.setState({
      tasks : tasks
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  onShowForm = () =>{
    this.setState({
      isDisPlayForm : true
    });
  }
  
  render(){
   
  var {isDisplayForm} = this.props;
    var {sortBy,sortValue} = this.state;//var tasks = this.state.tasks
    // var elmTaskForm = isDisplayForm?<TaskForm  task={taskEditting}/>:'';
    // if(filter){
    //   if(filter.name){
    //     tasks = tasks.filter((task)=>{
    //         return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //     });
    //   }
      // tasks = tasks.filter((task)=>{
      //   if(filter.status === -1){
      //     return tasks;
      //   }else{
      //     return task.status === (filter.status ===1?true:false);
      //   }
      // });
    // }
    // if(keyword){
    //   tasks = tasks.filter((task)=>{
    //     return task.name.toLowerCase().indexOf(keyword) !== -1;
    // });
    // }
    // if(sortBy==='name'){
    //   tasks.sort((a,b)=>{
    //     if(a.name > b.name) return sortValue;
    //     else if(a.name < b.name) return -sortValue;
    //   });
    // }else{
    //   tasks.sort((a,b)=>{
    //     if(a.status > b.status) return -sortValue;
    //     else if(a.status < b.status) return sortValue;
    //   });
    // }
   
    return(
      
      <div className="container">
        <div className="text-center">
          <h1>Quản lý công việc</h1>
        </div>
        
        <div className="row">
          <div className={isDisplayForm?"col-xs-4 col-sm-4 col-md-4 col-lg-4":''}>
            
            {/* <TaskForm/> */}
            {/* {elmTaskForm} */}
            <TaskForm  />
            
          </div>
          
          <div className={isDisplayForm?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            
            <button type="button" className="btn btn-primary" onClick={this.toggleForm}><span className="fa fa-plus mr-5"></span>thêm công việc</button>&nbsp;
            <button type="button" className="btn btn-primary" onClick={this.onGenarateData}>loading...</button>
            
            
           <Control onSort={this.onSort} sortBy={sortBy}
           sortValue={sortValue}/>
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  
                <TaskList/>
                  
                </div>
              </div>
            
            
          </div>
          
        </div>
        
      </div>
      
    );
  }
}
const mapStateToProps = (state)=>{
  return{
    isDisplayForm:state.isDisPlayForm,
    editTask:state.editTask
  };
};
const mapDisPatchToProps =(dispatch,props)=>{
  return{
    onToggleForm:()=>{
      dispatch(actions.toggleForm());
    },
    onClearEditing:(task)=>{
      dispatch(actions.editItem(task));
    },
    onOpenForm:()=>{
      dispatch(actions.openForm());
    }
  };
};
export default connect(mapStateToProps,mapDisPatchToProps)(App);
