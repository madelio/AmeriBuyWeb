import expect from 'expect';
import React from 'react';

import {changedValues} from './components/AccountInfo';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).toEqual(true);
  });
});


describe('changedValues', () => {
  it ('changes the user name', () => {
    const expected = {
      fname : "bob",
      lname : "test",
      email : "test",
      phone : "test",
      address : "test",
      city : "test",
      state : "test",
      zip : "test"
    };
     expect(changedValues()).toEqual(expected);
  });
});
