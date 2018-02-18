		function setUserValues() {


			var email = document.getElementById('email').value;
			var pass = document.getElementById('pass').value;
			var fname = document.getElementById('fname').value;
			var lname = document.getElementById('lname').value;
			var mnum = document.getElementById('mnum').value;
			var addr = document.getElementById('addr').value;

			localStorage.setItem("email", email);
			localStorage.setItem("pass", pass);
			localStorage.setItem("fname", fname);
			localStorage.setItem("lname", lname);
			localStorage.setItem("mnum", mnum);
			localStorage.setItem("mnum", addr);


			document.location.href = "file:///Users/zjteoh/Desktop/AmeriBuyWeb-master-2/home.html";
		}