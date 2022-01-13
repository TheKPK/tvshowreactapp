import React from 'react';

function Loader(props) {
  const spinner="spinner.gif"

  return (
    <div className="loader">
      <img src={spinner} alt="Loading..."/>
    </div>
  );
}

export default Loader;