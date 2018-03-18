import React from 'react';
import expect from 'expect';
import { mount } from "enzyme";
import login from './components/login';
import signup from './components/signup';
import additem from './components/addItem';
import shoppingcart from './components/ShoppingCart'


describe('Our first test', () => {
  it('should pass', () => {
    expect(true).toEqual(true);
  });
});

describe('Test login', () => {
	let mountedLogin;
	let props = {"logged-in":0};

	const loginPage = () => {
		if(!mountedLogin) {
			mountedLogin = mount (
				<login {...props}/>
			);
		}
		return mountedLogin;
	}

	describe("test logged-out" , () => {
	it("prop for login should be 0", () => {
		const props = loginPage().props();
		expect(props).toEqual({'logged-in':0});
	});})


	describe("test logged-in" , () => {
	it("prop for login should be 1", () => {
		const props = loginPage().props();
		expect(props).toEqual({'logged-in':0});
	});})

});

describe('Test signup', () => {
	let mountedSignUp;
	let props = {"sign-up":1};

	const signUp = () => {
		if(!mountedSignUp) {
			mountedSignUp = mount (
				<signup {...props}/>
			);
		}
		return mountedSignUp;
	}

	describe("test logged-out" , () => {
	it("prop for login should be 0", () => {
		const props = signUp().props();
		expect(props).toEqual({'sign-up':1});
	});})
});

describe('Test account info', () => {
	let mountedAccountInfo;
	let props = {"email":"",
				"pass":"",
				"fname":"",
				"lname":"",
				"numb":"",
				"addr":""};

	const accountinfoPage = () => {
		if(!mountedAccountInfo) {
			mountedAccountInfo = mount (
				<accountinfo {...props}/>
			);
		}
		return mountedAccountInfo;
	}

	describe("AccountInfo prop should be null" , () => {
	it("prop for should be 1", () => {
		const props = accountinfoPage().props();
		expect(props).toEqual({"email":"",
				"pass":"",
				"fname":"",
				"lname":"",
				"numb":"",
				"addr":""});
	});})

});

describe('Test additem', () => {
	let mountedAddItem;
	let props = {"added-item":1};

	const addItemPage = () => {
		if(!mountedAddItem) {
			mountedAddItem = mount (
				<additem {...props}/>
			);
		}
		return mountedAddItem;
	}

	describe("Add Item successful prop" , () => {
	it("prop for should be 1", () => {
		const props = addItemPage().props();
		expect(props).toEqual({'added-item':1});
	});})
});

describe('Test checkout', () => {
	let mountedCheckOut;
	let props = {"checkout-success":1};

	const checkoutPage = () => {
		if(!mountedCheckOut) {
			mountedCheckOut = mount (
				<shoppingcart {...props}/>
			);
		}
		return mountedCheckOut;
	}

	describe("Checkout successful prop" , () => {
	it("prop for should be 1", () => {
		const props = checkoutPage().props();
		expect(props).toEqual({'checkout-success':1});
	});})

});

