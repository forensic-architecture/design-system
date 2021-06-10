import React, { useRef } from "react";
import { useCallback } from "react";
import { typeForPath } from "../../../utils";

// TODO should videos
//    - play inline
//    - appear zoomed out/in
//    - only show cover image and then lightbox when clicked
//    - show video control plane?
// TODO landscape image doesn't fit in box properly
const Media = ({ src, title }) => {
  const videoRef = useRef();
  const onVideoStart = useCallback(() => {
    return videoRef.current?.play();
  }, []);
  const onVideoStop = useCallback(() => {
    return videoRef.current?.pause();
  }, []);

  const type = typeForPath(src);
  console.log(type, src);
  switch (type) {
    case "Video":
      return (
        <div className="card-cell media">
          {title && <h4>{title}</h4>}
          <video
            onMouseEnter={onVideoStart}
            onMouseLeave={onVideoStop}
            ref={videoRef}
            // controls
            // controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          >
            <source src={src} />
          </video>
        </div>
      );
    case "Image":
      return (
        <div className="card-cell media">
          {title && <h4>{title}</h4>}
          <div className="img-wrapper">
            <img
              src={src}
              alt="an inline photograph for the event card component"
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Media;
