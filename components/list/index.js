import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import StyledText from '../styledText';
import Row from '../row';
import Icon from '../icon';

const List = ({label, items, card, add}) => {
  return (
    items &&
    card && (
      <View testID="listComponentWrapper">
        <Row style={{justifyContent: 'space-between'}}>
          <StyledText testID="listLabel">{label}</StyledText>
          {add && <Icon onPress={add} testID="listAddBtn" name="pluscircleo" />}
        </Row>
        <View testID="listComponent">{items.map(card)}</View>
      </View>
    )
  );
};
List.propTypes = {
  add: PropTypes.func,
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  card: PropTypes.func,
};
export default List;
