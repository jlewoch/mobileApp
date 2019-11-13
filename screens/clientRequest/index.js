import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DateSelector from '../../components/dateSelector';
import Section from '../../components/section';
import Input from '../../components/input';
import Dropdown from '../../components/dropdown';
import Button from '../../components/button';

export class RequestScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Event Request',
    headerLeft: () => (
      <Icon
        name="arrowleft"
        color="white"
        onPress={() => navigation.navigate('Dashboard')}
        style={{marginLeft: 15}}
      />
    ),
  });
  modify = false;
  state = {
    date: '',
    type: '30 Minute walk',
    start_time: '',
    pets: [],
    notes: '',
  };

  render() {
    const {type, start_time, pets, notes} = this.state;
    // type dropdown options
    const typeOptions = [{label: '30 Minute walk', value: '30 Minute walk'}];
    return (
      <ScrollView
        contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
        <Section style={{flex: 1}}>
          <DateSelector
            testID="requestDateSelector"
            onDateChange={e => this._handleOnChange(e, 'date')}
          />
          <Dropdown
            testID="requestTypeDropdown"
            options={typeOptions}
            onChange={e => this._handleOnChange(e, 'type')}
            selected={type}
          />

          <Input
            testID="requestNotes"
            label="Notes"
            multiline
            onChange={e => this._handleOnChange(e, 'notes')}
            value={notes}
          />
        </Section>
        <Button label={this.modify ? 'Submit Changes' : 'Submit Request'} />
      </ScrollView>
    );
  }
  _handleOnChange = (value, name) => this.setState({[name]: value});
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RequestScreen);
