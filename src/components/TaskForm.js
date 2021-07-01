import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      id : '',
      name : '',
      status : false
    }
  }
  componentWillMount(){
    console.log(this.props.editTask);
    if(this.props.editTask && this.props.editTask.id){
      this.setState({
        id:this.props.editTask.id,
        name:this.props.editTask.name,
        status:this.props.editTask.status
      });
    }else{
      this.onClear();
    }
  }
 
  componentWillReceiveProps(nextProps){
    console.log(nextProps);   
    if(nextProps && nextProps.editTask){
      this.setState({
        id:nextProps.editTask.id,
        name:nextProps.editTask.name,
        status:nextProps.editTask.status
      });
      // nextProps.editTask = null;
    }else {
      this.onClear();
      }
    
  }
  onClear =()=>{
    this.setState({
      id:'',
      name:'',
      status:false
    });
  }
  onChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name==='status'){
      value = target.value === 'true'?true:false;
    }
    this.setState({
      [name] : value
    });
  }
  onSubmit = (event) =>{
    event.preventDefault();
    // this.props.onSubmit(this.state);
    this.props.onAddTask(this.state);
    console.log(this.state);
    this.onClear();
    this.onCloseForm();
  }
  onCloseForm = () =>{
    this.props.onCloseForm();
    this.onClear();
    console.log(this.props.isDisplayForm);
  }
  render(){
   
    console.log(this.props.isDisPlayForm);
    if(!this.props.isDisPlayForm) return null;
   
    return(
      
        <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">{!this.state.id?'thêm công việc ':'Cập nhật công việc'} <i className="far fa-times-circle" onClick={this.onCloseForm}></i></h3>
        </div>
        <div className="panel-body">
          
          <form onSubmit={this.onSubmit}>
           
          
            <div className="form-group">
              <label >tên</label>
              <input type="text" className="form-control" name="name" placeholder="nhập tên" value={this.state.name}  onChange={this.onChange}/>
            </div>
            <label>trạng thái</label>
            <select className="form-control" name="status" value={this.state.status} onChange={this.onChange}>
              <option value={true}>kích hoạt</option>
              <option value={false}>ẩn</option>
            </select>
            <br/>
          
            <div className="text-center">
              <button type="submit" className="btn btn-warning mr-5"><span className="fa fa-plus mr-5"></span>Lưu lại</button>
              <button type="button" className="btn btn-danger" onClick={this.onClear}><i className="far fa-times-circle mr-5"></i>Hủy bỏ</button>
            </div>
          
            
          </form>
          
        </div>
    </div>
      
    );
  }
}

const mapStateToProps =(state)=>{
  return  {
    isDisPlayForm:state.isDisPlayForm,
    editTask:state.editTask
  }
};

const mapDisPatchToProps = (disPatch,Props)=>{
  return{
    onAddTask:(task)=>{
      disPatch(actions.addtask(task));
    },
    onCloseForm:()=>{
      disPatch(actions.closeForm());
    }
  }
}

export default connect(mapStateToProps,mapDisPatchToProps)(TaskForm);
