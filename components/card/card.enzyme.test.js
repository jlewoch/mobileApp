import React from 'react';
import {View, Text} from 'react-native';
import Card from './index';
const setup = (props = {}) => {
  const component = shallow(<Card {...props} />);
  return component;
};
describe('>>> Card --> Shallow Renders', () => {
  let wrapper;
  beforeEach(() => {
    const passedProps = {
      image: 'Test url',
      title: 'Test Title',
      desc: 'Test Desc',
      details: 'Test details',
      onPress: () => {},
    };
    wrapper = setup(passedProps);
  });
  it('Renders without errors', () => {
    expect(findByTestIdAttr(wrapper, 'cardComponent')).toHaveLength(1);
  });
  it('Should have a title', () => {
    expect(findByTestIdAttr(wrapper, 'cardTitle')).toHaveLength(1);
  });
  it('Should have a description', () => {
    expect(findByTestIdAttr(wrapper, 'cardDesc')).toHaveLength(1);
  });
  it('Should have details', () => {
    expect(findByTestIdAttr(wrapper, 'cardDetails')).toHaveLength(1);
  });
  it('Should have an image', () => {
    expect(findByTestIdAttr(wrapper, 'cardImg')).toHaveLength(1);
  });
  it('Should not render image if image is not passed', () => {
    expect(findByTestIdAttr(setup(), 'cardImg')).toHaveLength(0);
  });
});
describe('>>> Card --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
      image: 'Test url',
      title: 'Test Title',
      desc: 'Test Desc',
      details: 'Test details',
      onPress: () => {},
    };
    const propsError = checkProps(Card, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
