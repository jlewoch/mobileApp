import React from 'react';
import StyledSwitch from './index';
const setup = (props = {}) => {
  const component = shallow(<StyledSwitch {...props} />);
  return component;
};
describe('>>> StyledSwitch --> Shallow Renders', () => {
  let wrapper;
  beforeEach(() => {
    const passedProps = {
      label: 'Test title',
      onChange: () => {},
      value: false,
    };
    wrapper = setup(passedProps);
  });
  it('Renders without errors', () => {
    expect(findByTestIdAttr(wrapper, 'switchComponent')).toHaveLength(1);
  });
  it('Has a label', () => {
    expect(findByTestIdAttr(wrapper, 'switchLabel')).toHaveLength(1);
  });
  it('Has a switch', () => {
    expect(findByTestIdAttr(wrapper, 'switchComponentSwitch')).toHaveLength(1);
  });
});
describe('>>> StyledSwitch --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
      label: 'Test title',
      onChange: () => {},
      value: false,
    };
    const propsError = checkProps(StyledSwitch, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
