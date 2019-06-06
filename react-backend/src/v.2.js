import React, { Component } from 'react';
import './App.css';

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

var libraries = [

    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},

];

            
 var searchString = this.state.searchString.trim().toLowerCase();

 if(searchString.length > 0){
 libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }


let dropdownText;

if (this.state.isOpened){
	dropdownText = <div>Write firstname and surname of your friend<br/>
<input name="firstName"/><br/>
<input name="serName"/><br/>
<input name="phone"/>
	</div>;
}


    return (
      <div className="App">
      
        <h1>Users</h1>


        <label>
		<input type="text" onChange={this.handleChange}
		 placeholder="Type here" />  <br/><br/>
	  <div>{this.state.searchString}</div>
	  </label>


<div>
{/*<button onClick={this.componentReload.bind(this)}>Reload</button>*/}

<button onClick={this.addCart.bind(this)}>Add Friend's Phone to List</button>
{dropdownText}
</div>


<div>
   <ul> { libraries.map((l,i)=>{ return <li key={i}>{l.name} 
	<a href={l.url}>{l.url}</a></li> }) }
   </ul>
</div>


<div>
       <ul> {this.state.users.map((user) => {return(
       	<div>
          <li>{user.username}</li>
          <li>{user.phone}</li>
        </div>
          );
           } )}
        </ul>
</div>

      </div>
    );
  }
}

export default App;












