import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToList} from '../actions';

class ToList extends Component{
  constructor(){
    super();
this.state={
  firstName:'',
  surName:'',
  phone:'',
  users:[]
};

}

componentDidMount() {
  fetch('/users')
    .then(res => res.json())
    .then(users => {this.setState({ users });
    console.log({users}) } );

}


addFirstName=(e)=>this.setState({firstName:e.target.value});
addSurName=(e)=>this.setState({surName:e.target.value});
addPhone=(e)=>this.setState({phone:e.target.value});

addToLis=()=>this.setState({users:[
  ...this.state.users,
  {
    firstName:this.state.firstName,
    surName:this.state.surName,
    phone:this.state.phone
  }
],
 firstName:'',
 surName:'',
 phone:''
});

render(){
var list = this.state.users;

   return(
     <div class='search'>
     <p><b><em>Write the details of the person you want to add to the list:</em></b></p>
   <input type="text" onChange={this.addFirstName} name="firstName"
        placeholder="Name" value={this.state.firstName}/><br/>
   <input type="text" onChange={this.addSurName} name="surName"
        placeholder="Surame" value={this.state.surName}/><br/>
   <input type="text" onChange={this.addPhone} name="phone"
        placeholder="Phone" value={this.state.phone}/><br/>

   <button onClick={this.addToLis}> Add Data to List  </button><br/>

    {this.state.firstName}<br/>
    {this.state.surName}<br/>
    {this.state.phone}<br/>


    <div>
       <ul> { list.map((l,i)=>{ return <li key={i}>{l.phone}
    	<a href={l.firstname}>{l.firstname}</a></li> }) }
       </ul>
    </div>

   	</div>

   );
  }
}

const mapStateToProps = (state) =>{
  return {
    persons: state.persons,
    users:state.users
  };
}

const matchDispatchToProps=(dispatch)=>{
	return bindActionCreators({addToList:addToList},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(ToList);
