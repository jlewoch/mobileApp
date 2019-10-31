import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Card from '../../components/card'
export class AdminAccessRequests extends Component {
  static propTypes = {
  };

  render() {
    return (
      <ScrollView>
        <List items={[]} label='Pending' card={(item,idx)=><Card key={idx} title={item.name} desc={item.city} details={`Refered By: ${item.refered_by}`} />} />
        <List items={[]} label='Appointment Booked' card={(item,idx)=><Card key={idx} title={item.name} desc={item.city} details={`Meet and greet on ${item.meeting_date} at ${item.meeting_time}`} />} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminAccessRequests);
