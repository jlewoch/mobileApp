import React from 'react';
import SignupScreen from './index';
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
    expect(findByTestIdAttr(wrapper, 'signupComponent')).toHaveLength(1);
  });
  it('Has a name text input', () => {
    expect(findByTestIdAttr(wrapper, 'signupNameInput')).toHaveLength(1);
  });
  it('Has a email text input', () => {
    expect(findByTestIdAttr(wrapper, 'signupEmailInput')).toHaveLength(1);
  });
  it('Has a city text input', () => {
    expect(findByTestIdAttr(wrapper, 'signupCityInput')).toHaveLength(1);
  });

  it('Has a password secure input', () => {
    expect(findByTestIdAttr(wrapper, 'signupPasswordInput')).toHaveLength(1);
  });
  it('Has a confirm password secure input', () => {
    expect(findByTestIdAttr(wrapper, 'signupConfirmInput')).toHaveLength(1);
  });
  it('Has a signup button that is disabled', () => {
    const signup = findByTestIdAttr(wrapper, 'signupBtn');
    expect(signup).toHaveLength(1);
    expect(signup.props().disabled).toEqual(true);
  });
  it('Has a login button', () => {
    const login = findByTestIdAttr(wrapper, 'signupLogin');
    expect(login.length).toBe(1);
  });
  it('Should have an initail state', () => {
    expect(wrapper.state()).toMatchObject({
      errors: {
        name: null,
        email: null,
        city: null,
        password: null,
        confirm: null,
      },
      values: {
        name: '',
        email: '',
        city: '',
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
  it('Should set state when the value changes in name Input', () => {
    let name = findByTestIdAttr(wrapper, 'signupNameInput');
    name.simulate('change', 'Test');
    expect(wrapper.state('values').name).toEqual('Test');
  });

  it('Should set state when the value changes in city Input', () => {
    let city = findByTestIdAttr(wrapper, 'signupCityInput');
    city.simulate('change', 'Test');
    expect(wrapper.state('values').city).toEqual('Test');
  });

  it('Should set state when the value changes in password Input', () => {
    let password = findByTestIdAttr(wrapper, 'signupPasswordInput');
    password.simulate('change', 'Test');
    expect(wrapper.state('values').password).toEqual('Test');
  });

  it('Should set state when the value changes in confirm Input', () => {
    let wrapper = setup();
    let confirm = findByTestIdAttr(wrapper, 'signupConfirmInput');
    confirm.simulate('change', 'Test');
    expect(wrapper.state('values').confirm).toEqual('Test');
  });
});
