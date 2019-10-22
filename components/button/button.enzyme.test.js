import React from 'react';
import Button from './index';
const setup = (props = {}) => {
  const component = shallow(<Button {...props} />);
  return component;
};
describe('>>> Button --> Shallow Renders', () => {
  let wrapper;
  beforeEach(() => {
    const passedProps = {
      label: 'Test title',
      onPress: () => {},
    };
    wrapper = setup(passedProps);
  });
  it('Renders without errors', () => {
    const component = findByTestIdAttr(wrapper, 'btnComponent');
    expect(component.length).toBe(1);
  });
  it('Has a label', () => {
    const btnLabel = findByTestIdAttr(wrapper, 'btnLabel');
    expect(btnLabel.length).toBe(1);
  });
  it('Does not redender when label is undefined', () => {
    const component = findByTestIdAttr(setup(), 'btnComponent');
    expect(component.length).toBe(0);
  });
});
describe('>>> Button --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
      label: 'Test title',
      onPress: () => {},
    };
    const propsError = checkProps(Button, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
