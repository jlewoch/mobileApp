import React from 'react';
import {View, Text} from 'react-native';
import List from './index';
const setup = (props = {}) => {
  const component = shallow(<List {...props} />);
  return component;
};
describe('>>> List --> Shallow Renders', () => {
  let wrapper;
  beforeEach(() => {
    const passedProps = {
      label: 'Test title',
      items: [
        {title: 'Test title', sub: 'Test Sub'},
        {title: 'Test title', sub: 'Test Sub'},
      ],
      card: ({title, sub}, idx) => (
        <View key={idx} testID="listItem">
          <Text>{title}</Text>
          <Text>{sub}</Text>
        </View>
      ),
    };
    wrapper = setup(passedProps);
  });
  it('Renders without errors', () => {
    expect(findByTestIdAttr(wrapper, 'listComponentWrapper')).toHaveLength(1);
  });
  it('Does not render if items or card is not passed', () => {
    expect(
      findByTestIdAttr(setup({label: 'Test title', items: []}), 'listLabel'),
    ).toHaveLength(0);
    expect(
      findByTestIdAttr(
        setup({label: 'Test title', card: () => {}}),
        'listLabel',
      ),
    ).toHaveLength(0);
  });
  it('Has a label', () => {
    expect(findByTestIdAttr(wrapper, 'listLabel')).toHaveLength(1);
  });
  it('Renders items in a card specified or will just render the text', () => {
    expect(findByTestIdAttr(wrapper, 'listItem')).toHaveLength(2);
  });
});
describe('>>> List --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
      label: 'Test title',
      items: [
        {title: 'Test title', sub: 'Test Sub'},
        {title: 'Test title', sub: 'Test Sub'},
      ],
      card: ({title, sub}, idx) => (
        <View key={idx}>
          <Text>{title}</Text>
          <Text>{sub}</Text>
        </View>
      ),
    };
    const propsError = checkProps(List, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
