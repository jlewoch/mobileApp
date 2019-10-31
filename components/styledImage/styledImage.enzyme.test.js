import React from 'react';
import {View, Text} from 'react-native';
import {StyledImage} from './index';
const setup = (props = {}) => {
  const component = shallow(<StyledImage {...props} />);
  return component;
};
describe('>>> StyledImage --> Shallow Renders', () => {
  let wrapper;
  beforeEach(() => {
    const passedProps = {
      uri: '',
      onPress: () => {},
      authorization: 'Test Auth',
      circle: true,
      style: {},
    };
    wrapper = setup(passedProps);
  });
  it('Renders without errors', () => {
    expect(findByTestIdAttr(wrapper, 'imgWrapper')).toHaveLength(1);
  });
  it('Should have an image', () => {
    expect(findByTestIdAttr(wrapper, 'imgComponent')).toHaveLength(1);
  });
});
describe('>>> StyledImage --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
      uri: '',
      onPress: () => {},
      authorization: 'Test Auth',
      circle: true,
      style: {},
    };
    const propsError = checkProps(StyledImage, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
