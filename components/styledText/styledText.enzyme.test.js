import React from 'react';
import StyledText from './index';
const setup = (props = {}) => {
  const component = shallow(<StyledText {...props} />);
  return component;
};
describe('>>> StyledText --> Shallow Renders', () => {
  let wrapper;
  beforeEach(() => {
    const passedProps = {
      children: 'Test text',
    };
    wrapper = setup(passedProps);
  });
  it('Renders without errors', () => {
    const component = findByTestIdAttr(wrapper, 'textComponent');
    expect(component.length).toBe(1);
  });
  it('Has children', () => {
    const component = findByTestIdAttr(wrapper, 'textComponent');
    expect(component.children.length).toBe(1);
  });
});
describe('>>> StyledText --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
      children: 'Test text',
      style: {height: 300},
    };
    const propsError = checkProps(StyledText, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
