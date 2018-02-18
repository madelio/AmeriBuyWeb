"use strict";
var counter = 1;

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
    pw : "",
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

var user = CreateJaneDoe();

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

// AcountPage-Orders Elements

var toolbarHead = document.getElementById("toolbar-header");
if (toolbarHead = null) {
    toolbarHead.innerHTML = "<h3>Welcome " + user.first + "</h3>"
}
