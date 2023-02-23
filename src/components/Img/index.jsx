import React from 'react';
import { PropTypes } from 'prop-types';
import './Img.css';

const Img = ({ path }) => {
  return (
    <div>
      <img className="card-image" src={path} alt="" />
    </div>
  );
};
Img.propTypes = {
  path: PropTypes.string.isRequired,
};
export default Img;
