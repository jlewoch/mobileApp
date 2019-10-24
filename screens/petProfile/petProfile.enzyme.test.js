import React from 'react';
import {PetProfileScreen} from './index';

const setup = (props = {}) => {
  const component = shallow(<PetProfileScreen {...props} />);
  return component;
};

describe('>>> Pet Profile --> Component Renders', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('render without errors', () => {
    expect(findByTestIdAttr(wrapper, 'petProfileScreen')).toHaveLength(1);
  });

  it('Should have an image', () => {
    expect(findByTestIdAttr(wrapper, 'petProfileImage')).toHaveLength(1);
  });
  it('Should have a name input', () => {
    expect(findByTestIdAttr(wrapper, 'petProfileName')).toHaveLength(1);
  });
  it('Should have a breed input', () => {
    expect(findByTestIdAttr(wrapper, 'petProfileBreed')).toHaveLength(1);
  });
  it('Should have a age input', () => {
    expect(findByTestIdAttr(wrapper, 'petProfileAge')).toHaveLength(1);
  });
  it('Should have a notes input', () => {
    expect(findByTestIdAttr(wrapper, 'petProfileNotes')).toHaveLength(1);
  });
  it('Should have a vet info input', () => {
    expect(findByTestIdAttr(wrapper, 'petProfileVet')).toHaveLength(1);
  });
  it('Should have a play with children switch', () => {
    expect(findByTestIdAttr(wrapper, 'petProfilePlayChildren')).toHaveLength(1);
  });
  it('Should have a play with dog switch', () => {
    expect(findByTestIdAttr(wrapper, 'petProfilePlayDog')).toHaveLength(1);
  });
  it('Should have a play with cat switch', () => {
    expect(findByTestIdAttr(wrapper, 'petProfilePlayCat')).toHaveLength(1);
  });
  it('Should have a can be around children switch', () => {
    expect(findByTestIdAttr(wrapper, 'petProfileAroundChildren')).toHaveLength(
      1,
    );
  });
  it('Should have a can be around dog switch', () => {
    expect(findByTestIdAttr(wrapper, 'petProfileAroundDog')).toHaveLength(1);
  });
  it('Should have a can be around cat switch', () => {
    expect(findByTestIdAttr(wrapper, 'petProfileAroundCat')).toHaveLength(1);
  });
  it('Should have a house trained switch', () => {
    expect(findByTestIdAttr(wrapper, 'petProfileHouseTrained')).toHaveLength(1);
  });
  it('Should have a microchip switch', () => {
    expect(findByTestIdAttr(wrapper, 'petProfileMicrochip')).toHaveLength(1);
  });
  it('Should have a save button', () => {
    expect(findByTestIdAttr(wrapper, 'petProfileSaveBtn')).toHaveLength(1);
  });
  it('Should have an initial state', () => {
    expect(wrapper.state()).toMatchObject({
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
    });
  });
});
describe('>>> Pet Profile --> Functions', () => {
  it('_onChnage Should update indicated state', () => {
    const instance = renderer.create(<PetProfileScreen />).getInstance();
    instance._onChange('hello', 'name');
    expect(instance.state.values.name).toEqual('hello');
  });
});

describe('>>> Pet Profile --> Inputs', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('Should change state when value is changed in name input', () => {
    const name = findByTestIdAttr(wrapper, 'petProfileName');
    name.simulate('change', 'Test');
    expect(wrapper.state('values').name).toEqual('Test');
  });
  it('Should change state when value is changed in breed input', () => {
    const breed = findByTestIdAttr(wrapper, 'petProfileBreed');
    breed.simulate('change', 'Test');
    expect(wrapper.state('values').breed).toEqual('Test');
  });
  it('Should change state when value is changed in age input', () => {
    const age = findByTestIdAttr(wrapper, 'petProfileAge');
    age.simulate('change', 'Test');
    expect(wrapper.state('values').age).toEqual('Test');
  });
  it('Should change state when value is changed in notes input', () => {
    const notes = findByTestIdAttr(wrapper, 'petProfileNotes');
    notes.simulate('change', 'Test');
    expect(wrapper.state('values').notes).toEqual('Test');
  });
  it('Should change state when value is changed in vet info input', () => {
    const vet = findByTestIdAttr(wrapper, 'petProfileVet');
    vet.simulate('change', 'Test');
    expect(wrapper.state('values').vet_info).toEqual('Test');
  });
  it('Should change state when value is changed in play with children switch', () => {
    const playChild = findByTestIdAttr(wrapper, 'petProfilePlayChildren');
    playChild.simulate('change', true);
    expect(wrapper.state('values').play_child).toEqual(true);
  });
  it('Should change state when value is changed in play with dog switch', () => {
    const playDog = findByTestIdAttr(wrapper, 'petProfilePlayDog');
    playDog.simulate('change', true);
    expect(wrapper.state('values').play_dog).toEqual(true);
  });
  it('Should change state when value is changed in play with cat switch', () => {
    const playCat = findByTestIdAttr(wrapper, 'petProfilePlayCat');
    playCat.simulate('change', true);
    expect(wrapper.state('values').play_cat).toEqual(true);
  });
  it('Should change state when value is changed in can be around children switch', () => {
    const aroundChild = findByTestIdAttr(wrapper, 'petProfileAroundChildren');
    aroundChild.simulate('change', true);
    expect(wrapper.state('values').around_child).toEqual(true);
  });
  it('Should change state when value is changed in can be around dog switch', () => {
    const aroundDog = findByTestIdAttr(wrapper, 'petProfileAroundDog');
    aroundDog.simulate('change', true);
    expect(wrapper.state('values').around_dog).toEqual(true);
  });
  it('Should change state when value is changed in can be around cat switch', () => {
    const aroundCat = findByTestIdAttr(wrapper, 'petProfileAroundCat');
    aroundCat.simulate('change', true);
    expect(wrapper.state('values').around_cat).toEqual(true);
  });
  it('Should change state when value is changed in house trained switch', () => {
    const trained = findByTestIdAttr(wrapper, 'petProfileHouseTrained');
    trained.simulate('change', true);
    expect(wrapper.state('values').house_trained).toEqual(true);
  });
  it('Should change state when value is changed in microchip switch', () => {
    const chipped = findByTestIdAttr(wrapper, 'petProfileMicrochip');
    chipped.simulate('change', true);
    expect(wrapper.state('values').microchip).toEqual(true);
  });
});

describe('>>> Pet Profile --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
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
    };
    const propsError = checkProps(PetProfileScreen, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
