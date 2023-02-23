import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card';
import './MainBody.css';
import { GET_BLOG_DATA } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import { BlogPostContext } from '../../contexts/BlogPostContext';

const MainBody = () => {
  const { allBlogData, setAllBlogData } = useContext(BlogPostContext);
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_BLOG_DATA, navigate).then((response) => {
      setAllBlogData(response);
    });
  }, []);

  return (
    <main>
      {allBlogData ? (
        <div className="cards-container page-padding">
          {allBlogData.map((eachBlog) => (
            <Card key={eachBlog.id} blogData={eachBlog} />
          ))}
        </div>
      ) : (
        <div className="blogDataLoader">
          <p>Loading....</p>
        </div>
      )}
    </main>
  );
};

export default MainBody;
