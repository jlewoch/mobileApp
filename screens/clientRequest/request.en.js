import React from 'react';
import {RequestScreen} from './index';
const setup = (props = {}) => {
  const component = shallow(<RequestScreen {...props} />);
  return component;
};

describe('>>> Request --> Component Renders', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('Renders without errors', () => {
    expect(findByTestIdAttr(wrapper, 'requestScreen')).toHaveLength(1);
  });
  it('Should have a date picker', () => {
    expect(findByTestIdAttr(wrapper, 'requestDateSelector')).toHaveLength(1);
  });
  it('Should have a request type dropdown', () => {
    expect(findByTestIdAttr(wrapper, 'requestTypeDropdown')).toHaveLength(1);
  });
  it('Should have a nots input', () => {
    expect(findByTestIdAttr(wrapper, 'requestNotes')).toHaveLength(1);
  });
  it('Should have a time picker', () => {
    expect(findByTestIdAttr(wrapper, 'requestTimePicker')).toHaveLength(1);
  });
  it('Should have a pet selector', () => {
    expect(findByTestIdAttr(wrapper, 'requestPetsSelector')).toHaveLength(1);
  });
  it('Should have a pet selector', () => {
    expect(findByTestIdAttr(wrapper, 'requestScreen')).toMatchObject({
      date: '',
      start_time: '',
      notes: '',
      type: '',
    });
  });
});
describe('>>> Request --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
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
    };
    const propsError = checkProps(HomeScreen, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
