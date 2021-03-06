import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import createCartAction from '../actions/createCartAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {itemWebsite:"", itemName:"", itemQuantity:"", itemPrice:"", itemList:[]};
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
            this.props.history.push('/');
        }
    }

    render() {
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
                        <button className="submitButton" type="submit">Add Item</button>
                        <button className="submitButton" onClick={(e) => this.finishedAddingItems(e)}>Buy Now!</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createCartAction: createCartAction},dispatch);
}

export default connect(null,mapDispatchToProps)(AddItem);








