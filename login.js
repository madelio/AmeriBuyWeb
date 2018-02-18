		function login() {
			var email = document.getElementById('email').value;
			var pass = document.getElementById('pass').value;
 
			var _email = localStorage.getItem("email");
			var _pass = localStorage.getItem("pass");

			if(email == _email && pass == _pass) {
				document.location.href = "file:///Users/zjteoh/Desktop/AmeriBuyWeb-master-2/home.html";
				localStorage.setItem("state", "logged-in");
			}

		}