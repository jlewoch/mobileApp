import React from 'react';
import {shallow} from 'enzyme';
jest.mock('Dimensions');
import Header from './index';
import {findByTestIdAttr, checkProps} from '../../utils';
const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};
describe('>>> Header --> Shallow Renders', () => {
  let wrapper;
  beforeEach(() => {
    const passedProps = {
      title: 'Test title',
    };
    wrapper = setup(passedProps);
  });
  test('Renders without errors', () => {
    const component = findByTestIdAttr(wrapper, 'headerComponent');
    expect(component.length).toBe(1);
  });
  test('Has a title', () => {
    const btnLabel = findByTestIdAttr(wrapper, 'headerTitle');
    expect(btnLabel.length).toBe(1);
  });
});
describe('>>> Header --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
      title: 'Test title',
    };
    const propsError = checkProps(Header, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
