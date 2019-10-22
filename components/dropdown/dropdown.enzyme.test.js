import React from 'react';
import Dropdown from './index';
const setup = (props = {}) => {
  const component = shallow(<Dropdown {...props} />);
  return component;
};
describe('>>> Dropdown --> Component Renders', () => {
  let wrapper;
  beforeEach(() => {
    const passedProps = {
      options: [
        {label: 'test 1', value: 0},
        {label: 'test 2', value: 1},
        {label: 'test 3', value: 2},
      ],
      onChange: () => {},
      selected: 0,
      label: 'Test Label',
    };
    wrapper = setup(passedProps);
  });
  it('Renders without errors', () => {
    const component = findByTestIdAttr(wrapper, 'dropdownComponent');
    expect(component.length).toBe(1);
  });
  it('Has a label', () => {
    const dropdownLabel = findByTestIdAttr(wrapper, 'dropdownLabel');
    expect(dropdownLabel.length).toBe(1);
  });
  it('Has a picker', () => {
    const picker = findByTestIdAttr(wrapper, 'dropdownPicker');
    expect(picker.length).toBe(1);
  });
  it('Has 3 options', () => {
    const options = findByTestIdAttr(wrapper, 'dropdownOption');
    expect(options.length).toBe(3);
  });
});
describe('>>> Dropdown --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
      options: [
        {label: 'test 1', value: 0},
        {label: 'test 2', value: 1},
        {label: 'test 3', value: 2},
      ],
      onChange: () => {},
      selected: 0,
      style: {},
      label: 'Test Label',
    };
    const propsError = checkProps(Dropdown, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
