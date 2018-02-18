var next = document.getElementById("nextBut");
var form = document.getElementById("forms");
var first = document.getElementById("prodWeb");
var webTemp;

//event listener for next button
next.addEventListener("click", nextPressed);
//**event listener for dynamically created buttons
form.addEventListener("click", editPressed);
form.addEventListener("click", addPressed);

function nextPressed() {
    //hold URL in a variable
    webTemp = first.value;

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

    form.innerHTML += "Product name: <br>"
    form.innerHTML += "<input class=\"formText\" type=\"text\" name=\"ProdName\"> <br>"

    form.innerHTML += "Quantity to buy: <br>"
    form.innerHTML += "<input class=\"formText\" type=\"text\" name=\"Quantity\"> <br>"

    form.innerHTML += "Item price in USD: <br>"
    form.innerHTML += "<input class=\"formText\" type=\"text\" name=\"Product name\"> <br>"

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

function addPressed(e) {
    if (e.target.id === "addBut") {
        //function to store forms into localStorage
    }
}