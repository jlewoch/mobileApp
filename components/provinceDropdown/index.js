import React from 'react';
import propTypes from 'prop-types';
import Dropdown from './Dropdown';

const ProvinceDropdown = ({style, selected, onChange}) => {
  return (
    <Dropdown
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
  style: propTypes.oneOfType([PropTypes.array, PropTypes.object]),
  selected: propTypes.string,
  onChange: propTypes.func,
};
export default ProvinceDropdown;
