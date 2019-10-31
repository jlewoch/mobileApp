import React, {Component} from 'react';
import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Section from '../../components/section';
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
import Icon from '../../components/icon';
import colors from '../../constants/colors';
import Row from '../../components/row';
import StyledText from '../../components/styledText';
export class UserProfileScreen extends Component {
  state = {
    image: null,
    name: null,
    email: null,
    city: null,
    street_address: null,
  };
  componentDidMount() {
    if (this.props.user) {
      const {image, name, email, city, street_address} = this.props.user;
      this.setState({image, name, email, city, street_address});
    }
  }

  render() {
    const {image, name, email, city, street_address} = this.state;
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
              empty={this._renderEmptyPet}
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
            disabled={checkCity(city) || checkName(name) || checkEmail(email)}
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
  _renderEmptyPet = () => {
    return (
      <Row
        style={{
          padding: 25,
          justifyContent: 'center',
          backgroundColor: colors.subText,
        }}>
        <View style={{alignItems: 'center'}}>
          <Icon type="FontAwesome5" name="leaf" size={42} />
          <StyledText style={{color: colors.white}}>Add a Pet</StyledText>
        </View>
      </Row>
    );
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
