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
import SelectableOption from '../../components/selectableOption';

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
    nutered_spayed: false,
    name: '',
    size: '',
    notes: '',
    medication: '',
    vet_info: '',
  };
  componentDidMount() {
    if (this.props.navigation && this.props.navigation.getParam('pet')) {
      this.newpet = false;
      this.setState(this.props.navigation.getParam('pet'));
    }
  }

  render() {
    const {
      img,
      breed,
      age,
      play_child,
      play_dog,
      play_cat,
      around_child,
      around_dog,
      around_cat,
      microchip,
      house_trained,
      name,
      size,
      notes,
      medication,
      vet_info,
      nutered_spayed,
    } = this.state;
    console.log(this.props.navigation);
    return (
      <KeyboardAvoidingView
        testID="petProfileScreen"
        behavior="padding"
        enabled>
        <ScrollView style={{backgroundColor: 'gray'}}>
          <StyledImage
            testID="petProfileImage"
            uri={img}
            onPress={this._selectImageAsync}
            style={{width: deviceWidth, height: deviceHeight / 3}}
          />
          <Section style={{marginBottom: 10}}>
            <Input
              testID="petProfileName"
              onChange={e => this._handleOnChange(e, 'name')}
              value={name}
              label="Name"
            />
            <Input
              testID="petProfileBreed"
              onChange={e => this._handleOnChange(e, 'breed')}
              value={breed}
              label="Breed"
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
                onChange={e => this._handleOnChange(e, 'size')}
                selected={size}
              />
              <Dropdown
                testID="petProfileAge"
                onChange={e => this._handleOnChange(e, 'age')}
                selected={age}
                label="Age"
                style={{flex: 1}}
                options={years()}
              />
            </Row>
          </Section>
          <Section style={{marginBottom: 10}}>
            <Input
              testID="petProfileNotes"
              label="Description"
              multiline
              onChange={e => this._handleOnChange(e, 'notes')}
              value={notes}
              placeholder="Tell me about your pet"
            />
          </Section>
          <Section style={{marginBottom: 10}}>
            <StyledText type="title3">Social Behavior</StyledText>
            <Section style={{paddingTop: 0}}>
              <StyledText type="headline" style={{marginVertical: 10}}>
                Can be around?
              </StyledText>
              <Row>
                <SelectableOption
                  onChange={e => this._handleOnChange(e, 'around_child')}
                  selected={around_child}
                  label="Children"
                />
                <SelectableOption
                  onChange={e => this._handleOnChange(e, 'around_dog')}
                  selected={around_dog}
                  label="Dogs"
                />
                <SelectableOption
                  onChange={e => this._handleOnChange(e, 'around_cat')}
                  selected={around_cat}
                  label="Cats"
                />
              </Row>

              <StyledText type="headline" style={{marginBottom: 10}}>
                Can play with?
              </StyledText>
              <Row>
                <SelectableOption
                  onChange={e => this._handleOnChange(e, 'play_child')}
                  selected={play_child}
                  label="Children"
                />
                <SelectableOption
                  onChange={e => this._handleOnChange(e, 'play_dog')}
                  selected={play_dog}
                  label="Dogs"
                />
                <SelectableOption
                  onChange={e => this._handleOnChange(e, 'play_cat')}
                  selected={play_cat}
                  label="Cats"
                />
              </Row>

              <StyledText type="headline" style={{marginBottom: 10}}>
                Other
              </StyledText>
              <SelectableOption
                onChange={e => this._handleOnChange(e, 'microchip')}
                selected={microchip}
                label="Microchip"
              />
              <SelectableOption
                onChange={e => this._handleOnChange(e, 'house_trained')}
                selected={house_trained}
                label="House Trained"
              />
              <SelectableOption
                onChange={e => this._handleOnChange(e, 'nutered_spayed')}
                selected={nutered_spayed}
                label="Nutered\Spayed"
              />
            </Section>
          </Section>
          <Section>
            <Input
              testID="petProfileMedication"
              label="Medication"
              multiline
              onChange={e => this._handleOnChange(e, 'medication')}
              value={medication}
            />
            <Input
              testID="petProfileVet"
              label="Vet Info"
              multiline
              onChange={e => this._handleOnChange(e, 'vet_info')}
              value={vet_info}
            />
            <Input
              testID="petProfileNotes"
              label="Notes"
              multiline
              onChange={e => this._handleOnChange(e, 'notes')}
              value={notes}
            />
          </Section>

          <Button
            style={{marginTop: 0}}
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
      this._handleOnChange(uri, 'img');
    } catch (error) {}
  };
  _handleOnChange = (value, name) => {
    this.setState({[name]: value});
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
