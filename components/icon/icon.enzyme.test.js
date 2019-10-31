import React from 'react';
import Icon from './index';
const setup = (props = {}) => {
  const component = shallow(<Icon {...props} />);
  return component;
};
describe('>>> Icon --> Shallow Renders', () => {
  it('Renders AntDesign without errors', () => {
    const wrapper = setup();
    const component = findByTestIdAttr(wrapper, 'antComponent');
    expect(component.length).toBe(1);
  });
  it('Renders AntDesign without errors', () => {
    const wrapper = setup({type: 'Entypo'});
    const component = findByTestIdAttr(wrapper, 'entypoComponent');
    expect(component.children.length).toBe(1);
  });
});
describe('>>> Icon --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
      type: 'Entypo',
      style: {},
      color: 'green',
      size: 16,
      onPress: () => {},
    };
    const propsError = checkProps(Icon, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
