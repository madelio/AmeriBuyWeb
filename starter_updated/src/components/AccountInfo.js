import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import createUserAction from '../actions/createUserAction';

class AccountInfo extends React.Component {
    constructor(props) {
        super(props);
        if(!this.props.user)
            this.state = {
                email:"",
                password:"",
                fname:"",
                lname:"",
                mnum:"",
                stname:"",
                city:"",
                cityState:"",
                zipcode:""
            }
        else {
            this.state = {
                email:this.props.user.email,
                password:this.props.user.password,
                fname:this.props.user.fname,
                lname:this.props.user.lname,
                mnum:this.props.user.mnum,
                stname:this.props.user.stname,
                city:this.props.user.city,
                cityState:this.props.user.cityState,
                zipcode:this.props.user.zipcode
            }
        }
    }

    saveChanges(e) {
        e.preventDefault(); 
        let user = {
                email: this.state.email,
                password: this.state.password,
                fname: this.state.fname,
                lname: this.state.lname,
                mnum: this.state.mnum,
                stname: this.state.stname,
                city: this.state.city,
                cityState: this.state.cityState,
                zipcode: this.state.zipcode
        }
        if(this.state.email != "" && this.state.password != "" && this.state.fname != "" && this.state.lname != "" && 
            this.state.mnum != "" && this.state.stname != "" && this.state.city != "" && this.state.cityState != "" && 
            this.state.zipcode != "")
        {
            this.props.createUserAction(user,'USER');
            this.ajaxRequest();
            this.props.history.push('/');
        }
    }

    ajaxRequest() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // update user profile on server
            }
        };
        xhttp.open("POST", "", true);
        let user = {
                email: this.state.email,
                password: this.state.password,
                fname: this.state.fname,
                lname: this.state.lname,
                mnum: this.state.mnum,
                stname: this.state.stname,
                city: this.state.city,
                cityState: this.state.cityState,
                zipcode: this.state.zipcode
        }
        //xhttp.send(cart);
        console.log("AJAX POST - New Profile Sent");
    }

    render() {
        if(this.props.login != '1') {
            return (
                <div id="accountInfoComponent">
                    <nav id="sideNav"></nav>
                    <div id="edit-account">
                        <h1 className="h1style">User not logged-in</h1>
                    </div>
                </div>
            );
        }

        return (
            <div id="accountInfoComponent">
                <nav id="sideNav"></nav>
                <form id="edit-account" onSubmit={(e) => this.saveChanges(e)}>
                    <h1 className="h1style">Manage your Account</h1>
                    
                    <div className="innerinfo">
                        <label for="fname">First Name: </label>
                        <input class="personalinfo" type= "text" value={this.state.fname} onChange={(e) => this.setState({fname: e.target.value})}/>
                        <br />
                        <label for="lname">Last Name: </label>
                        <input class="personalinfo" type= "text" value={this.state.lname} onChange={(e) => this.setState({lname: e.target.value})}/>
                        <br />
                        <label for="email">Email: </label>
                        <input class="personalinfo" type= "text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                        <br />
                        <label for="phone">Phone: </label>
                        <input class="personalinfo" type= "text" value={this.state.mnum} onChange={(e) => this.setState({mnum: e.target.value})}/>
                        <br />
                    </div>
                    <div className="addressInfo">
                        <label for="address">Address: </label>
                        <input class="personalinfo" type= "text" value={this.state.stname} onChange={(e) => this.setState({stname: e.target.value})}/>
                        <br />
                        <label for="city">City: </label>
                        <input class="personalinfo" type= "text" value={this.state.city} onChange={(e) => this.setState({city: e.target.value})}/>
                        <br />
                        <label for="state">State: </label>
                        <input class="personalinfo" type= "text" value={this.state.cityState} onChange={(e) => this.setState({cityState: e.target.value})}/>
                        <br />
                        <label for="zip">Zip: </label>
                        <input class="personalinfo" type= "text" value={this.state.zipcode} onChange={(e) => this.setState({zipcode: e.target.value})}/>
                    </div>
                    <button className="submitButtonMiddle" type="submit">Save Changes</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createUserAction: createUserAction},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountInfo);



