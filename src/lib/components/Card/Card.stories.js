import React from "react";

import { Card } from "./Card.React";

const props = {
  event: {
    associations: ["Tear gas", "Confirmed Press", "Focus", "Journalist"],
    sources: [
      {
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
    ],
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
    datetime: new Date(),
  },
  sourceError: null,
  language: "en-US",
  isLoading: false,
  isSelected: true,
  features: {
    USE_SOURCES: true,
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
  },
};

const Template = (args) => <Card {...args} />;

export const Card1 = Template.bind({});
Card1.args = {
  ...props,
};

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {},
};
