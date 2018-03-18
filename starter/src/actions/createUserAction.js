export default function createUserAction(value, type) {
	if(type == 'USER') {
		return {
			type: "USER",
			payload: value
		}
	}
}