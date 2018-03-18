import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class OrderSuccess extends React.Component {
    constructor(props){
        super(props);
        this.state = {cart: this.props.cart, user: this.props.user, card: this.props.card, login: this.props.login};
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
                <h3 className="header">Your order is on its way. . .</h3>
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
                    <h3><span className="infoFont">Mobile Number: </span>{this.state.user.mnum}</h3><br/>
                    <h3><span className="infoFont">Credit Card Number: </span>{this.state.card.cardNum}</h3>
                    <h3><span className="infoFont">Expiry: </span>{this.state.card.cardExpiry}</h3>
                    <h3><span className="infoFont">SVN: </span>{this.state.card.cardSVN}</h3>
                </div>   

                <h3 className="small-header">Estimated price: TBD</h3>
                <h3 className="small-header">Estimated delivery date: TBD</h3>


            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    login: state.login,
    cart: state.cart,
    card: state.card
  }
}

export default connect(mapStateToProps)(OrderSuccess);
