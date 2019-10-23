import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Row from '../row';
import {StyledImage} from '../styledImage';
import StyledText from '../styledText';
import {TouchableHighlight} from 'react-native-gesture-handler';

const Card = ({image, title, desc, details, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress} testID="cardComponent">
      <Row>
        {image && <StyledImage testID="cardImg" circle uri={image} />}
        <View style={{flex: 1}}>
          <StyledText testID="cardTitle">{title}</StyledText>
          <StyledText testID="cardDesc">{desc}</StyledText>
          <StyledText testID="cardDetails">{details}</StyledText>
        </View>
      </Row>
    </TouchableHighlight>
  );
};
Card.prototype = {
  image: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  details: PropTypes.string,
  onPress: PropTypes.func,
};
export default Card;
