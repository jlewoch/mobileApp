// dependencies
import React from 'react';
import {StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import colors from '../../constants/colors';

// components
import {TouchableOpacity} from 'react-native-gesture-handler';
import Row from '../row';
import Icon from '../icon';
import StyledText from '../styledText';

const Option = ({
  navigation,
  route,
  routeProps,
  label,
  iconType,
  iconName,
  focused,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route, routeProps)}
      style={[styles.container, focused ? styles.focusedContainer : {}]}>
      <Row>
        <Icon
          type={iconType}
          name={iconName}
          style={[styles.icon, focused ? styles.focused : {}]}
        />
        <StyledText style={[styles.text, focused ? styles.focused : {}]}>
          {label}
        </StyledText>
      </Row>
    </TouchableOpacity>
  );
};

export default withNavigation(Option);
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  focusedContainer: {
    backgroundColor: colors.accentOrange,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#00adff',
  },
  focused: {
    color: colors.accentRed,
  },
});
