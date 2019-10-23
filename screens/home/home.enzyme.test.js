import React from 'react';
import {HomeScreen} from './index';
const setup = (props = {}) => {
  const component = shallow(<HomeScreen {...props} />);
  return component;
};

describe('>>> Home --> Component Renders', () => {
  let wrapper;
  beforeEach(() => {
    const passedProps = {
      events: [
        {
          image: 'Test url',
          date: 'Test Title',
          type: 'Test Desc',
          time: 'Test details',
        },
        {
          image: 'Test url',
          date: 'Test Title',
          type: 'Test Desc',
          time: 'Test details',
        },
        {
          image: 'Test url',
          date: 'Test Title',
          type: 'Test Desc',
          time: 'Test details',
        },
      ],
    };
    wrapper = setup(passedProps);
  });
  it('render without errors', () => {
    expect(findByTestIdAttr(wrapper, 'homeComponent')).toHaveLength(1);
  });
  it('Should have a list of upcoming events', () => {
    expect(findByTestIdAttr(wrapper, 'homeEventList')).toHaveLength(1);
  });
});
describe('>>> Home --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
      events: [
        {
          image: 'Test url',
          date: 'Test Title',
          type: 'Test Desc',
          time: 'Test details',
        },
      ],
    };
    const propsError = checkProps(HomeScreen, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
