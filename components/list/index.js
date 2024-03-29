import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import StyledText from '../styledText';
import Row from '../row';
import Icon from '../icon';

const List = ({label, items, card, add, empty}) => {
  return (
    <View testID="listComponentWrapper">
      <Row style={{justifyContent: 'space-between', marginVertical: 15}}>
        <StyledText testID="listLabel">{label}</StyledText>
        {add && <Icon onPress={add} testID="listAddBtn" name="pluscircleo" />}
      </Row>
      <View testID="listComponent">
        {items ? card && items.map(card) : empty && empty()}
      </View>
    </View>
  );
};
List.propTypes = {
  add: PropTypes.func,
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  card: PropTypes.func,
};
export default List;
