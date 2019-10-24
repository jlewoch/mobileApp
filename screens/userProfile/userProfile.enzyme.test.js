import React from 'react';
import {UserProfileScreen} from './index';

const setup = (props = {}) => {
  const component = shallow(<UserProfileScreen {...props} />);
  return component;
};

describe('>>> User Profile --> Component Renders', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('render without errors', () => {
    expect(findByTestIdAttr(wrapper, 'userProfileScreen')).toHaveLength(1);
  });
  it('Should have a list of pets', () => {
    expect(findByTestIdAttr(wrapper, 'userProfilePets')).toHaveLength(1);
  });
  it('Should have an image', () => {
    expect(findByTestIdAttr(wrapper, 'userProfileImage')).toHaveLength(1);
  });
  it('Should have a name input', () => {
    expect(findByTestIdAttr(wrapper, 'userProfileName')).toHaveLength(1);
  });
  it('Should have a email input', () => {
    expect(findByTestIdAttr(wrapper, 'userProfileEmail')).toHaveLength(1);
  });
  it('Should have a city input', () => {
    expect(findByTestIdAttr(wrapper, 'userProfileCity')).toHaveLength(1);
  });
  it('Should have a street address input', () => {
    expect(findByTestIdAttr(wrapper, 'userProfileStreet')).toHaveLength(1);
  });
  it('Should have a save button', () => {
    expect(findByTestIdAttr(wrapper, 'userProfileSaveBtn')).toHaveLength(1);
  });
  it('Should have an initial state', () => {
    expect(wrapper.state()).toMatchObject({
      errors: {name: null, email: null, city: null},
      values: {
        image: '',
        name: '',
        email: '',
        city: '',
        street_address: '',
      },
    });
  });
});
describe('>>> User Profile --> Functions', () => {
  it('_onChnage Should update indicated state', () => {
    const instance = renderer.create(<UserProfileScreen />).getInstance();
    instance._onChange('hello', 'email');
    expect(instance.state.values.email).toEqual('hello');
  });
});

describe('>>> User Profile --> Inputs', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('Should change image state value when a new image is picked', () => {
    const name = findByTestIdAttr(wrapper, 'userProfileName');
  });
  it('Should change name state value when value is entered into name', () => {
    const name = findByTestIdAttr(wrapper, 'userProfileName');
    name.simulate('change', 'Test');
    expect(wrapper.state('values').name).toEqual('Test');
  });
  it('Should change email state value when value is entered into email', () => {
    const email = findByTestIdAttr(wrapper, 'userProfileEmail');
    email.simulate('change', 'Test@test.com');
    expect(wrapper.state('values').email).toEqual('Test@test.com');
  });
  it('Should change city state value when value is entered into city', () => {
    const city = findByTestIdAttr(wrapper, 'userProfileCity');
    city.simulate('change', 'Test city');
    expect(wrapper.state('values').city).toEqual('Test city');
  });
  it('Should change street_address state value when value is entered into street address', () => {
    const street = findByTestIdAttr(wrapper, 'userProfileStreet');
    street.simulate('change', 'Test Street');
    expect(wrapper.state('values').street_address).toEqual('Test Street');
  });
});

describe('>>> User Profile --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
      user: {
        image: 'Test',
        name: 'Test',
        email: 'Test',
        city: 'Test',
        street_address: 'Test',

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
    };
    const propsError = checkProps(UserProfileScreen, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
