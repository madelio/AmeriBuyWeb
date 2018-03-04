import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Checkout.css';
import ShoppingCart from './ShoppingCart';
import { userLoggedIn, user } from '../api/customerApi';
import { Link } from 'react-router';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        userLoggedIn : false
      };
    }

    render() {
        
        if (userLoggedIn != null) {
            this.setState = ({userLoggedIn : true});
            console.log("user is logged in");
        }  else {

        console.log("user is not logged in"); }

       const tableStyle = {
        backgroundColor: "white",
        boxShadow: "1px 1px 5px"
       };

       const checkoutStyle = {
         borderRight : "1px solid black"
       }

       var items = ["Email", "Firstname", "Lastname", "Address", "City", "State", "Zip", "Phone"]
       var values = [user.email, user.first, user.last, user.address, user.city, user.state, user.zip, user.phone]
       var itemValStr = []; 
       var returningText = "";
       function createStr(names, values) {
       
           for (var y = 0; y < items.length; y++) {
               itemValStr.push(<div>{items[y]}: <input type="text" name={items[y]} value={values[y]} /> </div>);
           }
       }

       function defaultStr() {
         return (<div><h3> Returning Customer </h3> 
        <br /> Username: <input type='text' name='user'/>
        <br />Password: <input type='text' name='password'/></div>);
       }


       if (userLoggedIn != null) {
            createStr(items,values);
            checkoutStyle.borderRight = "";
       } else {
            itemValStr.push(defaultStr());
            returningText = <div>New customer <br /> <Link to="/login">Log In</Link>
            <br /> <Link to="/signup">Create Account</Link></div>
       }


        return (
            <div>
                <div className="checkoutlabel"><h1>Checkout</h1></div>
                <div className="checkout-info" >
                <table className="checkout-info-table" style={tableStyle}>
                    <tr>
                        <th id="titleinfo" colSpan="2"> Information </th>
                    </tr>
                    <tr id="checkout-details">
                    <td className="personal-info" id="personal-info-id" style={checkoutStyle}>
                    {itemValStr}
                    </td>
                    <td id="returning">
                        {returningText}
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
