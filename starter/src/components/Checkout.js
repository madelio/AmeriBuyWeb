import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Checkout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {user:this.props.user, cart: this.props.cart, login: this.props.login};
    }

    render() {
      if(this.state.login != '1') {
        return (<h2 className="signup-header"> User not logged-in </h2>);
      }

      const listItems = this.state.cart.map((d) => <li key={d.itemName}>{d.itemName}</li>);

      return (
        <h3>{listItems}</h3>
      );
    }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    login: state.login,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Checkout);
