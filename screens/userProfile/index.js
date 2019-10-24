import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Section from '../../components/section';
import {ScrollView} from 'react-native-gesture-handler';
import Card from '../../components/card';
import Button from '../../components/button';
import Input from '../../components/input';
import List from '../../components/list';
import {StyledImage} from '../../components/styledImage';

export class UserProfileScreen extends Component {
  state = {
    errors: {name: null, email: null, city: null},
    values: {
      image: '',
      name: '',
      email: '',
      city: '',
      street_address: '',
    },
  };
  componentDidMount() {
    if (this.props.user) {
      const {image, name, email, city, street_address} = this.props.user;
      this.setState({image, name, email, city, street_address});
    }
  }

  render() {
    const {values, errors} = this.state;
    return (
      <ScrollView testID="userProfileScreen">
        <StyledImage
          testID="userProfileImage"
          uri={values.image}
          onPress={() => {}}
        />
        <Section>
          <Input
            testID="userProfileName"
            feedback
            autoFocus
            placeholder="Name"
            icon="user"
            value={values.name}
            error={errors.name}
            errormsg="Please enter your name"
            onChange={e => {
              this._onChange(e, 'name');
            }}
            onBlur={() => {
              this._validate(checkName(values.name), 'name');
            }}
          />
          <Input
            testID="userProfileEmail"
            feedback
            placeholder="Email"
            icon="mail"
            value={values.email}
            error={errors.email}
            errormsg="Please enter a valid email address"
            onChange={e => this._onChange(e.trim(), 'email')}
            onBlur={() => {
              this._validate(checkEmail(values.email), 'email');
            }}
          />
          <Input
            testID="userProfileCity"
            feedback
            placeholder="City"
            icon="address"
            value={values.city}
            error={errors.city}
            errormsg="Please enter a city name"
            onChange={e => this._onChange(e, 'city')}
            onBlur={() => {
              this._validate(checkCity(values.city), 'city');
            }}
          />
          <Input
            testID="userProfileStreet"
            feedback
            placeholder="Street Address"
            icon="address"
            value={values.street_address}
            error={errors.street_address}
            errormsg="Please enter a street address name"
            onChange={e => this._onChange(e, 'street_address')}
            onBlur={() => {
              this._validate(
                checkCity(values.street_address),
                'street_address',
              );
            }}
          />
          <List
            testID="userProfilePets"
            add={() => this.props.navigation.navigate('PetProfile')}
            items={this.props.pets}
            card={(pet, idx) => (
              <Card
                key={idx}
                onPress={() =>
                  this.props.navigation.navigate('PetProfile', {pet})
                }
                title={pet.name}
                desc={pet.breed}
                details={pet.age}
                image={pet.img}
              />
            )}
          />
        </Section>
        <Button
          testID="userProfileSaveBtn"
          label="Save"
          onPress={this._saveAsync}
        />
      </ScrollView>
    );
  }
  _validate = (value, name) => {
    this.setState({errors: {...this.state.errors, [name]: value}});
  };
  _onChange = (value, name) => {
    this.setState({values: {...this.state.values, [name]: value}});
  };
  _saveAsync = () => {};
}
UserProfileScreen.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
    street_address: PropTypes.string,

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
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileScreen);
