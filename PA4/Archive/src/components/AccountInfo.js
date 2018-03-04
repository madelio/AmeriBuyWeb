import React from 'react';
import ReactDOM from 'react-dom';
import { user, userLoggedIn } from '../api/customerApi'

class AccountInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {first: user.first,
            last: user.last,
            email: user.email,
            phone: user.phone,
            address: user.address,
            city: user.city,
            state: user.state,
            zip: user.zip
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }

     
    
      handleChange(event) {
        var name = event.target.name;
       

        switch(name) {
            case "firstname": this.setState({first: event.target.value});
                break;
            case "lastname": this.setState({last: event.target.value});
                break;
            case "email": this.setState({email: event.target.value});
                break;
            case "phone": this.setState({phone: event.target.value});
                break;
            case "address": this.setState({address: event.target.value});
                break;
            case "city": this.setState({city: event.target.value});
                break;
            case "state": this.setState({state: event.target.value});
                break;
            case "zip": this.setState({zip: event.target.value});
                break;
                
        } 
    }


    
      handleSubmit(event) {
          console.log(this.state.first + "statename");
        user.first = this.state.first,
        user.last = this.state.last,
        user.email = this.state.email,
        user.phone= this.state.phone,
        user.address = this.state.address,
        user.city = this.state.city,
        user.state = this.state.state,
        user.zip= this.state.zip

        changedValues();

      }
    render() {

        

        var buttonStyle = {
            borderRadius: "8px",
            padding: "5px 10px",
            textAlign: "center",
            backgroundColor: "#F4F4EF",
            marginLeft:"30%",
            width:"10%"

        }

        var h1style = {
            marginLeft:"40%"
        }

       
        return (
            <div id="accountInfoComponent">
                <nav id="sideNav"></nav>
                <div id="edit-account">
                    <h1 style={h1style}>Manage your Account</h1>
                    
                    <div className="innerinfo">
                        <label for="fname">First Name: </label>
                        <input class="personalinfo" type= "text" id="fname" name="firstname" value={this.state.first} onChange={this.handleChange}/>
                        <br />
                        <label for="lname">Last Name: </label>
                        <input class="personalinfo" type= "text" id="lname" name="lastname" value={this.state.last} onChange={this.handleChange}/>
                        <br />
                        <label for="email">Email: </label>
                        <input class="personalinfo" type= "text" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        <br />
                        <label for="phone">Phone: </label>
                        <input class="personalinfo" type= "text" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                        <br />
                    </div>
                    <div className="addressInfo">
                        <label for="address">Address: </label>
                        <input class="personalinfo" type= "text" id="address" name="address" value={this.state.address} onChange={this.handleChange}/>
                        <br />
                        <label for="city">City: </label>
                        <input class="personalinfo" type= "text" id="city" name="city" value={this.state.city} onChange={this.handleChange}/>
                        <br />
                        <label for="state">State: </label>
                        <input class="personalinfo" type= "text" id="state" name="state" value={this.state.state} onChange={this.handleChange}/>
                        <br />
                        <label for="zip">Zip: </label>
                        <input class="personalinfo" type= "text" id="zip" name="zip" value={this.state.zip} onChange={this.handleChange}/>
                    </div>
                    <button style={buttonStyle} onClick={this.handleSubmit}>Save Changes</button>
                </div>
            </div>
        );
    }
}

export default AccountInfo;

export function changedValues() {
         
    var values = {
      fname : document.getElementById("fname").value,
      lname : document.getElementById("lname").value,
      email : document.getElementById("email").value,
      phone : document.getElementById("phone").value,
      address : document.getElementById("address").value,
      city : document.getElementById("city").value,
      state : document.getElementById("state").value,
      zip : document.getElementById("zip").value
    }
   
    return values;
}