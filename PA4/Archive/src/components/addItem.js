import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'

export default class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {webTemp:""}
    }

    nextPressed(e) {
        var next = document.getElementById("nextBut");
        var form = document.getElementById("forms");
        var first = document.getElementById("prodWeb");
        var webTemp;

        //hold URL in a variable
        webTemp = first.value;
        this.setState({webTemp});

        //clean out form
        while (form.firstChild) {
            forms.removeChild(forms.firstChild)
        }

        //remove button
        next.style.display = "none";

        //add new fields
        this.addNew(webTemp);
    }

    addNew(webTemp) {
        var form = document.getElementById("forms");
        //hold URL in a variable

        form.innerHTML += "Product web page: <br>"
        form.innerHTML += "<input class=\"formText\" type=\"text\" name=\"Product web page\" placeholder=\"" + webTemp + "\" disabled>"

        form.innerHTML += "<button type=button id=\"editBut\">Edit</button><br>";

        form.innerHTML += "Product name: <br>"
        form.innerHTML += "<input class=\"formText\" type=\"text\" name=\"ProdName\"> <br>"

        form.innerHTML += "Quantity to buy: <br>"
        form.innerHTML += "<input class=\"formText\" type=\"text\" name=\"Quantity\"> <br>"

        form.innerHTML += "Item price in USD: <br>"
        form.innerHTML += "<input class=\"formText\" type=\"text\" name=\"Product name\"> <br>"
    }

    editPressed(e) {
        if (e.target.id === "editBut") {
            var form = document.getElementById("forms");

            //clean out form
            while (form.firstChild) {
                forms.removeChild(forms.firstChild)
            }

            //refill
            form.innerHTML += "Product web page: <br>"
            form.innerHTML += "<input class=\"formText\" type=\"text\" name=\"Product web page\" value=\"" + this.state.webTemp + "\" >"

            var next = document.getElementById("nextBut");

            //unhide next button
            next.style.display = "inline";
        }

    }

    addPressed(e) {
        if (e.target.id === "addBut") {
            if (!localStorage.getItem("count")) {
                    localStorage.setItem("count", "0");
            }


            var webTemp = this.state.webTemp;
            //function to store forms into localStorage
            var data = e.target.parentNode.getElementsByTagName("INPUT");
            var temp = [data[1].value, data[2].value, webTemp, data[3].value];
            temp = JSON.stringify(temp);

            var stringCount = localStorage.getItem("count")
            var intCount = parseInt(stringCount);
            console.log(stringCount);
            localStorage.setItem("item" + stringCount, temp);

            stringCount = intCount + 1;
            localStorage.setItem("count", stringCount);

            alert("Order for " + data[1].value + " is processed!");

            console.log(localStorage.getItem("item0"));

    //        var array = JSON.parse(localStorage.getItem("item0"));

            //      alert(array[0]+array[1]+array[2]+array[3]);

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

                <div id="itemAdder">
                    <form id="forms" onClick={(e) => this.editPressed(e)}>
                        Product web page: <br/>
                        <input id="prodWeb" className="formText" type="text" name="Product web page" placeholder="https://"/><br/>
                    </form>

                    <button id="nextBut" onClick={(e) => this.nextPressed(e)}>Next</button>
                    <button id="addBut" onClick={(e) => this.addPressed(e)}>+ Add item to cart</button>
                </div>
            </div>
        );
    }
}   







