import React from 'react';
import { browserHistory } from 'react-router'

export default class Login extends React.Component {
	login(e) {		
		var email = document.getElementById('email').value;
		var pass = document.getElementById('pass').value;

		var _email = localStorage.getItem("email");
		var _pass = localStorage.getItem("pass");

		if(email == _email && pass == _pass) {
			localStorage.setItem("state", "logged-in");
			this.props.history.push('/')
		}
	}

	render() {
		return (
			<div>
				<div className="signup-header">
					<p>Login</p>
				</div>

				<div className="signup-form">
			  		<input type="text" id="email" placeholder="Email Address"></input><br/>
			  		<input type="password" id="pass" placeholder="Password"></input><br/>
					<input type="reset" value="Login" onClick={(e) => this.login(e)}></input>
				</div>
			</div>
		);
	}
}