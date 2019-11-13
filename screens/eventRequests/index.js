import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export class EventRequestsScreen extends Component {
  static propTypes = {};

  render() {
    return (
      <ScrollView>
        <List items={[]} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventRequestsScreen);
