import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// components
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import Row from '../../components/row';
import {StyledImage} from '../../components/styledImage';
import Section from '../../components/section';
import StyledSwitch from '../../components/styledSwitch';
import StyledText from '../../components/styledText';
import Input from '../../components/input';
import Icon from '../../components/icon';
import Button from '../../components/button';
import Dropdown from '../../components/dropdown';
import {getPhotoAsync} from '../../utils/permissions';
import {
  headerHeight,
  deviceWidth,
  deviceHeight,
} from '../../constants/dimensions';

// function to populate years dropdown
const years = () => {
  let arr = Array(19);
  arr[0] = {label: '< 1 Year', value: 0};
  arr[1] = {label: '1 Year', value: 1};
  for (let i = 2; i < 20; i++) {
    arr[i] = {label: `${i}${i === 19 ? '+' : ''} Years`, value: i};
  }
  return arr;
};
export class PetProfileScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'pet profile',
    headerLeft: () => (
      <Icon
        name="arrowleft"
        color="white"
        onPress={() =>
          navigation.getParam('back')
            ? navigation.navigate(navigation.getParam('back'))
            : navigation.goBack()
        }
        style={{marginLeft: 15}}
      />
    ),
  });
  newPet = true;

  state = {
    errors: {name: null},
    values: {
      img: '',
      breed: '',
      age: 0,
      play_child: false,
      play_dog: false,
      play_cat: false,
      around_child: false,
      around_dog: false,
      around_cat: false,
      microchip: false,
      house_trained: false,
      name: '',
      size: '',
      notes: '',
      medication: '',
      vet_info: '',
    },
  };
  componentDidMount() {
    if (this.props.navigation && this.props.navigation.getParam('pet')) {
      this.newpet = false;
      this.setState(this.props.navigation.getParam('pet'));
    }
  }

  render() {
    const {values, errors} = this.state;
    console.log(this.props.navigation);
    return (
      <KeyboardAvoidingView
        testID="petProfileScreen"
        behavior="padding"
        enabled
        keyboardVerticalOffset={headerHeight}>
        <ScrollView>
          <StyledImage
            testID="petProfileImage"
            uri={values.img}
            onPress={this._selectImageAsync}
            style={{width: deviceWidth, height: deviceHeight / 3}}
          />
          <Section>
            <Input
              testID="petProfileName"
              onChange={e => this._onChange(e, 'name')}
              value={values.name}
              placeholder="Name"
            />
            <Input
              testID="petProfileBreed"
              onChange={e => this._onChange(e, 'breed')}
              value={values.bread}
              placeholder="Breed"
            />
            <Row>
              <Dropdown
                testID="petProfileSize"
                label="Size"
                style={{flex: 1}}
                options={[
                  {label: 'Small (1-10 kg)', value: 'Small'},
                  {label: 'Medium (11-26 kg)', value: 'Medium'},
                  {label: 'Large (27-44kg)', value: 'Large'},
                  {label: 'Giant (45 kg+)', value: 'Giant'},
                ]}
                onChange={e => this._onChange(e, 'size')}
                selected={values.size}
              />
              <Dropdown
                testID="petProfileAge"
                onChange={e => this._onChange(e, 'age')}
                selected={values.age}
                label="Age"
                style={{flex: 1}}
                options={years()}
              />
            </Row>
            <StyledText type="title3">Social Behavior</StyledText>
            <Section style={{paddingTop: 0}}>
              <StyledText
                type="headline"
                style={{marginVertical: 10, fontWeight: '600'}}>
                Can be around?
              </StyledText>
              <StyledSwitch
                testID="petProfileAroundChildren"
                label="Children"
                onChange={e => this._onChange(e, 'around_child')}
                value={values.around_child}
              />
              <StyledSwitch
                testID="petProfileAroundDog"
                label="Dogs"
                onChange={e => this._onChange(e, 'around_dog')}
                value={values.around_dog}
              />
              <StyledSwitch
                testID="petProfileAroundCat"
                label="Cats"
                onChange={e => this._onChange(e, 'around_cat')}
                value={values.around_cat}
              />
            </Section>

            <Section>
              <StyledText>Can play with?</StyledText>
              <StyledSwitch
                testID="petProfilePlayChildren"
                label="Children"
                onChange={e => this._onChange(e, 'play_child')}
                value={values.play_child}
              />
              <StyledSwitch
                testID="petProfilePlayDog"
                label="Dogs"
                onChange={e => this._onChange(e, 'play_dog')}
                value={values.play_dog}
              />
              <StyledSwitch
                testID="petProfilePlayCat"
                label="Cats"
                onChange={e => this._onChange(e, 'play_cat')}
                value={values.play_cat}
              />
            </Section>

            <Section>
              <StyledText>Other</StyledText>
              <StyledSwitch
                testID="petProfileMicrochip"
                label="Microchip"
                onChange={e => this._onChange(e, 'microchip')}
                value={values.microchip}
              />
              <StyledSwitch
                testID="petProfileHouseTrained"
                label="House trained"
                onChange={e => this._onChange(e, 'house_trained')}
                value={values.house_trained}
              />
            </Section>

            <Section>
              <Input
                testID="petProfileMedication"
                label="Medication"
                multiline
                onChange={e => this._onChange(e, 'medication')}
                value={values.medication}
                placeholder="Medication"
              />
              <Input
                testID="petProfileVet"
                label="Vet Info"
                multiline
                onChange={e => this._onChange(e, 'vet_info')}
                value={values.vet_info}
                placeholder="Vet Info"
              />
              <Input
                testID="petProfileNotes"
                label="Notes"
                multiline
                onChange={e => this._onChange(e, 'notes')}
                value={values.notes}
                placeholder="Notes"
              />
            </Section>
          </Section>

          <Button
            testID="petProfileSaveBtn"
            label={this.newPet ? 'Add Pet' : 'Save'}
            onPress={() => this._submit(this.newPet)}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  _selectImageAsync = async () => {
    try {
      const uri = await getPhotoAsync();
      this._onChange(uri, 'img');
    } catch (error) {}
  };
  _onChange = (value, name) => {
    this.setState({values: {...this.state.values, [name]: value}});
  };
  _submit = () => {};
}
PetProfileScreen.propTypes = {
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
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PetProfileScreen);
