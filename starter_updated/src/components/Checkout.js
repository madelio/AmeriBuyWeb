import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import createCardAction from '../actions/createCardAction';
import { browserHistory } from 'react-router';
import { checkout } from '../api/checkoutAPI';

class Checkout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {user:this.props.user, cart: this.props.cart, login: this.props.login,cardNum:"",cardExpiry:"",cardSVN:""};
    }

    handleCheckout(e) {
      e.preventDefault();
      if(this.state.cardNum != "" && this.state.cardExpiry != "" && this.state.cardSVN != "") {
        let card = {
          cardNum: this.state.cardNum,
          cardExpiry: this.state.cardExpiry,
          cardSVN: this.state.cardSVN
        }
        this.props.createCardAction(card,'CARD');
        this.ajaxRequest();
        alert("Checkout Success");
        this.props.history.push('/checkout/success');
      }
    }

    handleDisabledButton() {
      if(this.state.cardNum != "" && this.state.cardExpiry != "" && this.state.cardSVN != "") 
        return false;
      else
        return true;
    }

    ajaxRequest() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                checkout();
            }
        };
        xhttp.open("POST", "", true);
        let checkoutDetails = {
          cart: this.state.cart,
          card: {
            cardNum: this.state.cardNum,
            cardExpiry: this.state.cardExpiry,
            cardSVN: this.state.cardSVN
          }
        };
        //xhttp.send(checkoutDetails);
        console.log("AJAX POST - Checkout Request Sent");
    }

    render() {
      if(this.state.login != '1') {
        return (<h2 className="signup-header"> User not logged-in </h2>);
      }

      if(!this.state.cart) {
        return (<h2 className="signup-header"> Empty Cart</h2>);
      }

      const listItems = this.state.cart.map((d) => 
      <tr key={d.itemName}>
        <td className="table-item">{d.itemName}</td>
        <td className="table-item">{d.itemPrice}</td>
        <td className="table-item">{d.itemQuantity}</td>
      </tr>);

      return (
        <div className="textalign">
          <h3 className="header">Item Cart Information</h3>

          <table className="itemTable">
            <tr>
              <td className="table-header">Item Name</td>
              <td className="table-header">Price (USD)</td>
              <td className="table-header">Units</td>
            </tr>
            {listItems}
          </table>

          <h3 className="header">Shipping Information</h3>

          <div className="info">
            <h3><span className="infoFont">Name: </span>{this.state.user.fname} {this.state.user.lname}</h3>
            <h3><span className="infoFont">Address: </span>{this.state.user.stname}, {this.state.user.city}, {this.state.user.cityState}, {this.state.user.zipcode}</h3>
            <h3><span className="infoFont">Mobile Number: </span>{this.state.user.mnum}</h3>
          </div>          

          <h3 className="header">Credit Card Information</h3>

          <form className="signup-form" onSubmit={(e) => this.handleCheckout(e)}> 
            <input value={this.state.cardNum} onChange = {(e) => this.setState({cardNum: e.target.value})} placeholder="Credit Card Number"/><br/>
            <input value={this.state.cardExpiry} onChange = {(e) => this.setState({cardExpiry: e.target.value})} placeholder="Credit Card Expiry"/><br/>
            <input value={this.state.cardSVN} onChange = {(e) => this.setState({cardSVN: e.target.value})} placeholder="Credit SVN"/><br/>
            <button className="submitButton" type="submit" disabled={this.handleDisabledButton()}>Checkout</button>
          </form>
        </div>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createCardAction: createCardAction},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Checkout);
