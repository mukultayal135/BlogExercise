import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const BlogPostContext = createContext();

export const BlogPostProvider = ({ children }) => {
  const [allBlogData, setAllBlogData] = useState();
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <BlogPostContext.Provider value={{ allBlogData, setAllBlogData }}>
      {children}
    </BlogPostContext.Provider>
  );
};

BlogPostProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
