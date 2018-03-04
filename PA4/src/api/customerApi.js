"use strict";
var counter = 1;
var userLoggedIn = localStorage.getItem("state");
console.log("value user " + userLoggedIn);

var Customer = {
    id : "",
    first : "",
    last : "",
    email : "",
    address : "",
    city : "",
    state : "",
    zip : "",
    phone : "",
    fullname : "",
    fulladdress : "",

    login : "",
    pw : ""
};


function CustomerBuilder(first, last, email, address, city, state, zip, phone, login, pw) {
    this.id = counter;
    counter ++;
    this.first = first;
    this.last = last;
    this.email = email;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.fullname = first + " " + last;
    this.fulladdress = address + ", " + city + ", " + state + " " + zip;
}


function CreateJaneDoe() {
    return new CustomerBuilder("Jane", "Doe", "jdoe@email",
    "1235 Street", "San Diego", "CA", "92152",
    "(880)880-8888",
    "jdiggity", "password");
}
var user = null;

if (userLoggedIn != null) {
    var email  = localStorage.getItem("email");
    var pw = localStorage.getItem("pass");
    var fname = localStorage.getItem("fname");
    var lname = localStorage.getItem("lname");
    var mnum = localStorage.getItem("mnum");
    var addr = localStorage.getItem("addr");
    var city = localStorage.getItem("city");
    var state = localStorage.getItem("userstate");
    var zip = localStorage.getItem("zip");

    user = new CustomerBuilder(fname, lname, email, addr,
        city, state, zip, mnum, email, pw)
}
// success page
if (user != null) {
console.log(user.first, user.address);
if (document.getElementById("thanksMssg") != null) {
    document.getElementById("thanksMssg").innerHTML = "Thank You for your order " + user.first + "!"
}


if (document.getElementById("CustomerDetails") != null) {
    document.getElementById("CustomerDetails").innerHTML =
        "<br><b>Customer Name:</b> " + user.fullname +
        "<br><b>Email:</b> " +  user.email +
        "<br><b>Phone:</b> " + user.phone +
        "<br><b>Address:</b> " + user.fulladdress +
    "</p>"
}
}

// AcountPage-Orders Elements

var toolbarHead = document.getElementById("toolbar-header");
if (toolbarHead != null) {
    toolbarHead.innerHTML = "<h3>Welcome " + user.first + "</h3>"
}

// checkout Page

var checkoutInfo = document.getElementById("personal-info-id");
var returning= document.getElementById("returning");
if (checkoutInfo != null ) {
    if (userLoggedIn != null) {
        checkoutInfo.innerHTML =
        "Email: <input type='text' name='email' value ='" + user.email + "'>" +
        "<br> First Name: <input type='text' name='firstname' value='" + user.first +"'>" +
        "<br> Last Name: <input type='text' name='lastname' value='" + user.last + "'>" +
        "<br> Address: <input type='text' name='address' value='" + user.address+  "'>" +
        "<br> City: <input type='text' name='city' value='" + user.city + "'>" +
        "<br> State: <input type='text' name='state' value ='" + user.state + "'>" +
        "<br> Zip: <input type='text' name='zip' value = '" + user.zip + "'>" +
        "<br> Phone: <input type='text' name='phone' value = '" + user.phone +"'>"
        returning.innerHTML = ""
        checkoutInfo.style.textAlign = "right";

    } else {
        checkoutInfo.innerHTML ="<h3> Returning Customer </h3> " +
        "<br> Username: <input type='text' name='user'>" +
        "<br>Password: <input type='text' name='password'>"

        returning.innerHTML =
            "New customer <br> <a href='login.html'>Log In</a>" +
            "<br> <a href='login.html'>Create Account</a> "

        checkoutInfo.style.textAlign = "right";
        checkoutInfo.style.borderRight = "1px solid black";
    }

}
