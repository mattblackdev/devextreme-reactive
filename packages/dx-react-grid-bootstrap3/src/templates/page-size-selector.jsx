import React from 'react';
import PropTypes from 'prop-types';

export const PageSizeSelector = ({
  pageSize,
  onPageSizeChange,
  allowedPageSizes,
  showAllText,
}) => (
  <div style={{ display: 'inline-block' }}>
    <select
      className="form-control visible-xs-inline-block"
      style={{ width: 'auto' }}
      value={pageSize}
      onChange={e => onPageSizeChange(parseInt(e.target.value, 10))}
    >
      {allowedPageSizes.map(val => (
        <option key={val} value={val}>
          {val || showAllText}
        </option>
      ))}
    </select>
    <ul
      className="pagination hidden-xs"
      style={{
        margin: 0,
        verticalAlign: 'bottom',
      }}
    >
      {allowedPageSizes.map(item => (
        <li key={item} className={item === pageSize ? 'active' : ''}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageSizeChange(item);
            }}
          >
            {item || showAllText}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

PageSizeSelector.propTypes = {
  pageSize: PropTypes.number.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  allowedPageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  showAllText: PropTypes.string,
};

PageSizeSelector.defaultProps = {
  showAllText: 'All',
};

