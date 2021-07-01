import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Sort extends Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //     sort : {
  //       by : 'name',
  //       value : 1
  //     }
  //   }
  // }
  // onclick = (sortBy, sortValue) => {
  //   this.setState({
  //     sort : {
  //       name : sortBy,
  //       value : sortValue
  //     }
  //   });
  //   console.log(this.state);
  // }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  open = (sortBy, sortValue) => {
    this.props.onSort(
      sortBy,
      sortValue
    );
  }
  render(){
    return(
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          
          <button type="button" className="btn btn-danger" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdownMenu1">sắp xếp <i className="far fa-caret-square-down ml-5"></i></button>
          <ul className="dropdown-menu">
            <li onClick = {() => this.open('name',1)} >
              <a role="button" className={(this.props.sortTask.sortBy==='name' && this.props.sortTask.sortValue===1)?'dropdown-item sort_selected':'dropdown-item'}>
              
              <i className="fas fa-sort-alpha-down mr-5">
                Tên a-z
              </i>
              </a>
            </li>
            <li onClick={()=>this.open('name', -1)}>
              <a role="button" className={(this.props.sortTask.sortBy==='name' && this.props.sortTask.sortValue===-1)?'dropdown-item sort_selected':'dropdown-item'}>
              <i className="fas fa-sort-alpha-down-alt mr-5">
                tên z-a
              </i>
              </a>
            </li>

            <li onClick={()=>this.open('status', -1)}>
              <a role="button" className={(this.props.sortTask.sortBy==='status' && this.props.sortTask.sortValue===-1)?'dropdown-item sort_selected':'dropdown-item'}>
              <i className="fas fa-sort-alpha-down-alt mr-5">
                trạng thái ẩn
              </i>
              </a>
            </li>
            <li onClick={()=>this.open('status', 1)}>
              <a role="button" className={(this.props.sortTask.sortBy==='status' && this.props.sortTask.sortValue===1)?'dropdown-item sort_selected':'dropdown-item'}>
              <i className="fas fa-sort-alpha-down-alt mr-5">
                trạng thái kích hoạt
              </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    );
  }
}
const mapStateToProps =(state)=>{
  return  {
    sortTask:state.sortTask
  }
};

const mapDisPatchToProps = (disPatch,Props)=>{
  return{
    onSort:(sortBy,sortValue)=>{
      disPatch(actions.sortTask(sortBy,sortValue));
    }
  }
}

export default connect(mapStateToProps,mapDisPatchToProps)(Sort);


