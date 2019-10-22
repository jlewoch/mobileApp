import checkPropTypes from 'check-prop-types';

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
