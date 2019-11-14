import React, {Component} from 'react';
import {Image, StyleSheet, ActivityIndicator} from 'react-native';
import {IMAGE_URI_ROOT} from '../../constants/api';
import colors from '../../constants/colors';

export default class CustomImage extends Component {
  state = {source: ''};
  componentDidMount() {
    if (this.props.uri) {
      this.setState({
        source: {
          uri: IMAGE_URI_ROOT + this.props.uri,
          cache: 'reload',
        },
      });
    } else {
      console.log('else');
      this._onError();
    }
  }

  render() {
    const {style, circle} = this.props;
    return (
      <Image
        loadingIndicatorSource={() => (
          <ActivityIndicator size="small" color={colors.main} />
        )}
        testID="imgComponent"
        onProgress={progress => console.log(progress)}
        source={this.state.source}
        style={[circle ? styles.circleImage : styles.image, style]}
        onError={this._onError}
        o
      />
    );
  }
  _onError = () => {
    this.setState({
      source: require('../../assets/images/default-Image.png'),
    });
  };
}
const styles = StyleSheet.create({
  container: {position: 'relative'},
  circleImage: {
    flex: 1,
    width: 75,
    borderRadius: 50,
  },
});
