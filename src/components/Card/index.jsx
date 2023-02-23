import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Img from '../Img';
import { BlogPostContext } from '../../contexts/BlogPostContext';
import PostContent from '../PostContent';
import Reactions from '../Reactions';
import './Card.css';
import { UPDATE_BLOG_DATA } from '../../constants/apiEndPoints';
import {
  updateBlogData,
  getFormattedDateFromUtcDate,
} from '../../utils/common/date';
import makeRequest from '../../utils/makeRequest';

const Card = ({ blogData }) => {
  const { allBlogData, setAllBlogData } = useContext(BlogPostContext);
  const onReact = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(blogData.id), () => {}, {
        data: { claps: blogData.claps + 1 },
      });
      updateBlogData(
        {
          ...blogData,
          claps: blogData.claps + 1,
        },
        allBlogData,
        setAllBlogData
      );
    } catch (e) {
      //
    }
  };
  const onLike = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(blogData.id), () => {}, {
        data: { liked: !blogData.liked },
      });
      updateBlogData(
        {
          ...blogData,
          liked: !blogData.liked,
        },
        allBlogData,
        setAllBlogData
      );
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
      <Reactions
        onReact={onReact}
        count={blogData.claps}
        onLike={onLike}
        liked={blogData.liked}
      />
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
