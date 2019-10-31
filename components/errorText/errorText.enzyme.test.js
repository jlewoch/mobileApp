import React from 'react';
import ErrorText from './index';
const setup = (props = {}) => {
  const component = shallow(<ErrorText {...props} />);
  return component;
};
describe('>>> ErrorText --> Shallow Renders', () => {
  it('Renders without errors', () => {
    const wrapper = setup({children: 'Test text'});
    const component = findByTestIdAttr(wrapper, 'errorTextComponent');
    expect(component.length).toBe(1);
  });
});
describe('>>> ErrorText --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {children: 'Test text'};
    const propsError = checkProps(ErrorText, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
