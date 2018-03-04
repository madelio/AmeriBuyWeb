import React from 'react';
import { browserHistory } from 'react-router'

export default class Signup extends React.Component {
		signup(e) {
			var email = document.getElementById('email').value;
			var pass = document.getElementById('pass').value;
			var fname = document.getElementById('fname').value;
			var lname = document.getElementById('lname').value;
			var mnum = document.getElementById('mnum').value;
			var addr = document.getElementById('addr').value;
			var city = document.getElementById('city').value;
			var state = document.getElementById('state').value;
			var zip = document.getElementById('zip').value;


				localStorage.setItem("email", email);
				localStorage.setItem("pass", pass);
				localStorage.setItem("fname", fname);
				localStorage.setItem("lname", lname);
				localStorage.setItem("mnum", mnum);
				localStorage.setItem("addr", addr);
				localStorage.setItem("city", city);
				localStorage.setItem("userstate", state);
				localStorage.setItem("zip", zip);

				this.props.history.push('/')

			
		}

	render() {
		return (
			<div>
				<div className="signup-header">
					<p>Signup</p>
				</div>

				<div className="signup-form">
			  		<input type="text" id="email" placeholder="Email Address"></input><br/>
			  		<input type="password" id="pass" placeholder="Password"></input><br/>
			  		<input type="text" id="fname" placeholder="First Name"></input><br/>
			  		<input type="text" id="lname" placeholder="Last Name"></input><br/>
			  		<input type="text" id="mnum" placeholder="Mobile Number"></input><br/>
			  		<input type="text" id="addr" placeholder="Street Name"></input><br/>
			  		<input type="text" id="city" placeholder="City"></input><br/>
			  		<input type="text" id="state" placeholder="State"></input><br/>
			  		<input type="text" id="zip" placeholder="Zipcode"></input><br/>
					<input type="reset" value="Register" onClick={(e) => this.signup(e)}></input>
				</div>
			</div>
		);
	}
}