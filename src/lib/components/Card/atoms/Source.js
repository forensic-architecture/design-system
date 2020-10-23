import React from "react";

import { Spinner } from "../../../atoms/Spinner.React";
import { typeForPath } from "../../../utils";

const CardSource = ({ source, isLoading, onClickHandler }) => {
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
          <div>{source.title ? source.title : source.id}</div>
        </div>
      )}
    </div>
  );
};

export default CardSource;
