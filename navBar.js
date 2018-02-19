'use strict';

var navbar = document.getElementById("topnav");
if (navbar != null) {
navBar.innerHTML =
"<div id='logo'><a href='home.html'><img src='transLogo.png' alt='logo'></a></div>" +
"<a href='AccountPage-User.html'>My Account</a>" +
"<a id='login_link' href='login.html'>Login</a>" +
"<a id = 'pass_link' href='signup.html'>Signup</a> " +
"<a id = 'logout' class='hide' onclick='logout()'>Logout</a> " +
"<a href='FAQ.html'>FAQ</a> " +
"<a href='#'>Contact Us</a> " +
"<a href='#'>About</a> " +
"<button class='topnav-button'><img src='cart.png' alt='cart'></button> " +
"<a href='CheckoutPage.html' style='float: right'>Checkout</a> " +
"<a href='addItem.html' style='float: right'>Add Item</a>"

}
