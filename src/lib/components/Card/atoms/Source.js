import React from "react";

import { Spinner } from "../../../atoms/Spinner.React";
import { typeForPath } from "../../../utils";

const CardSource = ({ source, isLoading, onClickHandler }) => {
  function sourceType(type) {
    switch (type) {
      case "Eyewitness Testimony":
        return "Eyewitness";
      case "Government Data":
        return "Gov";
      case "Satellite Imagery":
        return "Sat";
      case "Second-Hand Testimony":
        return "Testimony (2nd hand)";
      case "Video":
        return "Video";
      case "Photo":
        return "Pic";
      case "Photobook":
        return "Photo";
      case "Document":
        return "Doc";
      default:
        return "";
    }
  }

  if (!source) {
    return (
      <div className="card-source">
        <div>Error: this source was not found</div>
      </div>
    );
  }

  const isImgUrl = /\.(jpg|png)$/;
  let thumbnail = source.thumbnail;

  if (!thumbnail || thumbnail === "" || !thumbnail.match(isImgUrl)) {
    // default to first image in paths, null if no images
    const imgs = source.paths.filter((p) => p.match(isImgUrl));
    thumbnail = imgs.length > 0 ? imgs[0] : null;
  }

  if (source.type === "" && source.paths.length >= 1) {
    source.type = typeForPath(source.paths[0]);
  }

  return (
    <div className="card-source">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="source-row" onClick={() => onClickHandler(source)}>
          {thumbnail ? (
            <img
              className="source-icon"
              src={thumbnail}
              style={{ width: 30, height: 30 }}
              alt={"source icon thumbnail"}
            />
          ) : null}
          <div>
            <span className="source-type">{sourceType(source.type)} /</span>
            {source.title ? source.title : source.id}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardSource;
