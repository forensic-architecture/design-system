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
};

// export const InlineVideoPortrait = Template.bind({});
// InlineVideoPortrait.args = {
//   ...CardProps,
//   renderOrder: [[`renderContextual`], [`renderMedia`], [`renderSummary`]],
//   renderExtra: [],
// };
//
// export const InlineVideoLandscape = Template.bind({});
// InlineVideoLandscape.args = {
//   ...CardProps,
//   renderOrder: [[`renderContextual`], [`renderMedia`], [`renderSummary`]],
//   renderExtra: [],
//   event: {
//     ...changeMediaSrc(
//       CardProps.event,
//       `https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/114.mp4`
//     ),
//   },
// };
//
// export const InlinePicturePortrait = Template.bind({});
// InlinePicturePortrait.args = {
//   ...CardProps,
//   renderOrder: [[`renderContextual`], [`renderMedia`], [`renderSummary`]],
//   renderExtra: [],
//   event: {
//     ...changeMediaSrc(
//       CardProps.event,
//       `https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/118.jpg`
//     ),
//   },
// };
//
// export const InlinePictureLandscape = Template.bind({});
// InlinePictureLandscape.args = {
//   ...CardProps,
//   renderOrder: [[`renderContextual`], [`renderMedia`], [`renderSummary`]],
//   renderExtra: [],
//   event: {
//     ...changeMediaSrc(
//       CardProps.event,
//       `https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/143.jpg`
//     ),
//   },
// };

export default {
  title: "FA/Components/Card",
  component: Card,
  argTypes: {},
};
