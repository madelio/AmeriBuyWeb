var next = document.getElementById("nextBut");
var form = document.getElementById("forms");
var first = document.getElementById("prodWeb");
var webTemp;
//localStorage.clear();

//event listener for next button
next.addEventListener("click", nextPressed);
//**event listener for dynamically created buttons
form.addEventListener("click", editPressed);
form.addEventListener("click", addPressed);

function nextPressed() {
    //hold URL in a variable
    webTemp = first.value;
    if (webTemp === "") {
        alert("field is empty");
        handleEmpty();
        return;
    }

    //clean out form
    while (form.firstChild) {
        forms.removeChild(forms.firstChild)
    }

    //remove button
    next.style.display = "none";

    //add new fields
    addNew();
}

function addNew() {
    form.innerHTML += "Product web page: <br>"
    form.innerHTML += "<input class=\"formText\" type=\"text\" name=\"Product web page\" placeholder=\"" + webTemp + "\" disabled>"

    form.innerHTML += "<button type=button id=\"editBut\">Edit</button><br>";

    form.innerHTML += "Vendor: <br>"
    form.innerHTML += "<input class=\"formText\" type=\"text\" name=\"Vendor\"> <br>"

    form.innerHTML += "Quantity to buy: <br>"
    form.innerHTML += "<input class=\"formText\" type=\"text\" name=\"Quantity\"> <br>"

    form.innerHTML += "Item price in USD: <br>"
    form.innerHTML += "<input class=\"formText\" type=\"text\" name=\"Product price\"> <br>"

    form.innerHTML += "<button type=button id=\"addBut\">+ Add item to cart</button><br>";

}

function editPressed(e) {
    if (e.target.id === "editBut") {
        //clean out form
        while (form.firstChild) {
            forms.removeChild(forms.firstChild)
        }

        //refill
        form.innerHTML += "Product web page: <br>"
        form.innerHTML += "<input class=\"formText\" type=\"text\" name=\"Product web page\" value=\"" + webTemp + "\" >"

        //unhide next button
        next.style.display = "inline";
    }

}
var temp;
if (localStorage.getItem("count") === null) {
    localStorage.setItem("count", "0");
}

function addPressed(e) {
    if (e.target.id === "addBut") {
        //function to store forms into localStorage
        var data = e.target.parentNode.getElementsByTagName("INPUT");
        temp = [data[1].value, data[2].value, webTemp, data[3].value];
        temp = JSON.stringify(temp);

        var stringCount = localStorage.getItem("count")
        var intCount = parseInt(stringCount);

        localStorage.setItem("item" + stringCount, temp);

        stringCount = intCount + 1;
        localStorage.setItem("count", stringCount);

        alert("Order for " + data[1].value + " is processed!");

//        var array = JSON.parse(localStorage.getItem("item0"));

        //      alert(array[0]+array[1]+array[2]+array[3]);

        location.reload();
    }
}


function handleEmpty() {
    forms.getElementsByTagName();

}