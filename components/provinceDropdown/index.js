import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../dropdown';
const ProvinceDropdown = ({style, selected, onChange}) => {
  return (
    <Dropdown
      test
      label="Province"
      style={style}
      options={[
        {label: 'Ontario', value: 'Ontario'},
        {label: 'Quebec', value: 'Quebec'},
        {label: 'Nova Scotia', value: 'Nova Scotia'},
        {label: 'New Brunswick', value: 'New Brunswick'},
        {label: 'Manitoba', value: 'Manitoba'},
        {label: 'British Columbia', value: 'British Columbia'},
        {label: 'Prince Edward Island', value: 'Prince Edward Island'},
        {label: 'Saskatchewan', value: 'Saskatchewan'},
        {label: 'Alberta', value: 'Alberta'},
        {
          label: 'Newfoundland and Labrador',
          value: 'Newfoundland and Labrador',
        },
      ]}
      onChange={e => onChange(e, 'province')}
      selected={selected}
    />
  );
};
ProvinceDropdown.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  selected: PropTypes.oneOf([
    'Ontario',
    'Quebec',
    'Nova Scotia',
    'New Brunswick',
    'Manitoba',
    'British Columbia',
    'Prince Edward Island',
    'Saskatchewan',
    'Alberta',
    'Newfoundland and Labrador',
  ]),
  onChange: PropTypes.func,
};
export default ProvinceDropdown;
