		function setUserValues() {
			var email = document.getElementById('email').value;
			var pass = document.getElementById('pass').value;
			var fname = document.getElementById('fname').value;
			var lname = document.getElementById('lname').value;
			var mnum = document.getElementById('mnum').value;
			var addr = document.getElementById('addr').value;
			var city = document.getElementById('city').value;
			var state = document.getElementById('state').value;
			var zip = document.getElementById('zip').value;

			if(email == '' || pass == '' || fname == '' || lname == '' || mnum == '' || addr == '' || city == '' || state == '' || zip == '') {
				document.getElementById('errormsg').classList.remove('hide');
			}
			else {
				localStorage.setItem("email", email);
				localStorage.setItem("pass", pass);
				localStorage.setItem("fname", fname);
				localStorage.setItem("lname", lname);
				localStorage.setItem("mnum", mnum);
				localStorage.setItem("addr", addr);
				localStorage.setItem("city", city);
				localStorage.setItem("userstate", state);
				localStorage.setItem("zip", zip);

				document.getElementById('errormsg').classList.add('hide');
				document.location.href = "./home.html";
			}
		}
