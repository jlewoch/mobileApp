// dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {checkName, checkCity, checkEmail} from '../../utils/validation';
import {deviceWidth, deviceHeight} from '../../constants/dimensions';
// components
import Section from '../../components/section';
import Card from '../../components/card';
import Button from '../../components/button';
import Input from '../../components/input';
import List from '../../components/list';
import StyledImage from '../../components/styledImage';
import Icon from '../../components/icon';
import {ScrollView} from 'react-native-gesture-handler';
import Empty from '../../components/list/Empty';
import ContainerSafeView from '../../components/container';

export class UserProfileScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Profile',
    headerLeft: () => (
      <Icon
        name="arrowleft"
        color="white"
        onPress={() => navigation.navigate('Home')}
        style={{marginLeft: 15}}
      />
    ),
  });
  state = {
    image: null,
    name: '',
    email: '',
    city: '',
    street_address: '',
  };
  componentDidMount() {
    if (this.props.user) {
      const {image, name, email, city, street_address} = this.props.user;
      this.setState({image, name, email, city, street_address});
    }
  }

  render() {
    const {image, name, email, city, street_address} = this.state;
    console.log(image);
    return (
      <ContainerSafeView testID="userProfileScreen">
        <ScrollView style={{flex: 1}} keyboardShouldPersistTaps="always">
          <StyledImage
            testID="userProfileImage"
            style={{width: deviceWidth, height: deviceHeight / 3}}
            uri={image}
            onPress={this._selectPhotoAsync}
          />
          <Section>
            <Input
              testID="userProfileName"
              label="Name"
              icon="user"
              value={name}
              errormsg="Please enter your name"
              onChange={e => {
                this._onChange(e, 'name');
              }}
              validation={checkName}
            />
            <Input
              testID="userProfileEmail"
              label="Email"
              icon="mail"
              value={email}
              errormsg="Please enter a valid email address"
              onChange={e => this._onChange(e.trim(), 'email')}
              validation={checkEmail}
            />
            <Input
              testID="userProfileCity"
              label="City"
              icon="address"
              value={city}
              errormsg="Please enter a city name"
              onChange={e => this._onChange(e, 'city')}
              validation={checkCity}
            />
            <Input
              testID="userProfileStreet"
              label="Street Address"
              icon="address"
              value={street_address}
              errormsg="Please enter a street address name"
              onChange={e => this._onChange(e, 'street_address')}
            />
            <List
              testID="userProfilePets"
              label="Pets"
              empty={() => (
                <Empty
                  onPress={this._addPet}
                  message="Add A Pet"
                  iconType="FontAwesome5"
                  iconName="leaf"
                />
              )}
              add={this._addPet}
              items={this.props.user.pets}
              card={(pet, idx) => (
                <Card
                  key={idx}
                  onPress={() =>
                    this.props.navigation.navigate('PetProfile', {pet})
                  }
                  title={pet.name}
                  desc={pet.breed}
                  details={pet.age}
                  image
                  imageSrc={pet.img}
                />
              )}
            />
          </Section>
          <Button
            disabled={checkCity(city) || checkName(name) || checkEmail(email)}
            testID="userProfileSaveBtn"
            label="Save"
            onPress={this._saveAsync}
          />
        </ScrollView>
      </ContainerSafeView>
    );
  }
  _addPet = () => {
    this.props.navigation.navigate('PetProfile');
  };
  _selectPhotoAsync = uri => {
    if (uri) this._onChange(uri, 'image');
  };

  // handles and value chnages for any input
  _onChange = (value, stateKey) => {
    this.setState({[stateKey]: value});
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
const mapStateToProps = state => ({
  user: {
    name: 'jake',
    email: 'dsad@dass.com',
    city: 'lkjasdl',
    image: null,
    street_address: '',
    pets: [],
  },
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen);
