import React from "react";

// import PropTypes from "prop-types";

import CardCustomField from "./atoms/CustomField";
import CardTime from "./atoms/Time";
import CardLocation from "./atoms/Location";
import CardCaret from "./atoms/Caret";
import CardSummary from "./atoms/Summary";
import CardSource from "./atoms/Source";

import copy from "../../data/copy.json";
import { makeNiceDate } from "../../utils";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    console.log(props);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  makeTimelabel(datetime) {
    return makeNiceDate(datetime);
  }

  renderSummary() {
    return (
      <CardSummary
        language={this.props.language}
        description={this.props.event.description}
        isOpen={this.state.isOpen}
      />
    );
  }

  renderLocation() {
    return (
      <CardLocation
        language={this.props.language}
        location={this.props.event.location}
        isPrecise={
          !this.props.event.type || this.props.event.type === "Structure"
        }
      />
    );
  }

  renderSources() {
    if (this.props.sourceError) {
      return <div>ERROR: something went wrong loading sources, TODO:</div>;
    }

    const sourceLang = copy[this.props.language].cardstack.sources;
    return (
      <div className="card-col">
        <h4>{sourceLang}: </h4>
        {this.props.event.sources.map((source) => (
          <CardSource
            isLoading={this.props.isLoading}
            source={source}
            onClickHandler={(source) => this.props.onViewSource(source)}
          />
        ))}
      </div>
    );
  }

  // NB: should be internaionalized.
  renderTime() {
    let timelabel = this.makeTimelabel(this.props.event.datetime);

    return (
      <CardTime
        makeTimelabel={timelabel}
        language={this.props.language}
        timelabel={timelabel}
      />
    );
  }

  renderCustomFields() {
    return this.props.features.CUSTOM_EVENT_FIELDS.map((field) => {
      const value = this.props.event[field.key];
      return value ? (
        <CardCustomField field={field} value={this.props.event[field.key]} />
      ) : null;
    });
  }

  renderMain() {
    // return null;
    return (
      <div className="card-container">
        <div className="card-row details">
          {this.renderTime()}
          {this.renderLocation()}
        </div>
        {this.renderSummary()}
        {this.renderCustomFields()}
      </div>
    );
  }

  renderExtra() {
    return <div className="card-bottomhalf">{this.renderSources()}</div>;
  }

  renderCaret() {
    return this.props.features.USE_SOURCES ? (
      <CardCaret toggle={() => this.toggle()} isOpen={this.state.isOpen} />
    ) : null;
  }

  render() {
    const { isSelected, idx } = this.props;

    return (
      <li
        className={`event-card ${isSelected ? "selected" : ""}`}
        id={`event-card-${idx}`}
        ref={this.props.innerRef}
        onClick={this.props.onSelect}
      >
        {this.renderMain()}
        {this.state.isOpen ? this.renderExtra() : null}
        {isSelected ? this.renderCaret() : null}
      </li>
    );
  }
}

// Card.propTypes = {
//   language,
//   event: {
//     description,
//     location,
//     time,
//     sources,
//     datetime
//   },
//   features,
//   onSelect,
//   innerRef
// }

// The ref to each card will be used in CardStack for programmatic scrolling
// export default Card;
// export default React.forwardRef((props, ref) => (
//   <Card innerRef={ref} {...props} />
// ));
