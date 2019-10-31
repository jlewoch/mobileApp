import React from 'react';
import ProvinceDropdown from './index';
const setup = (props = {}) => {
  const component = shallow(<ProvinceDropdown {...props} />);
  return component;
};
describe('>>> Province Dropdown --> Shallow Renders', () => {
  it('Renders without errors', () => {
    const wrapper = setup();
    const component = findByTestIdAttr(wrapper, 'provinceDropdownComponent');
    expect(component.length).toBe(1);
  });
});
describe('>>> Province Dropdown --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
      selected: 'Ontario',
      style: {},
      onChange: () => {},
    };
    const propsError = checkProps(Icon, expectedProps);
    expect(propsError).toBeUndefined();
  });
  it('Should throw a warning', () => {
    const expectedProps = {
      selected: 'toronto',
      style: {},
      onChange: () => {},
    };
    const propsError = checkProps(Icon, expectedProps);
    expect(propsError).toBeTrue();
  });
});
