export const isBlank = e => (e ? e.length === 0 : null);
const checkLength = (value, min) => (value ? value.length < min : null);

export const checkName = e => checkLength(e, 2);
export const checkEmail = e =>
  !/^[\w!#$%&'*+\-\/=?^_`{|}~.;]+@\w+\.\w+/.test(e);
export const checkCity = e => checkLength(e, 2);
export const checkPassword = e => checkLength(e, 8);
