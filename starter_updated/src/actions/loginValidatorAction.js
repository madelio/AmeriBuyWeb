export default function loginValidatorAction(value='0', type) {
	if(type == 'LOGIN') {
		console.log("logged-in");
		return {
			type: "LOGIN",
			payload: value
		}
	}
}