var sideNav = document.getElementById("sideNav")

if (sideNav != null) {

    sideNav.innerHTML = "<ul id='sideBarUL'><li id='toolbar-header'><h3>Welcome!</h3></li> " +
        "<li id='sideNavBtn'><button class='sideBtn' id='actBtn' type='button'>Account</button></li>" +
        "<li id='sideNavBtn'><button class='sideBtn' id='orderBtn' type='button'>Orders</button></li>" +
        "<li id='sideNavBtn'><button class='sideBtn' id='signoutBtn' type='button'>Sign Out</button></li></ul>"

}

var sideNavStyle = sideNav.style;
sideNavStyle.backgroundColor = "#475FAB";
sideNavStyle.color = "white";
sideNavStyle.float = "left";
sideNavStyle.textAlign = "center";
sideNavStyle.width = "15%";
sideNavStyle.paddingBottom = "100%";
sideNavStyle.paddingTop = "5%";


var sideBarULStyle = document.getElementById('sideBarUL').style;


sideBarULStyle.width = "100%";
sideBarULStyle.listStyle = "none";

var btns = document.getElementsByClassName('sideBtn')
if (btns != null) {
    for (var i =0; i < btns.length; i++) {
        var btnstyle = btns[i].style;
        btnstyle.borderRadius = "0 px 10 px";
        btnstyle.width = "100%";
        btnstyle.margin = "0 px";
        btnstyle.padding = "15px 10px";
        btnstyle.backgroundColor = "#182C6E";
        btnstyle.border = "none";
        btnstyle.color = "#A4B4E7";
    }
}


var actBtn = document.getElementById('actBtn');
actBtn.onclick = function () {
    location.href = "AccountPage-User.html";
    actBtn.style.color = "#182C6E";
    actBtn.style.backgroundColor = "#6E83CA";
    console.log("act btn clicked");
    return false;
};

var orderBtn = document.getElementById('orderBtn');
orderBtn.onclick = function () {
    location.href = "AccountPage-Orders.html";
    orderBtn.style.color = "#182C6E";
    orderBtn.style.backgroundColor = "#6E83CA";
    console.log("order btn clicked");
    return false;
};

var signoutBtn = document.getElementById('signoutBtn');
signoutBtn.style.marginTop = "10px";
