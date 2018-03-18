import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import createCartAction from '../actions/createCartAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add } from '../api/addItemAPI';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {itemWebsite:"", itemName:"", itemQuantity:"", itemPrice:"", itemList:[], login:this.props.login};
    }

    addItem(e) {
        e.preventDefault();
        if(this.state.itemWebsite != "" && this.state.itemName != "" && this.state.itemQuantity != "" && this.state.itemPrice != "") {
            let item = {
                itemName: this.state.itemName,
                itemWebsite: this.state.itemWebsite,
                itemQuantity: this.state.itemQuantity,
                itemPrice: this.state.itemPrice
            };
            this.setState({itemList: [...this.state.itemList, item]});
        }
        e.target.reset();
    }

    finishedAddingItems(e) {
        e.preventDefault();
        console.log(this.state.itemList);
        if(this.state.itemList.length > 0) {
            this.props.createCartAction(this.state.itemList, 'CART');
            alert("Items succesfully added to cart");
            this.ajaxRequest();
            this.props.history.push('/');
        }
    }

    addItemDisable() {
        if(this.state.itemList.length > 0)
            return false;
        else
            return true;
    }

    ajaxRequest() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                add();
            }
        };
        xhttp.open("POST", "", true);
        let cart = this.state.itemList;
        //xhttp.send(cart);
        console.log("AJAX POST - Cart Sent");
    }

    render() {
        if(this.state.login != '1') 
            return (<h2 className="signup-header"> User not logged-in </h2>);

        return (
            <div>
                <div id="whatCan">
                    <p id="whatCanText">
                        What can we buy for you?
                    </p>
                </div>

                <div className="signup-form">
                    <form onSubmit={(e) => this.addItem(e)}>
                        <input onChange={(e) => this.setState({itemWebsite: e.target.value})} placeholder="https://"/><br/>
                        <input onChange={(e) => this.setState({itemName: e.target.value})} placeholder="Product Name"/><br/>
                        <input onChange={(e) => this.setState({itemQuantity: e.target.value})} placeholder="Quantity"/><br/>
                        <input onChange={(e) => this.setState({itemPrice: e.target.value})} placeholder="Item Price(USD)"/><br/>
                        <h4 className="small-header">Total Items: {this.state.itemList.length}</h4>
                        <button className="submitButton" type="submit">Add Item</button>
                        <button id="buynowbtn" className="submitButton" disabled={this.addItemDisable()} onClick={(e) => this.finishedAddingItems(e)}>Buy Now!</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    login: state.login,
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createCartAction: createCartAction},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(AddItem);








