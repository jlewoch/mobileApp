export const isBlank = e => e.length === 0;
export const isEmail = e => /^[\w!#$%&'*+\-\/=?^_`{|}~.;]+@\w+\.\w+/.test(e);
export const checkLength = (value, min) => value.trim().length < min;
