/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import React from 'react';
import { PropTypes } from 'prop-types';
import './Img.css';

const Img = ({ path }) => {
  return (
    <div>
      <img
        className="card-image"
        src={require(`../../assets/Images/${path}`)}
        alt=""
      />
    </div>
  );
};
Img.propTypes = {
  path: PropTypes.string.isRequired,
};
export default Img;
