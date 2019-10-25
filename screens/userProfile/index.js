import React, {Component} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Section from '../../components/section';
import {ScrollView} from 'react-native-gesture-handler';
import Card from '../../components/card';
import Button from '../../components/button';
import Input from '../../components/input';
import List from '../../components/list';
import {StyledImage} from '../../components/styledImage';
import {checkName, checkCity, checkEmail} from '../../utils/validation';
import {getPhotoAsync} from '../../utils/permissions';
import {
  headerHeight,
  deviceWidth,
  deviceHeight,
} from '../../constants/dimensions';
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
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: 'white'}}
        behavior="padding"
        enabled
        keyboardVerticalOffset={headerHeight}>
        <ScrollView
          testID="userProfileScreen"
          style={{flex: 1}}
          contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
          <StyledImage
            testID="userProfileImage"
            style={{width: deviceWidth, height: deviceHeight / 3}}
            uri={values.image}
            onPress={this._selectPhotoAsync}
          />
          <Section>
            <Input
              testID="userProfileName"
              feedback
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
            />
            <List
              testID="userProfilePets"
              label="Pets"
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
            disabled={
              checkCity(values.city) ||
              checkName(values.name) ||
              checkEmail(values.email)
            }
            testID="userProfileSaveBtn"
            label="Save"
            onPress={this._saveAsync}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  _selectPhotoAsync = async () => {
    try {
      const uri = await getPhotoAsync();
      this._onChange(uri, 'image');
    } catch (error) {
      console.log(error);
    }
  };
  _setPhotoState = response => {
    this.onChange(response.uri, 'image');
  };
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
