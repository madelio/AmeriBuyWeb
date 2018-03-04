import React from 'react';
import {Link} from 'react-router';
import transLogo from './transLogo.png';
import cart from './cart.png';

export default class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<div className="topnav">
				  <Link to="/"><div id = "logo"><a><img src = {transLogo} alt = "logo"/></a></div></Link>
				  <Link to="login"><a>Login</a></Link>
				  <Link to="signup"><a>Signup</a></Link>
				  <Link to="/"><a>FAQ</a></Link>
				  <Link to="/"><a>Contact Us</a></Link>
				  <Link to="account"><a>Account</a></Link>
				  <Link to="checkout"><a>Checkout</a></Link>
				  <button className="topnav-button"><img src={cart} alt="cart"/></button>
				  <Link to="addItem"><button className="topnav-button">Add Item</button></Link>
				</div>
				{this.props.children}
			</div>
		);
	}
}
