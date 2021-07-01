import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component{
  onUpdateStatus = () =>{
    // this.props.onUpdateStatus(this.props.task.id);
    this.props.onUpdateStatus(this.props.task.id);
  }
  onDelete = () =>{
    this.props.onDelete(this.props.task.id);
    this.props.onCloseForm();
  }
  onUpdate = () =>{
    // this.props.onUpdate(this.props.task.id);
    this.props.onOpenForm();
    this.props.onEditTask(this.props.task);
  }
  render(){
    var {task,index} = this.props;

    return(
        <tr>
        <td>{index+1}</td>
        <td className="text-center">
          <span className="lable lable-danger"> {task.name}</span>
        </td>
        <td className="text-center">
          <span className={task.status===true?'bg-danger pl-2 pr-2 text-white':'bg-success pl-2 pr-2 text-white'} onClick={this.onUpdateStatus}>{task.status===true?'kích hoạt':'ẩn'}</span>
        </td>
        <td className="text-center">
          
          <button type="button" className="btn btn-warning" onClick={this.onUpdate}><i className="fas fa-pen"></i>sửa</button>&nbsp;
          <button type="button" className="btn btn-danger" onClick={this.onDelete}><i className="far fa-trash-alt"></i>xóa</button>
          
        </td>
      </tr>
     
      
    );
  }
}
const mapStateToProps = state =>{
  return{

  };
};
const mapDisPatchToProps =(dispatch,props)=>{
  return{
    onUpdateStatus:(id)=>{
      dispatch(actions.updateStatus(id));
    },
    onDelete:(id)=>{
      dispatch(actions.deleteTasks(id));
    },
    onCloseForm:()=>{
      dispatch(actions.closeForm());
    },
    onOpenForm:()=>{
      dispatch(actions.openForm());
    },
    onEditTask:(task)=>{
      dispatch(actions.editItem(task));
    }
  };
};

export default connect(mapStateToProps,mapDisPatchToProps)(TaskItem);