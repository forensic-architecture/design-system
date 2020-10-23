import React, { useRef, useEffect, createRef } from "react";

import { Card } from "../Card/Card.React.js";
import copy from "../../data/copy.json";
import { scrollToElement } from "../../utils";

export const CardStack = ({
  isCardstack = true,
  isLoading = false,
  language = `en-US`,
  narrative = null,
  onHighlight = () => {},
  onSelect = () => {},
  onToggleCardstack = () => {},
  onViewSource = () => {},
  timelineDims = {
    height: 250,
    width: 0,
    marginLeft: 100,
    marginTop: 15,
    marginBottom: 60,
    contentHeight: 200,
    width_controls: 100,
  },
  selected = null,
  sourceError = false,
}) => {
  const refs = useRef([]);
  const refCardStack = useRef();
  const refCardStackContent = useRef();

  // this.refs = {};
  // this.refCardStack = React.createRef();
  // this.refCardStackContent = React.createRef();

  useEffect(() => {
    const isNarrative = !!narrative;
    if (isNarrative) {
      scrollToElement({
        from: refs[narrative.current].current.offsetTop,
        to: refCardStack.current,
        duration: 500,
      });
    }
  }, [narrative]);

  useEffect(() => {}, [selected]);

  const renderCards = (events, selections) => {
    // if no selections provided, select all
    if (!selections) {
      selections = events.map((e) => true);
    }
    refs.current = [];

    return events.map((event, idx) => {
      const cardRef = createRef();
      refs.current[idx] = cardRef;

      // TODO do we need to pass the get*() funcs to the Card?
      return (
        <Card
          key={`card-stack-iten-${idx}`}
          event={event}
          ref={cardRef}
          sourceError={sourceError}
          language={language}
          isLoading={isLoading}
          isSelected={selections[idx]}
          onViewSource={onViewSource}
          onHighlight={onHighlight}
          onSelect={onSelect}
          idx={idx}
          inlineMedia={event?.sources[0]?.paths}
        />
      );
    });
  };

  const renderSelectedCards = () => {
    return selected.length > 0 ? renderCards(selected) : null;
  };

  const renderNarrativeCards = () => {
    const showing = narrative.steps;

    const selections = showing.map((_, idx) => idx === narrative.current);

    return renderCards(showing, selections);
  };

  const renderCardStackHeader = () => {
    const headerLang = copy[language].cardstack.header;

    return (
      <div
        id="card-stack-header"
        className="card-stack-header"
        onClick={() => onToggleCardstack()}
      >
        <button className="side-menu-burg is-active">
          <span />
        </button>
        <p className="header-copy top">{`${selected.length} ${headerLang}`}</p>
      </div>
    );
  };

  const renderCardStackContent = () => {
    return (
      <div id="card-stack-content" className="card-stack-content">
        <ul>{renderSelectedCards()}</ul>
      </div>
    );
  };

  const renderNarrativeContent = () => {
    return (
      <div
        id="card-stack-content"
        className="card-stack-content"
        ref={refCardStackContent}
      >
        <ul>{renderNarrativeCards()}</ul>
      </div>
    );
  };

  const render = () => {
    // TODO: make '237px', which is the narrative header, less hard-coded
    const height = `calc(100% - 237px - ${timelineDims.height}px)`;
    if (selected?.length > 0) {
      if (!narrative) {
        return (
          <div
            id="card-stack"
            className={`card-stack
            ${isCardstack ? "" : " folded"}`}
          >
            {renderCardStackHeader()}
            {renderCardStackContent()}
          </div>
        );
      } else {
        return (
          <div
            id="card-stack"
            ref={refCardStack}
            className={`card-stack narrative-mode
            ${isCardstack ? "" : " folded"}`}
            style={{ height }}
          >
            {renderNarrativeContent()}
          </div>
        );
      }
    }

    return <div />;
  };

  return <>{render()}</>;
};
