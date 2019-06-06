import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToList} from './actions';
import './App.css';
import List from './components/list';
import ToList from './components/addtolist';


class App extends Component {
	constructor(){
    super();

   this.state = {
   searchString:"",
   isOpened:false,
   users: []

  };

}


  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => {this.setState({ users });
      console.log({users}) } );

  }




  handleChange = event =>
this.setState({
	searchString:event.target.value
  });


 addCart=()=>
 this.setState({isOpened:!this.state.isOpened});




  render() {

var list = this.state.users;


 var searchString = this.state.searchString.trim().toLowerCase();

 if(searchString.length > 0){
 list= list.filter(function(l){
                return l.firstname.toLowerCase().match( searchString );
            });

        }


let dropdownText;

if (this.state.isOpened){
   dropdownText = <ToList/>
}


    return (
      <div className="App">

<List/>

        <h1>Users</h1>


        <label>
		<input type="text" onChange={this.handleChange}
		 placeholder="Search" />  <br/><br/>
	  <div>{this.state.searchString}</div>
	  </label>


    <div>
{/*<button onClick={this.componentReload.bind(this)}>Reload</button>*/}

<button onClick={this.addCart.bind(this)}>Click here to add to the list</button>
{dropdownText}
   </div>


<div>
   <ul> { list.map((l,i)=>{ return <li key={i}>{l.phone}
	<a href={l.firstname}>{l.firstname}</a></li> }) }
   </ul>
</div>





      </div>
    );
  }
}


const mapStateToProps=(state)=>{
	return{
	persons:state.persons,
	users:state.users
  }
}

const matchDispatchToProps=(dispatch)=>{
	return bindActionCreators({addToList:addToList},dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(App);
