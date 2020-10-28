import React, { useState } from "react";

import CardCustomField from "./atoms/CustomField";
import CardTime from "./atoms/Time";
import { CardLocation, CardLocationPrecision } from "./atoms/Location";
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
  isLoading = true,
  isSelected = false,
  language = ``,
  renderOrder = [
    [`renderTime`, `renderLocation`],
    [`renderSummary`],
    [`renderCustomFields`],
  ],
  renderExtra = [[`renderSources`]],
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

  const renderLocationPrecision = () => {
    return <CardLocationPrecision type={event["location_precision"]} />;
  };

  const renderNetwork = () => {
    return (
      // <div className="card-col">
      event["news_organisation"] && (
        <div className="card-cell">
          <>
            <h4>Network</h4>
            {event["news_organisation"]}
          </>
        </div>
      )
    );
  };

  const renderReporter = () => {
    return (
      // <div className="card-col">
      event["journalist_name"] && (
        <div className="card-cell">
          <>
            <h4>Name of Reporter/s</h4>
            {event["journalist_name"]}
          </>
        </div>
      )
    );
  };

  // TODO make boolean in backend
  // TODO Add source URL
  const renderUSProtestsSource = () => {
    return (
      <>
        <h4>Source</h4>
        <div>
          {event["hide_source"] === `TRUE` ? (
            <span>
              Source hidden to protect the privacy and dignity of civilians.
              Read more{" "}
              <a href="https://staging.forensic-architecture.org/wp-content/uploads/2020/09/2020.14.09-FA-Bcat-Mission-Statement.pdf">
                here
              </a>
            </span>
          ) : (
            <span>TODO: Add source URL</span>
          )}
        </div>
      </>
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

  // NB: should be internationalized.
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

  const renderAssociations = () => {
    return (
      <div>
        <h4>Type of violation</h4>
        <span>{event.associations.join(" / ")}</span>
      </div>
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

  const renderContextual = () => (
    <>
      {renderTime()}
      {renderLocation()}
    </>
  );

  // const renderMain = () => {
  //   // return null;
  //   return (
  //     <>
  //       {renderContextual()}
  //       {/* <br /> */}
  //       {renderSummary()}
  //       {renderCustomFields()}
  //     </>
  //   );
  // };

  // const renderExtra = () => {
  //   return <div className="card-bottomhalf">{renderSources()}</div>;
  // };

  const renderCaret = () =>
    useSources && <CardCaret toggle={() => toggle()} isOpen={isOpen} />;

  const renderMedia = (fn = []) => {
    return <CardMedia src={event.sources[0].paths[0]} />;
  };

  // TODO make renderList and renderListInline curried functions
  const renderLawEnforcementAgencies = () => {
    return event["le_agencys"].length ? (
      <div>
        <h4>Law Enforcement Agencies</h4>
        {event["le_agencys"].map((item, idx) => (
          <div key={`le_agencies_${idx}`}>{item}</div>
        ))}
      </div>
    ) : null;
  };

  const renderFunctions = {
    // renderIncidentId,
    renderAssociations,
    renderCustomFields,
    renderContextual,
    renderLawEnforcementAgencies,
    renderLocation,
    renderLocationPrecision,
    renderMedia,
    renderNetwork,
    renderReporter,
    renderUSProtestsSource,
    renderSources,
    renderSummary,
    renderTime,
  };

  return (
    <li
      className={`event-card ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      {renderOrder.map((row) => (
        <div className="card-row">{row.map((f) => renderFunctions[f]())}</div>
      ))}
      {isOpen && (
        <div className="card-bottomhalf">
          {renderExtra.map((row) => (
            <div className="card-row">
              {row.map((f) => renderFunctions[f]())}
            </div>
          ))}
        </div>
      )}
      {isSelected && renderExtra.length ? renderCaret() : null}
    </li>
  );
};
