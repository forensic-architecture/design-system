import React, { useState } from "react";

import CardText from "./atoms/Text";
import CardTime from "./atoms/Time";
import { CardLocation, CardLocationPrecision } from "./atoms/Location";
import CardCaret from "./atoms/Caret";
import CardSummary from "./atoms/Summary";
import CardSource from "./atoms/Source";
import CardMedia from "./atoms/Media";

import copy from "../../data/copy.json";
import { makeNiceDate } from "../../utils";

export const Card = ({
  content = [],
  isLoading = true,
  onSelect = () => {},
  sources = [],
  isSelected = false,
  language = "en-US"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // NB: should be internationalized.
  const renderTime = field => (
    <CardTime
      language={language}
      timelabel={makeNiceDate(field.value)}
    />
  );

  const renderCaret = () =>
    sources.length === 0 && <CardCaret toggle={() => toggle()} isOpen={isOpen} />;

  function renderField(field) {
    switch (field.kind) {
      case 'text':
        return <CardText {...field} />
      case 'date':
        return renderTime(field)
      case 'list':
        return <div className='card-cell'>
          {field.title && <h4>{field.title}</h4>}
          <div className='card-row m0'>
          {field.value.map(t => <CardText value={t} />)}
          </div>
        </div>
      default:
        return null
    }
  }

  function renderRow(row) {
    return row.map(field => <div className="card-row">{renderField(field)}</div>)
  }

  // TODO: render afterCaret appropriately from props
  sources = []

  return (
    <li
      className={`event-card ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      {content.map(row => renderRow(row))}
      {isOpen && (
        <div className="card-bottomhalf">
          {sources.map((row) => (
            <div className="card-row">

            </div>
          ))}
        </div>
      )}
      {sources.length > 0 ? renderCaret() : null}
    </li>
  );
};
