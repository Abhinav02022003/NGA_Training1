import React from 'react';

const RenderPropsComponent = ({ render }) => {
  return (
    <div className="render-box">
      {render()}
    </div>
  );
};

export default RenderPropsComponent;
