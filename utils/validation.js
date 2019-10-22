export const isBlank = e => e.length === 0;
const checkLength = (value, min) => {
  return value.length < min;
};

export const checkName = e => checkLength(e, 2);
export const checkEmail = e =>
  !/^[\w!#$%&'*+\-\/=?^_`{|}~.;]+@\w+\.\w+/.test(e);
export const checkCity = e => checkLength(e, 2);
export const checkPassword = e => checkLength(e, 8);
