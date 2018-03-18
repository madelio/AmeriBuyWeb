import React from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';
import loginValidatorAction from '../actions/loginValidatorAction';
import { bindActionCreators } from 'redux';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {email:"", password:""};
	}

	login(e) {		
		e.preventDefault();
		if(this.props.user) {
			if(this.props.user.email == this.state.email && this.props.user.password == this.state.password) {
				this.props.loginValidatorAction('1','LOGIN');
				this.props.history.push('/')
			}
		}
	}

	render() {
		return (
			<div>
				<div className="signup-header">
					<p>Login</p>
				</div>

				<div className="signup-form">
					<form onSubmit={(e) => this.login(e)}>
				  		<input type="text" onChange={(e) => this.setState({email: e.target.value})} placeholder="Email Address"></input><br/>
				  		<input type="password" onChange={(e) => this.setState({password: e.target.value})}  placeholder="Password"></input><br/>
						<button type="submit" className="submitButton">Login</button>
					</form>
				</div>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		user: state.user
	};
}

function mapDispatchToProps(dispatch) {
 	return bindActionCreators({loginValidatorAction: loginValidatorAction},dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);