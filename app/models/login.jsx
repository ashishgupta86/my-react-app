import React from 'react';
import $ from 'jquery';

export default class AppLogin extends React.Component {
	constructor(props) {
    		super(props);
    		this.state = {email:''};
    		this.setEmail = this.setEmail.bind(this);
    		this.setPasswd = this.setPasswd.bind(this);
    		this.processLogin = this.processLogin.bind(this);
  	}

	setEmail(e) {
		this.setState({email: e.target.value});
	}

	setPasswd(e) {
		this.setState({password: e.target.value});
	}

	render() {
		return (
		        <form name='useLogin' novalidate>
		                <input type="text" name="email" placeholder="Email" onChange={this.setEmail} required/>
	                	<input type="password" name="password" placeholder="Password" onChange={this.setPasswd} required/>
	        	        <button type="button" onClick={this.processLogin}>Login</button>
		        </form>
      		);
   	}

   	processLogin() {
        	var data = {
    			email: this.state.email,
    			password: this.state.password
  		};
		
		$.ajax({
    			type: 'POST',
    			url: 'http://jsonplaceholder.typicode.com/posts',
    			data: data
  		})
  		.done(function(data) {
			console.log("getting data from the server......."+data);
			localStorage.setItem("_token", "Some value here...");
  		})
  		.fail(function(jqXhr) {
    			console.log('failed to register');
  		});

   	}
};
