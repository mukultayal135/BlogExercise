import PropTypes from 'prop-types';
import { useState } from 'react';
import Img from '../Img';
import PostContent from '../PostContent';
import Reactions from '../Reactions';
import './Card.css';
import { UPDATE_BLOG_DATA } from '../../constants/apiEndPoints';
import { getFormattedDateFromUtcDate } from '../../utils/common/date';
import makeRequest from '../../utils/makeRequest';

const Card = ({ blogData }) => {
  const [claps, setClaps] = useState(blogData.claps);
  const [like, setLike] = useState(blogData.liked);
  const onReact = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(blogData.id), () => {}, {
        data: { claps: claps + 1 },
      });
      setClaps(claps + 1);
    } catch (e) {
      //
    }
  };
  const onLike = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(blogData.id), () => {}, {
        data: { liked: !like },
      });
      setLike(!like);
    } catch (e) {
      //
    }
  };
  return (
    <div className="card" data-testid="card">
      <Img path={blogData.image} />
      <PostContent
        title={blogData.title}
        description={blogData.description}
        readingTime={blogData.reading_time}
        date={getFormattedDateFromUtcDate(blogData.date)}
      />
      <Reactions onReact={onReact} count={claps} onLike={onLike} liked={like} />
    </div>
  );
};
Card.propTypes = {
  blogData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reading_time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    claps: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  }).isRequired,
};
export default Card;
