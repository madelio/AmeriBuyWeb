var temp = localStorage.getItem("state");
    var userLoggedIn = false;
    if(temp == "logged-in"){
    	userLoggedIn = true;
    }

    if(userLoggedIn == true) {
        document.getElementById('login_link').classList.add('hide');
        document.getElementById('pass_link').classList.add('hide');
        document.getElementById('logout').classList.remove('hide');


    }
    else if (userLoggedIn == false) {

        document.getElementById('login_link').classList.remove('hide');
        document.getElementById('pass_link').classList.remove('hide');
        document.getElementById('logout').classList.add('hide');

    }

    function logout() {
        localStorage.setItem("state","logged-out");
        window.location.reload()
    }