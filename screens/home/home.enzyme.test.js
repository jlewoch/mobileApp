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
          _id: 'TestId',
          image: 'Test url',
          date: 'Test Title',
          type: 'Test Desc',
          time: 'Test details',
          pets: [
            {
              _id: 'Test',
              owner: 'Test',
              img: 'Test',
              breed: 'Test',
              age: 2,
              play_child: true,
              play_dog: true,
              play_cat: true,
              around_child: true,
              around_dog: true,
              around_cat: true,
              microchip: true,
              house_trained: true,
              name: 'Test',
              size: 'Test',
              notes: 'Test',
              medication: 'Test',
              vet_info: 'Test',
            },
          ],
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
          _id: 'TestId',
          image: 'Test url',
          date: 'Test Title',
          type: 'Test Desc',
          time: 'Test details',
          pets: [
            {
              _id: 'Test',
              owner: 'Test',
              img: 'Test',
              breed: 'Test',
              age: 2,
              play_child: true,
              play_dog: true,
              play_cat: true,
              around_child: true,
              around_dog: true,
              around_cat: true,
              microchip: true,
              house_trained: true,
              name: 'Test',
              size: 'Test',
              notes: 'Test',
              medication: 'Test',
              vet_info: 'Test',
            },
          ],
        },
      ],
    };
    const propsError = checkProps(HomeScreen, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
