import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import StyledText from '../../components/styledText';

export class AdminAccessRequestDetailsScreen extends Component {
  state = {};

  render() {
    const {name, status, refered_by, city, _id} = this.props;
    return (
      <ScrollView>
        {/* name of requestor */}
        <StyledText>{name}</StyledText>
        {/* date access was requested on */}
        <StyledText>{_id.getTimeStamp()}</StyledText>

        {/* city */}
        <StyledText>{city}</StyledText>

        {/* refered by */}
        <StyledText>{refered_by}</StyledText>

        {/* if this is a new request show button to setup meeting and send initial contact message via email to user otherwise dont show button*/}
        {status === 'new' && <Button label="Send Communication" />}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  request,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminAccessRequestDetailsScreen);
