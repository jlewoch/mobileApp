import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// components
import Card from '../../components/card';
import List from '../../components/list';
import Section from '../../components/section';
import {ScrollView} from 'react-native-gesture-handler';

export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'hello',
  };
  render() {
    const {events} = this.props;
    return (
      <ScrollView testID="homeComponent">
        <Section>
          <List
            testID="homeEventList"
            label="Events"
            add={() => this.props.navigation.navigate('EventDetails')}
            items={events}
            card={(event, idx) => (
              <Card
                testID="homeCard"
                key={idx}
                image
                title={event.date}
                desc={event.type}
                imageSrc={event.imageSrc}
                details={event.time || 'N/A'}
                onPress={() =>
                  this.props.navigation.navigate('EventSummary', {
                    event,
                  })
                }
              />
            )}
          />
        </Section>
      </ScrollView>
    );
  }
}
HomeScreen.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      image: PropTypes.string,
      date: PropTypes.string,
      time: PropTypes.string,
      type: PropTypes.string,
      pets: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string,
          owner: PropTypes.string,
          img: PropTypes.string,
          breed: PropTypes.string,
          age: PropTypes.number,
          play_child: PropTypes.bool,
          play_dog: PropTypes.bool,
          play_cat: PropTypes.bool,
          around_child: PropTypes.bool,
          around_dog: PropTypes.bool,
          around_cat: PropTypes.bool,
          microchip: PropTypes.bool,
          house_trained: PropTypes.bool,
          name: PropTypes.string,
          size: PropTypes.string,
          notes: PropTypes.string,
          medication: PropTypes.string,
          vet_info: PropTypes.string,
        }),
      ),
    }),
  ),
};
const mapStateToProps = state => ({
  events: [
    {
      _id: 'TestId',
      imageSrc: '',
      date: 'Wednesday August 25 2019',
      type: 'Walk',
      time: '6:30PM - 3:30PM',
      pets: [
        {
          _id: 'Test',
          owner: 'Test',
          img: 'Test',
          breed: 'Test',
          age: 2,
          play_child: true,
          play_dog: true,
          play_cat: true,
          around_child: true,
          around_dog: true,
          around_cat: true,
          microchip: true,
          house_trained: true,
          name: 'Test',
          size: 'Test',
          notes: 'Test',
          medication: 'Test',
          vet_info: 'Test',
        },
      ],
    },
    {
      _id: 'TestId',
      imageSrc: '',
      date: 'Wednesday August 25 2019',
      type: 'Walk',
      time: '6:30PM - 3:30PM',
      pets: [
        {
          _id: 'Test',
          owner: 'Test',
          img: 'Test',
          breed: 'Test',
          age: 2,
          play_child: true,
          play_dog: true,
          play_cat: true,
          around_child: true,
          around_dog: true,
          around_cat: true,
          microchip: true,
          house_trained: true,
          name: 'Test',
          size: 'Test',
          notes: 'Test',
          medication: 'Test',
          vet_info: 'Test',
        },
      ],
    },
  ],
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
