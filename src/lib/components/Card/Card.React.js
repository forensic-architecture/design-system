import React, { useState } from "react";

import CardCustomField from "./atoms/CustomField";
import CardTime from "./atoms/Time";
import CardLocation from "./atoms/Location";
import CardCaret from "./atoms/Caret";
import CardSummary from "./atoms/Summary";
import CardSource from "./atoms/Source";
import CardMedia from "./atoms/Media";

import copy from "../../data/copy.json";
import { makeNiceDate } from "../../utils";

export const Card = ({
  customEventFields = [],
  event = {
    datetime: ``,
    description: ``,
    location: ``,
    type: ``,
    sources: [],
  },
  inlineMedia = false,
  isLoading = true,
  isSelected = false,
  language = ``,
  onSelect = () => {},
  onViewSource = () => {},
  sourceError = false,
  useSources = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const renderSummary = () => {
    return (
      <CardSummary
        language={language}
        description={event.description}
        isOpen={isOpen}
      />
    );
  };

  const renderLocation = () => {
    return (
      <CardLocation
        language={language}
        location={event.location}
        isPrecise={!event.type || event.type === "Structure"}
      />
    );
  };

  const renderSources = () => {
    if (sourceError) {
      return <div>ERROR: something went wrong loading sources, TODO:</div>;
    }

    const sourceLang = copy[language].cardstack.sources;
    return (
      <div className="card-col">
        <h4>{sourceLang}: </h4>
        {event.sources.map((source) => (
          <CardSource
            isLoading={isLoading}
            source={source}
            onClickHandler={(source) => onViewSource(source)}
          />
        ))}
      </div>
    );
  };

  // NB: should be internaionalized.
  const renderTime = () => {
    let timelabel = makeNiceDate(event.datetime);

    return (
      <CardTime
        makeTimelabel={timelabel}
        language={language}
        timelabel={timelabel}
      />
    );
  };

  const renderCustomFields = () => {
    return customEventFields.map((field) => {
      const value = event[field.key];
      return value ? (
        <CardCustomField field={field} value={event[field.key]} />
      ) : null;
    });
  };

  const renderMain = () => {
    // return null;
    return (
      <>
        <div className="card-row">
          {renderTime()}
          {renderLocation()}
        </div>
        {/* <br /> */}
        {renderSummary()}
        {renderCustomFields()}
      </>
    );
  };

  const renderExtra = () => {
    return <div className="card-bottomhalf">{renderSources()}</div>;
  };

  const renderCaret = () => {
    return useSources ? (
      <CardCaret toggle={() => toggle()} isOpen={isOpen} />
    ) : null;
  };

  const renderText = () => {
    return (
      <>
        {renderMain()}
        {isOpen && renderExtra()}
        {isSelected ? renderCaret() : null}
      </>
    );
  };

  const renderMedia = () => {
    return (
      <>
        {true && <CardMedia src={event.sources[0].paths[0]} />}
        <div className="card-row">text</div>
      </>
    );
  };

  return (
    <li
      className={`event-card ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      {inlineMedia ? renderMedia() : renderText()}
    </li>
  );
};
