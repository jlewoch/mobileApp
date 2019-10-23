import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import Card from '../../components/card';
import List from '../../components/list';
export class HomeScreen extends Component {
  render() {
    const {events} = this.props;
    return (
      <View testID="homeComponent">
        <List
          testID="homeEventList"
          label="Events"
          add={() => this.props.navigation.navigate('EventDetails')}
          items={events}
          card={(event, idx) => (
            <Card
              testID="homeCard"
              key={idx}
              title={event.date}
              desc={event.type}
              image={event.image}
              details={event.time || 'N/A'}
            />
          )}
        />
      </View>
    );
  }
}
HomeScreen.propTypes = {};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
