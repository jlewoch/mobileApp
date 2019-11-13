import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Card from '../../components/card';
import moment from 'moment';
export class AdminAccessRequestsScreen extends Component {
  static propTypes = {};

  render() {
    return (
      <ScrollView>
        <List
          items={[]}
          label="Pending"
          card={(item, idx) => (
            <Card
              key={idx}
              title={item.name}
              desc={`Requested on ${moment(item._id.getTimestamp()).format(
                'LL',
              )}`}
              details={`Refered By: ${item.refered_by}`}
            />
          )}
        />
        <List
          items={[]}
          label="Appointment Booked"
          card={(item, idx) => (
            <Card
              key={idx}
              title={item.name}
              desc={`Meet and greet on ${item.date} at ${item.startTime}`}
              details={`Refered By: ${item.refered_by}`}
            />
          )}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminAccessRequestsScreen);
