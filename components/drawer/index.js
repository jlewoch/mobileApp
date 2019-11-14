// dependencies
import React from 'react';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';

// components
import {StyleSheet, Image} from 'react-native';
import ContainerSafeView from '../container';
import Section from '../section';
import {deviceHeight, deviceWidth} from '../../constants/dimensions';
import Row from '../row';
import StyledText from '../styledText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Option from './Option';

const width = (deviceWidth / 4) * 3;
const CustomDrawer = ({navigation, activeItemKey, isAdmin}) => {
  return (
    <ContainerSafeView>
      <Image
        source={require('../../assets/images/splash.jpg')}
        style={styles.image}
      />
      <Option
        label="Dashboard"
        route="Home"
        iconName="dashboard"
        focused={activeItemKey === 'Home'}
      />
      <Option
        label="Profile"
        route="Profile"
        iconName="user"
        iconType="FontAwesome5"
        focused={activeItemKey === 'Profile'}
      />
      <Option
        label="Requests"
        route="Request"
        iconName="folderopen"
        focused={activeItemKey === 'Request'}
      />
      {isAdmin && (
        <Option
          label="Admin"
          route="Admin"
          iconName="database"
          iconType="Entypo"
          focused={activeItemKey === 'Admin'}
        />
      )}
    </ContainerSafeView>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(CustomDrawer));
const styles = StyleSheet.create({
  activeBackgroundColor: {
    backgroundColor: 'grey',
  },
  image: {
    height: deviceHeight / 3.5,
    width,
    justifyContent: 'center',
  },
});
