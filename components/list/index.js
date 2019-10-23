import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import StyledText from '../styledText';

const List = ({label, items, card}) => {
  return (
    items &&
    card && (
      <View testID="listComponentWrapper">
        <StyledText testID="listLabel">{label}</StyledText>
        <View testID="listComponent">{items.map(card)}</View>
      </View>
    )
  );
};
List.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  card: PropTypes.func,
};
export default List;
