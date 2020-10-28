import React, { useState } from "react";

import CardText from "./atoms/Text";
import CardTime from "./atoms/Time";
import CardButton from "./atoms/Button";
import CardCaret from "./atoms/Caret";
import CardCustom from "./atoms/CustomField";

import copy from "../../data/copy.json";
import { makeNiceDate, isEmptyString } from "../../utils";

export const Card = ({
  content = [],
  isLoading = true,
  onSelect = () => {},
  sources = [],
  isSelected = false,
  language = "en-US",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // NB: should be internationalized.
  const renderTime = (field) => (
    <CardTime
      language={language}
      timelabel={makeNiceDate(field.value)}
      {...field}
    />
  );

  const renderCaret = () =>
    sources.length === 0 && (
      <CardCaret toggle={() => toggle()} isOpen={isOpen} />
    );

  function renderField(field) {
    switch (field.kind) {
      case "media":
        return null;
      case "line":
        return (
          <div style={{ height: `1rem`, width: `100%` }}>
            <hr />
          </div>
        );
      case "line-break":
        return (
          <div style={{ height: `${field.times || 1}rem`, width: `100%` }} />
        );
      case "item":
        // this is like a span
        return null;
      case "markdown":
        return <CardCustom {...field} />;
      case "tag":
        return (
          <div
            className="card-cell m0"
            style={{
              textTransform: `uppercase`,
              fontSize: `.8em`,
              lineHeight: `.8em`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: `flex-${field.align || `start`}`,
              }}
            >
              {field.value}
            </div>
          </div>
        );
      case "button":
        return (
          <div className="card-cell">
            {field.title && <h4>{field.title}</h4>}
            {/* <div className="card-row"> */}
            {field.value.map((t, idx) => (
              <CardButton key={`card-button-${idx}`} {...t} />
            ))}
            {/* </div> */}
          </div>
        );
      case "text":
        return !isEmptyString(field.value) && <CardText {...field} />;
      case "date":
        return renderTime(field);
      case "links":
        return (
          <div className="card-cell">
            {field.title && <h4>{field.title}</h4>}
            <div className="card-row m0">
              {field.value.map(({ text, href }, idx) => (
                <a href={href} key={`card-links-url-${idx}`}>
                  {text}
                </a>
              ))}
            </div>
          </div>
        );
      case "list":
        // Only render if some of the list's strings are non-empty
        const shouldFieldRender =
          !!field.value.length &&
          !!field.value.filter((s) => !isEmptyString(s)).length;
        return shouldFieldRender ? (
          // <div className="card-cell">
          <div>
            {field.title && <h4>{field.title}</h4>}
            <div className="card-row m0">
              {field.value.map((t, idx) => (
                <CardText key={`card-list-text-${idx}`} value={t} {...t} />
              ))}
            </div>
          </div>
        ) : null;
      default:
        return null;
    }
  }

  function renderRow(row) {
    return (
      <div className="card-row">
        {row.map((field) => (
          <>{renderField(field)}</>
        ))}
      </div>
    );
  }

  // TODO: render afterCaret appropriately from props
  sources = [];

  return (
    <li
      className={`event-card ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      {content.map((row) => renderRow(row))}
      {isOpen && (
        <div className="card-bottomhalf">
          {sources.map((row) => (
            <div className="card-row"></div>
          ))}
        </div>
      )}
      {sources.length > 0 ? renderCaret() : null}
    </li>
  );
};
