import React from "react";
import { Button, Card } from "fa-design-system/react";
// import "fa-design-system/dist/index.css";

// import logo from "./logo.svg";
import "./App.css";

const props = {
  innerRef: {
    // current: "<li />",
  },
  event: {
    associations: ["Tear gas", "Confirmed Press", "Focus", "Journalist"],
    sources: {
      paths: [
        "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/42.mp4",
      ],
      id: "source42",
      title: "David Sachs - CPR News",
      type: "",
      description:
        "A police officer shoves Sachs after he showed him his press pass. The police then fire tear gas, and Sachs is caught up in the cloud.",
      url: "https://twitter.com/DavidASachs/status/1266920122893156353",
    },
    description:
      "A police officer shoves Sachs after he showed him his press pass. The police then fire tear gas, and Sachs is caught up in the cloud.",
    date: "05/30/2020",
    time: "18:31",
    location: "Denver, CO",
    latitude: "39.73843",
    longitude: "-104.98614",
    category: "Press attack",
    colour: "#F7D4BC",
    journalist_name: "David Sachs",
    news_organisation: "CPR News",
    id: 40,
    datetime: "",
  },
  sourceError: null,
  language: "en-US",
  isLoading: false,
  isSelected: true,
  // getCategoryColor: "ƒ bound getCategoryColor() {}",
  // onViewSource: "ƒ bound handleViewSource() {}",
  // onHighlight: "ƒ bound handleHighlight() {}",
  // onSelect: "ƒ onSelect() {}",
  features: {
    USE_CATEGORIES: true,
    CATEGORIES_AS_FILTERS: false,
    USE_ASSOCIATIONS: true,
    USE_SOURCES: true,
    USE_COVER: true,
    USE_SEARCH: false,
    USE_SITES: false,
    NARRATIVE_STEP_STYLES: false,
    CUSTOM_EVENT_FIELDS: [
      {
        key: "journalist_name",
        title: "Name of reporter/s",
        icon: "face",
        kind: "text",
      },
      {
        key: "news_organisation",
        title: "Network",
        icon: "business",
        kind: "text",
      },
    ],
    CUSTOM_SOURCE_FIELDS: [
      {
        key: "twitter_source",
        title: "Twitter handle for source",
        icon: "article",
        kind: "link",
      },
    ],
    USE_SHAPES: false,
    GRAPH_NONLOCATED: false,
    HIGHLIGHT_GROUPS: false,
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3>Forensic Architecture — Design System</h3>
        <p>
          Test that our locally-linked <code>design-system</code> NPM package,
          correctly retrieves components
        </p>
        <Button primary label={"Button"} />
        <Card {...props} />
      </header>
    </div>
  );
}

export default App;
