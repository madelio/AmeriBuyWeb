		function login() {
			var email = document.getElementById('email').value;
			var pass = document.getElementById('pass').value;

			if(email == '' || pass == '') {
				document.getElementById('errormsg').classList.remove('hide');
			}
 			else {
	 			document.getElementById('errormsg').classList.add('hide');

				var _email = localStorage.getItem("email");
				var _pass = localStorage.getItem("pass");

				if(email == _email && pass == _pass) {
					document.getElementById('errormsg2').classList.add('hide');
					localStorage.setItem("state", "logged-in");
					document.location.href = "./home.html";
				}
				else {
					document.getElementById('errormsg2').classList.remove('hide');
				}
			}	

		}