import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      keyword : ''
    }
  }
  onchange =(event)=>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState ({
      [name] : value
    });
  }
  onSearch = () =>{
    this.props.onSearch(this.state.keyword);
  }
  render(){
    var { keyword} = this.state;
    return(
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          
        <div className="input-group">
          <input type="text" className="form-control"name="keyword" placeholder="Search" value={keyword} onChange={this.onchange}/>
          <span className="input-group-btn">
            <button type="button" className="btn btn-primary" onClick={this.onSearch}><i className="fas fa-search"></i>tìm</button>
          </span>
        </div>
        
      </div>
     
      
    );
  }
}
const mapStateToProps =(state)=>{
  return  {
  }
};

const mapDisPatchToProps = (disPatch,Props)=>{
  return{
    onSearch:(keyword)=>{
      disPatch(actions.searchTask(keyword));
    },
  }
}

export default connect(mapStateToProps,mapDisPatchToProps)(Search);

