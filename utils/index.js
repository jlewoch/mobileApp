import checkPropTypes from 'check-prop-types';
import {AsyncStorage} from 'react-native';
export const findByTestIdAttr = (component, attr) => {
  const wrapper = component.findWhere(node => node.prop('testID') === attr);
  return wrapper;
};
export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name,
  );
  return propsError;
};
export const createForm = (state, props) => {
  let form = new FormData();
  Object.keys(state).forEach(
    key => state[key] !== props[key] && form.append(key, state[key]),
  );
  return form;
};
export const apiCall = async (route, method, body) => {
  const authorization = await AsyncStorage.getItem('token');
  return (
    authorization &&
    fetch(route, {
      method,
      body,
      headers: {
        authorization,
      },
    }).then(res => res.json())
  );
};
