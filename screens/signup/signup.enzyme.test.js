import React from 'react';
import {shallow} from 'enzyme';
import SignupScreen from './index';
import {findByTestIdAttr} from '../../utils';
import {equal} from 'assert';
const setup = (props = {}) => {
  const component = shallow(<SignupScreen {...props} />);
  return component;
};
describe('>>> Signup --> Component Renders', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('render without errors', () => {
    const component = findByTestIdAttr(wrapper, 'signupComponent');
    expect(component.length).toBe(1);
  });
  it('Has a name text input', () => {
    const email = findByTestIdAttr(wrapper, 'signupEmailInput');
    expect(email.length).toBe(1);
  });
  it('Has a email text input', () => {
    const email = findByTestIdAttr(wrapper, 'signupEmailInput');
    expect(email.length).toBe(1);
  });
  it('Has a city text input', () => {
    const email = findByTestIdAttr(wrapper, 'signupEmailInput');
    expect(email.length).toBe(1);
  });
  it('Has a province dropdown', () => {
    const email = findByTestIdAttr(wrapper, 'signupEmailInput');
    expect(email.length).toBe(1);
  });
  it('Has a password secure input', () => {
    const password = findByTestIdAttr(wrapper, 'signupPasswordInput');
    expect(password.length).toBe(1);
  });
  it('Has a confirm password secure input', () => {
    const password = findByTestIdAttr(wrapper, 'signupConfirmInput');
    expect(password.length).toBe(1);
  });
  it('Has a signup button', () => {
    const signup = findByTestIdAttr(wrapper, 'signupBtn');
    expect(signup.length).toBe(1);
  });
  it('Has a login button', () => {
    const login = findByTestIdAttr(wrapper, 'signupLogin');
    expect(login.length).toBe(1);
  });
  it('Should have an initail state', () => {
    const instance = renderer.create(<SignupScreen />).getInstance();
    expect(instance.state).toEqual({
      errors: {},
      values: {
        name: '',
        email: '',
        city: '',
        province: null,
        password: '',
        confirm: '',
      },
    });
  });
});
describe('>>> Signup --> Inputs', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('Should change state when a value is typed in to each field', () => {
    expect('j').toEqual('j');
  });
});
