import {Header} from 'react-navigation-stack';
import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
export const deviceWidth = width;
export const deviceHeight = height;
export const headerHeight = Header.HEIGHT;
export const isSmallDevice = deviceWidth < 375;
