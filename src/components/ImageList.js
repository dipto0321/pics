import React from "react";
import Image from "./Image";

const ImageList = ({ images }) => {
  const imagesList = images.map(({ urls, alt_description, id }) => {
    return (
      <Image imageSrc={urls.regular} ImageAlt={alt_description} key={id} />
    );
  });

  return <div className="ui five column grid">{imagesList}</div>;
};

export default ImageList;
