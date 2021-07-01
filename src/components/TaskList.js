import React,{Component} from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends Component{
  constructor(props){
    super(props);
    this.state = {
      filterName : '',
      filterStatus : -1 
    }
  }
  onChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    var filter ={
      name:name === 'filterName'?value:this.state.fiterName,satatus:name==='filterStatus'?value:this.state.filterStatus
    };
    this.props.onFilter(filter);
    this.setState({
        [name]:value
    });
  }
  render(){
    
   
    // var { tasks } = this.props;
    var {tasks,filterTable,keyword,sortI} = this.props;
    console.log(sortI.sortBy);
    var {fiterName,filterStatus} = this.state;

     if(sortI.sortBy==='name'){
      tasks.sort((a,b)=>{
        if(a.name > b.name) return sortI.sortValue;
        else if(a.name < b.name) return -sortI.sortValue;
      });
    }else{
      tasks.sort((a,b)=>{
        if(a.status > b.status) return -sortI.sortValue;
        else if(a.status < b.status) return sortI.sortValue;
      });
    }

    if(keyword){
      tasks = tasks.filter((task)=>{
        return task.name.toLowerCase().indexOf(keyword) !== -1;
    });
    }
    
    if(filterTable.name){
      tasks = tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(filterTable.name) !== -1;
          
      });
      console.log(filterTable);
    }
   if(filterTable.satatus){
    tasks = tasks.filter((task)=>{
      if(filterTable.status === -1){
        return tasks;
      }else{
        return task.status === (filterTable.status ===1?true:false);
      }
    });
   }
    var elmTasks = tasks.map((task, index) => {
      return <TaskItem key = {tasks.id} index = {index} task ={task} onUpdate={this.props.onUpdate}/>
    });

    
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
        <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">stt</th>
            <th className="text-center">tên</th>
            <th className="text-center">trạng thái</th>
            <th className="text-center">hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input className="form-control" name="filterName" value={fiterName} onChange={this.onChange}/>
            </td>
            
            <td>
              <select name="filterStatus"  className="form-control" value={filterStatus} onChange={this.onChange}>
                <option value={-1}> tất cả</option>
                <option value={0}> ẩn</option>
                <option value={1}> Kích hoạt</option>
              </select>
            </td>
            <td></td>
            
          </tr>
        {/* <TaskItem/> */}
        {elmTasks}
        </tbody>
      </table>
     
      
    );
  }
}
const mapStateToProps =(state)=>{
  return  {
    tasks:state.tasks,
    isDisPlayForm:state.isDisPlayForm,
    filterTable:state.filterTable,
    keyword:state.search,
    sortI:state.sortTask
  }
};
const  mapDispatchToProps=(dispacth,props)=>{
  return  {
   onFilter:(filter)=>{
     dispacth(actions.filterTask(filter))
   }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(TaskList);