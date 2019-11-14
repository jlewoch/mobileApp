import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// components
import {ScrollView, Image} from 'react-native';
import Card from '../../components/card';
import List from '../../components/list';
import Section from '../../components/section';
import ContainerSafeView from '../../components/container';

export class HomeScreen extends Component {
  static navigationOptions = props => ({
    title: 'Dashboard',
  });
  state = {source: require('../../assets/images/default-Image.png')};
  render() {
    const {events} = this.props;
    return (
      <ContainerSafeView>
        <ScrollView testID="homeComponent">
          <Section>
            <List
              testID="homeEventList"
              label="Events"
              add={() => this.props.navigation.navigate('SubmitRequest')}
              items={events}
              card={(event, idx) => (
                <Card
                  testID="homeCard"
                  key={idx}
                  image
                  title={event.date}
                  desc={event.type}
                  imageSrc={this._getImageSrc(event)}
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
      </ContainerSafeView>
    );
  }
  _getImageSrc = ({pets}) => {
    if (!pets[0] || !pets[0].img) return null;
    return `${pets[0].owner}/${pets[0].img}`;
  };
}
HomeScreen.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      date: PropTypes.string,
      time: PropTypes.string,
      type: PropTypes.string,
      pets: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string,
          owner: PropTypes.string,
          img: PropTypes.string,
          breed: PropTypes.string,
          about: PropTypes.string,
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
          owner: '5dc06f5e12dc1b38e8b98b20',
          img: '1572915066810.jpg',
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
          about: 'Test',
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
          img: '',
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
          about: 'Test',
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
