// dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// components
import {ScrollView} from 'react-native';
import ContainerSafeView from '../../components/container';
import List from '../../components/list';
import Card from '../../components/card';

export class Employees extends Component {
  static propTypes = {};

  render() {
    return (
      <ContainerSafeView>
        <ScrollView style={styles.container}>
          <List
            items={[]}
            label="Active Employees"
            add={this._addEmployee}
            card={(emp, idx) => (
              <Card
                key={idx}
                onPress={() =>
                  this.props.navigation.navigate('EmployeeSummary', {emp})
                }
                title={emp.name}
                image
                imageSrc={emp.img}
              />
            )}
          />
        </ScrollView>
      </ContainerSafeView>
    );
  }
  _addEmployee = () => {};
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Employees);
const styles = StyleSheet.create({container: {flex: 1}});
