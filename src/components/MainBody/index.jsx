import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card';
import './MainBody.css';
import { GET_BLOG_DATA } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

const MainBody = () => {
  const [blogData, setBlogData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_BLOG_DATA, navigate).then((response) => {
      setBlogData(response);
    });
  }, []);

  return (
    <main>
      {blogData ? (
        <div className="cards-container page-padding">
          {blogData.map((eachBlog) => (
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
