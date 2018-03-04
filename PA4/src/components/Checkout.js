import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Checkout.css'
import ShoppingCart from './ShoppingCart'
import { userLoggedIn, user } from '../api/customerApi'

class Checkout extends React.Component {
    
    
    render() {
       const tableStyle = {
        backgroundColor: "white",
        boxShadow: "1px 1px 5px"
       };
       var items = ["Email", "Firstname", "Lastname", "Address", "City", "State", "Zip", "Phone"]
       var itemList = items.map((text) => <div>{text}: <input type="text" name={text} /> </div>);
      

        return (
            <div>
                <div className="checkoutlabel"><h1>Checkout</h1></div>
                <div className="checkout-info">
                <table className="checkout-info-table" style={tableStyle}>
                    <tr>
                        <th id="titleinfo" colSpan="2"> Information </th>
                    </tr>
                    <tr id="checkout-details">
                    <td className="personal-info" id="personal-info-id">
                    {itemList}
                    </td>
                    <td id="returning">
                        New customer <br /> <a href="../login.html">Log In</a>
                        <br /> <a href="../login.html">Create Account</a>
                    </td>
                    </tr>
                    <tr>
                        <th colSpan="2"> Payment </th>
                    </tr>
                    <tr>
                        <td id="paymentInfo" colSpan="2">
                    Card Number: <input type="text" name="payment" />
                    <br /> Name on Card: <input type="text" name="cardame" />
                    <br />Expiration:
                    <select name="month">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <select name="year">
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th colSpan="2"> Shipping </th>
            </tr>
            <tr>
                <td id="shipping" colSpan="2">
                    <form id="shippingForm">
                        <input id="standard" type="radio" name="myRadio" checked /> $5 Standard Shipping: Wednesday, January 24 <br />
                        <input id="express" type="radio" name="myRadio" /> $12.50 Express Shipping: Monday, January 20 <br />
                    </form>
                </td>
            </tr>
                </table>
                </div>
                <ShoppingCart />
        
            </div>
        );
    }
}

export default Checkout;