import React from 'react';
import ForgotPasswordScreen from './index';
const setup = (props = {}) => {
  const component = shallow(<ForgotPasswordScreen {...props} />);
  return component;
};

describe('>>> Forgot Password --> Component Renders', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('render without errors', () => {
    expect(findByTestIdAttr(wrapper, 'forgotComponent')).toHaveLength(1);
  });
  it('Has a email text input', () => {
    expect(findByTestIdAttr(wrapper, 'forgotEmailInput')).toHaveLength(1);
  });
  it('Has a reset password button and should be disabled', () => {
    expect(findByTestIdAttr(wrapper, 'forgotResetBtn')).toHaveLength(1);
  });
  it('Has a back to login button', () => {
    expect(findByTestIdAttr(wrapper, 'forgotLoginBtn')).toHaveLength(1);
  });
  it('Should have an initail state', () => {
    expect(wrapper.state()).toMatchObject({
      email: '',
    });
  });
});
describe('>>> Forgot Password --> Inputs', () => {
  it('Should set state when the value changes in email Input', () => {
    let wrapper = setup();
    let name = findByTestIdAttr(wrapper, 'forgotEmailInput');
    name.simulate('change', 'Test');
    expect(wrapper.state('email')).toEqual('Test');
  });
});
