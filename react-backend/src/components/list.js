import React, {Component} from 'react';
import {bindActionCreators} from 'react';
import {connect} from 'react-redux';

class List extends Component{

showList() {
  return this.props.persons.map((index)=>{
    return (
      <li>{index.model}</li>
    );
  });
}

showList2() {
  return this.props.users.map((i)=>{
    return (
      <li>{i.phone}</li>
    );
  });
}

  render(){
    return(
      <div>
           <ol>{this.showList()} </ol>

           <ul>{this.showList2()} </ul>
       </div>
     );

  }
}

function mapStateToProps (state) {
  return {
    persons: state.persons,
    users:state.users
  };
}

export default connect(mapStateToProps)(List);
