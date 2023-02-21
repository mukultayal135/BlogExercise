import React from 'react';
import Card from '../Card';
import PostData from '../../assets/index.json';
import './MainBody.css';

const MainBody = () => {
  return (
    <main>
      <div className="cards-container page-padding">
        {PostData.map((data) => (
          <Card
            key={data.title}
            title={data.title}
            initialClaps={data.claps}
            img={data.image}
            date={data.date}
            readingTime={data.readingTime}
            description={data.description}
          />
        ))}
      </div>
    </main>
  );
};

export default MainBody;
