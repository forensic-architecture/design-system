import React from "react";

import { Card } from "./Card.React";
import { CardProps } from "../../../test/Card";

const Template = (args) => <Card {...args} />;

const changeMediaSrc = (event, link) => ({
  ...event,
  sources: [
    {
      ...event.sources[0],
      paths: [link],
    },
    ...event.sources,
  ],
});

export const TextOnly = Template.bind({});
TextOnly.args = {
  ...CardProps,
  inlineMedia: false,
};

export const InlineVideoPortrait = Template.bind({});
InlineVideoPortrait.args = {
  ...CardProps,
  inlineMedia: true,
};

export const InlineVideoLandscape = Template.bind({});
InlineVideoLandscape.args = {
  ...CardProps,
  event: {
    ...changeMediaSrc(
      CardProps.event,
      `https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/114.mp4`
    ),
  },
  inlineMedia: true,
};

export const InlinePicturePortrait = Template.bind({});
InlinePicturePortrait.args = {
  ...CardProps,
  event: {
    ...changeMediaSrc(
      CardProps.event,
      `https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/118.jpg`
    ),
  },
  inlineMedia: true,
};

export const InlinePictureLandscape = Template.bind({});
InlinePictureLandscape.args = {
  ...CardProps,
  event: {
    ...changeMediaSrc(
      CardProps.event,
      `https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/143.jpg`
    ),
  },
  inlineMedia: true,
};

export default {
  title: "FA/Components/Card",
  component: Card,
  argTypes: {},
};
