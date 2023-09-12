import React from 'react';
import PropTypes from "prop-types";

const Header = ({title}) => {
  return (
    <div className="header">
        <h2>{title}</h2>
    </div>
  )
}

Header.prototype = {
  title: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: "Default App"
}

export default Header;