import React from 'react';
import DateSelector from './index';
import moment from 'moment';
const setup = (props = {}) => {
  const component = shallow(<DateSelector {...props} />);
  return component;
};
describe('>>> DateSelector --> Component Renders', () => {
  let wrapper;
  beforeEach(() => {
    const passedProps = {
      availableDates: [{date: moment([2019, 9, 25]), style: {}, textStyle: {}}],
      disabledDates: ['10/16/2019'],
      onDateSelect: () => {},
    };
    wrapper = setup(passedProps);
  });
  it('Renders without errors', () => {
    const component = findByTestIdAttr(wrapper, 'dateSelectorComponent');
    expect(component.length).toBe(1);
  });
  it('Should have a wrapper', () => {
    const component = findByTestIdAttr(wrapper, 'dateSelectorWrapper');
    expect(component.length).toBe(1);
  });
  it('Should have a initial state', () => {
    const nextTitle = moment()
      .add(1, 'month')
      .format('MMMM');
    const previousTitle = moment()
      .subtract(1, 'month')
      .format('MMMM');
    expect(wrapper.state()).toMatchObject({
      selectedDate: null,
      nextTitle,
      previousTitle,
    });
  });
});

describe('>>> DateSelector --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
      availableDates: [{date: new Date(2019, 9, 25), style: {}, textStyle: {}}],
      disabledDates: ['08/16/2019'],
      onDateSelect: () => {},
    };
    const propsError = checkProps(DateSelector, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
