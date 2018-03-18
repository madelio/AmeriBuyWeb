import React from 'react';
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import createUserAction from '../actions/createUserAction';

class Signup extends React.Component {
	constructor(props){
		super(props);
		this.state = {
				email:"",
				password:"",
				fname:"",
				lname:"",
				mnum:"",
				stname:"",
				city:"",
				cityState:"",
				zipcode:""
		};
	}

	ajaxRequest() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				//check if user alreaxy exists
			}
		};
		xhttp.open("POST", "", true);
	  	let user = {
	  		email: this.state.email,
			password: this.state.password,
			fname: this.state.fname,
			lname: this.state.lname,
			mnum: this.state.mnum,
			stname: this.state.stname,
			city: this.state.city,
			cityState: this.state.cityState,
			zipcode: this.state.zipcode
	  	}
		//xhttp.send(user);
		console.log("AJAX POST - User Profile Sent");
	}

	handleForm(e) {
	  	e.preventDefault();	
	  	let user = {
	  			email: this.state.email,
				password: this.state.password,
				fname: this.state.fname,
				lname: this.state.lname,
				mnum: this.state.mnum,
				stname: this.state.stname,
				city: this.state.city,
				cityState: this.state.cityState,
				zipcode: this.state.zipcode
	  	}
	  	if(this.state.email != "" && this.state.password != "" && this.state.fname != "" && this.state.lname != "" && 
	  		this.state.mnum != "" && this.state.stname != "" && this.state.city != "" && this.state.cityState != "" && 
	  		this.state.zipcode != "")
	  	{
		  	this.props.createUserAction(user,'USER');
		  	this.ajaxRequest();
		  	this.props.history.push('/');
	  }
	}

	render() {
		return (
			<div>
				<div className="signup-header">
					<p>Signup</p>
				</div>
				<div className="signup-form">
					<form onSubmit={(e) => this.handleForm(e)}>
				  		<input type="text" onChange={(e) => this.setState({email:e.target.value})} placeholder="Email Address"></input><br/>
				  		<input type="password" onChange={(e) => this.setState({password:e.target.value})} placeholder="Password"></input><br/>
				  		<input type="text" onChange={(e) => this.setState({fname:e.target.value})} placeholder="First Name"></input><br/>
					 	<input type="text" onChange={(e) => this.setState({lname:e.target.value})} placeholder="Last Name"></input><br/>
						<input type="text" onChange={(e) => this.setState({mnum:e.target.value})} placeholder="Mobile Number"></input><br/>
				  		<input type="text" onChange={(e) => this.setState({stname:e.target.value})} placeholder="Street Name"></input><br/>
				  		<input type="text" onChange={(e) => this.setState({city:e.target.value})} placeholder="City"></input><br/>
				  		<input type="text" onChange={(e) => this.setState({cityState:e.target.value})} placeholder="State"></input><br/>
					  	<input type="text" onChange={(e) => this.setState({zipcode:e.target.value})} placeholder="Zipcode"></input><br/>
						<button className="submitButton" type="submit">Sign Up</button>
					</form>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
 	return bindActionCreators({createUserAction: createUserAction},dispatch);
}

export default connect(null,mapDispatchToProps)(Signup);



