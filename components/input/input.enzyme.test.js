import React from 'react';
import {shallow} from 'enzyme';
import Input from './index';
import {findByTestIdAttr, checkProps} from '../../utils';
const setup = (props = {}) => {
  const component = shallow(<Input {...props} />);
  return component;
};
describe('>>> Input --> Shallow Renders', () => {
  describe('Without Props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });
    it('Renders without errors', () => {
      const component = findByTestIdAttr(wrapper, 'inputComponent');
      expect(component.length).toBe(1);
    });
    it('Has a text input', () => {
      const label = findByTestIdAttr(wrapper, 'inputTextInput');
      expect(label.length).toBe(1);
    });
    it('Does not have a label', () => {
      const label = findByTestIdAttr(wrapper, 'inputLabel');
      expect(label.length).toBe(0);
    });
    it('Does not have a feedback icon', () => {
      const label = findByTestIdAttr(wrapper, 'inputFeedbackIcon');
      expect(label.length).toBe(0);
    });
    it('Does not have an error message', () => {
      const errMsg = findByTestIdAttr(wrapper, 'inputErrMsg');
      expect(errMsg.length).toBe(0);
    });
    it('Does not have an icon', () => {
      const icon = findByTestIdAttr(wrapper, 'inputIcon');
      expect(icon.length).toBe(0);
    });
    it('Does not have a secure eye icon', () => {
      const secureEye = findByTestIdAttr(wrapper, 'inputSecureEye');
      expect(secureEye.length).toBe(0);
    });
  });
  describe('Error Message', () => {
    it('renders errormsg when error is true', () => {
      const wrapper = setup({error: true, errormsg: 'test message'});
      const errMsg = findByTestIdAttr(wrapper, 'inputErrMsg');
      expect(errMsg.length).toBe(1);
    });
    it('Does not render errormsg when error is false', () => {
      const wrapper = setup({error: false, errormsg: 'test message'});
      const icon = findByTestIdAttr(wrapper, 'inputIcon');
      expect(icon.length).toBe(0);
    });
  });
  describe('FeedBack Icon', () => {
    it('Renders feedback icon when error is true and feedback is true', () => {
      const wrapper = setup({
        feedback: true,
        error: true,
        errormsg: 'test message',
      });
      const errMsg = findByTestIdAttr(wrapper, 'inputFeedbackIcon');
      expect(errMsg.length).toBe(1);
    });
    it('Does not render feedback icon when error is null and feedback is true', () => {
      const wrapper = setup({
        feedback: true,
        error: null,
        errormsg: 'test message',
      });
      const icon = findByTestIdAttr(wrapper, 'inputFeedbackIcon');
      expect(icon.length).toBe(0);
    });
    it('Does not render feedback icon when feedback is false', () => {
      const wrapper = setup({feedback: false});
      const icon = findByTestIdAttr(wrapper, 'inputFeedbackIcon');
      expect(icon.length).toBe(0);
    });
    it('Does render feedback icon when error is false and feedback is true', () => {
      const wrapper = setup({
        feedback: true,
        error: false,
        errormsg: 'test message',
      });
      const icon = findByTestIdAttr(wrapper, 'inputFeedbackIcon');
      expect(icon.length).toBe(1);
    });
  });

  describe('Icon', () => {
    it('Renders Icon when icon prop is passed', () => {
      const wrapper = setup({
        icon: 'user',
      });
      const icon = findByTestIdAttr(wrapper, 'inputIcon');
      expect(icon.length).toBe(1);
    });
  });
  describe('Label', () => {
    it('Does render label when label prop is  passed', () => {
      const wrapper = setup({
        label: 'Test label',
      });
      const icon = findByTestIdAttr(wrapper, 'inputLabel');
      expect(icon.length).toBe(1);
    });
  });
  describe('Secure Eye', () => {
    it('Does render secure eye icon when secure is true', () => {
      const wrapper = setup({
        secure: true,
      });
      const icon = findByTestIdAttr(wrapper, 'inputSecureEye');
      expect(icon.length).toBe(1);
    });
    it('Does not render secure eye icon when secure is false', () => {
      const wrapper = setup({
        secure: false,
      });
      const icon = findByTestIdAttr(wrapper, 'inputSecureEye');
      expect(icon.length).toBe(0);
    });
  });
});
describe('>>> Input --> Functions', () => {
  describe('Change Visibility', () => {
    const wrapper = setup({secure: true});
    expect(wrapper.state('secure')).toBe(true);
    findByTestIdAttr(wrapper, 'inputSecureEye').simulate('press');
    expect(wrapper.state('secure')).toBe(false);
  });
});

describe('>>> Input --> Checking PropTypes', () => {
  it('Should not throw a warning', () => {
    const expectedProps = {
      errormsg: 'Test error',
      placeholder: 'Test placeholder',
      label: 'Test Label',
      autoFocus: true,
      icon: 'user',
      onChange: () => {},
      value: 'Test value',
      onBlur: () => {},
      error: false,
      feedback: true,
    };
    const propsError = checkProps(Input, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
