import React from "react";
import { typeForPath } from "../../../utils";

const Media = ({ src }) => {
  const type = typeForPath(src);
  console.log(type, src);
  switch (type) {
    case "Video":
      return (
        <div className="card-cell media">
          <video
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          >
            <source src={src} />
          </video>
        </div>
      );
    case "Image":
      return (
        <img
          src={src}
          alt="an inline photograph for the event card component"
        />
      );
    default:
      return null;
  }
};

export default Media;
