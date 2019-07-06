import React from "react";

const Image = ({ imageSrc, imageAlt }) => {
  return (
    <div className="column">
      <div className="ui segment">
        <img className="ui fluid image" src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
};

export default Image;
