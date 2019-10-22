import React from 'react';
import {shallow} from 'enzyme';
import {LoginScreen} from './index';
import {findByTestIdAttr} from '../../utils';
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
    expect(state.errors.email).toEqual(null);
  });
});
describe('>>> Login --> Inputs', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('Should change state when a value is typed in to each field', () => {
    // email
    const email = findByTestIdAttr(wrapper, 'loginEmailInput');
    expect(wrapper.state('values').email).toEqual('');
    email.simulate('change', 'j');
    expect(wrapper.state('values').email).toEqual('j');
    // password
    const password = findByTestIdAttr(wrapper, 'loginPasswordInput');
    expect(wrapper.state('values').password).toEqual('');
    password.simulate('change', 'j');
    expect(wrapper.state('values').password).toEqual('j');
  });
  it('Should set email error state to true when an invalid email address is typed in', () => {
    const email = findByTestIdAttr(wrapper, 'loginEmailInput');
    email.simulate('blur', 'j');
    expect(wrapper.state('errors').email).toEqual(true);
    email.simulate('blur', 'Test@test.com');
    expect(wrapper.state('errors').email).toEqual(false);
  });
});
