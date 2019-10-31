import React from 'react';
import {LoginScreen} from './index';

const setup = (props = {}) => {
  const component = shallow(<LoginScreen {...props} />);
  return component;
};
describe('>>> Login --> Component Renders', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('render without errors', () => {
    const component = findByTestIdAttr(wrapper, 'loginComponent');
    expect(component.length).toBe(1);
  });
  it('Has a email text input', () => {
    const email = findByTestIdAttr(wrapper, 'loginEmailInput');
    expect(email.length).toBe(1);
  });
  it('Has a password secure input', () => {
    const password = findByTestIdAttr(wrapper, 'loginPasswordInput');
    expect(password.length).toBe(1);
  });
  it('Has a forgotpassword link', () => {
    const forgot = findByTestIdAttr(wrapper, 'loginForgot');
    expect(forgot.length).toBe(1);
  });
  it('Has a signup link', () => {
    const signup = findByTestIdAttr(wrapper, 'loginSignup');
    expect(signup.length).toBe(1);
  });
  it('Has a login button', () => {
    const login = findByTestIdAttr(wrapper, 'loginBtn');
    expect(login.length).toBe(1);
  });
  it('should have initial state values', () => {
    const state = wrapper.state();
    expect(state.values.email).toEqual('');
    expect(state.values.password).toEqual('');
  });
});
describe('>>> Login --> Inputs', () => {
  it('Should change state when a value is typed in to each field', () => {
    let wrapper = setup();
    // email
    const email = findByTestIdAttr(wrapper, 'loginEmailInput');
    expect(wrapper.state().email).toEqual('');
    email.simulate('change', 'j');
    expect(wrapper.state().email).toEqual('j');
    // password
    const password = findByTestIdAttr(wrapper, 'loginPasswordInput');
    expect(wrapper.state().password).toEqual('');
    password.simulate('change', 'j');
    expect(wrapper.state().password).toEqual('j');
  });
});
