import React from 'react';
import PropTypes from 'prop-types';
import './PostContent.css';

const PostContent = ({ title, date, readingTime, description }) => {
  return (
    <div className="card-content card-padding">
      <div className="date-time">
        <div className="date">{date}</div>
        <div className="read-time">{readingTime}</div>
      </div>
      <div className="card-heading">{title}</div>
      <div className="card-description">{description}</div>
    </div>
  );
};
export default PostContent;

PostContent.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
