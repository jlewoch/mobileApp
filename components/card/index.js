import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity} from 'react-native';
import Row from '../row';
import {StyledImage} from '../styledImage';
import StyledText from '../styledText';
import colors from '../../constants/colors';

const Card = ({image, imageSrc, title, desc, details, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID="cardComponent"
      style={{
        padding: 10,
        borderColor: colors.subText,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 8,
        marginTop: 15,
      }}>
      <Row>
        {image && (
          <StyledImage
            testID="cardImg"
            circle
            uri={imageSrc}
            style={{marginRight: 15, height: 75}}
          />
        )}
        <View style={{flex: 1}}>
          <StyledText type="title3" testID="cardTitle">
            {title}
          </StyledText>
          <StyledText testID="cardDesc">{desc}</StyledText>
          <StyledText type="callout" testID="cardDetails">
            {details}
          </StyledText>
        </View>
      </Row>
    </TouchableOpacity>
  );
};
Card.prototype = {
  image: PropTypes.bool,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  details: PropTypes.string,
  onPress: PropTypes.func,
};
export default Card;
