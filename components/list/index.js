import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import StyledText from '../styledText';
import Row from '../row';
import Icon from '../icon';
import Empty from './Empty';

const List = ({label, items, card, add, empty}) => {
  return (
    <View testID="listComponentWrapper">
      <Row style={{justifyContent: 'space-between', marginVertical: 15}}>
        <StyledText testID="listLabel" type="title3">
          {label}
        </StyledText>
        {add && <Icon onPress={add} testID="listAddBtn" name="pluscircleo" />}
      </Row>
      {items.length > 0 ? (
        <View testID="listComponent">{card && items.map(card)}</View>
      ) : (
        empty && empty()
      )}
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
