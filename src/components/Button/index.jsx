import React from 'react';
import PropTypes from 'prop-types'
const Component = ({onClick, children}) => <button onClick={onClick}>{children}</button>

Component.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
};

Component.displayName = 'Component';

export default Component;
