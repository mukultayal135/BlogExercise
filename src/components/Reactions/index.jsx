/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import clap from '../../assets/Icons/clapping.svg';
import heartRed from '../../assets/Icons/heart-red.svg';
import heartBlack from '../../assets/Icons/heart-black.svg';
import './Reactions.css';

const Reactions = ({ onReact, count, liked, onLike }) => {
  return (
    <>
      <hr />
      <div className="reactions">
        <div className="clap">
          <img src={clap} alt="clapImage" onClick={onReact} />
          <div className="count" data-testid="count-clap">
            {count}
          </div>
        </div>
        <div className="heart">
          <img
            src={liked ? heartRed : heartBlack}
            alt="heartImg"
            onClick={onLike}
          />
        </div>
      </div>
    </>
  );
};
Reactions.propTypes = {
  onReact: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
};
export default Reactions;
