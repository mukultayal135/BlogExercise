import PropTypes from 'prop-types';
import { useState } from 'react';
import Img from '../Img';
import PostContent from '../PostContent';
import Reactions from '../Reactions';
import './Card.css';

function Card({ img, title, description, readingTime, date, initialClaps }) {
  const [claps, setClaps] = useState(initialClaps);
  const [like, setLike] = useState(false);
  const onReact = () => {
    setClaps(claps + 1);
  };
  const onLike = () => {
    setLike(!like);
  };
  return (
    <div className="card" data-testid="card">
      <Img path={img} />
      <PostContent
        title={title}
        description={description}
        readingTime={readingTime}
        date={date}
      />
      <Reactions onReact={onReact} count={claps} onLike={onLike} liked={like} />
    </div>
  );
}
Card.propTypes = {
  img: PropTypes.string.isRequired,
  initialClaps: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default Card;
