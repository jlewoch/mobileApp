// import React from 'react';
// import {shallow} from 'enzyme';
// import {Login} from './index';
// import {findByTestIdAttr} from '../../utils';
// const setup = (props = {}) => {
//   const component = shallow(<Login {...props} />);
//   return component;
// };
// describe('Component Renders', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = setup();
//   });
//   it('render without errors', () => {
//     const component = findByTestIdAttr(wrapper, 'loginComponent');
//     expect(component.length).toBe(1);
//   });
//   it('Has a username text input', () => {
//     const user = findByTestIdAttr(wrapper, 'loginUsername');
//     expect(user.length).toBe(1);
//   });
//   it('Has a password secure input', () => {
//     const password = findByTestIdAttr(wrapper, 'loginPassword');
//     expect(password.length).toBe(1);
//   });
//   it('Has a forgotpassword link', () => {
//     const forgot = findByTestIdAttr(wrapper, 'loginForgot');
//     expect(forgot.length).toBe(1);
//   });
//   it('Has a signup link', () => {
//     const signup = findByTestIdAttr(wrapper, 'loginSignup');
//     expect(signup.length).toBe(1);
//   });
//   it('Has a login button', () => {
//     const login = findByTestIdAttr(wrapper, 'loginBtn');
//     expect(login.length).toBe(1);
//   });
// });
