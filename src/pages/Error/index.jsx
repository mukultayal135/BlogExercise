import React from 'react';
import { useParams } from 'react-router-dom';
import { Footer, Header } from '../../components';
import './error.css';

const Error = () => {
  const { errorCode } = useParams();
  return (
    <div className="error-page">
      <Header />
      <div className="error-container">
        <p>Something went wrong!!</p>
        {errorCode && <p>Error Code: {errorCode}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Error;
