import React from "react";

import { Card } from "./Card.React";
import { CardProps } from "../../../test/Card";

const Template = (args) => <Card {...args} />;

export const TextOnly = Template.bind({});
TextOnly.args = {
  ...CardProps,
};

console.log(CardProps);

const addInlineMedia = (props, src) => {
  return {
    ...props,
    content: [...props.content, [{ kind: "media", src }]],
  };
};

export const InlineVideoPortrait = Template.bind({});
InlineVideoPortrait.args = {
  ...addInlineMedia(
    CardProps,
    "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/114.mp4"
  ),
};

export const InlinePicturePortrait = Template.bind({});
InlinePicturePortrait.args = {
  ...addInlineMedia(
    CardProps,
    "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/118.jpg"
  ),
};

export const InlinePictureLandscape = Template.bind({});
InlinePictureLandscape.args = {
  ...addInlineMedia(
    CardProps,
    "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/143.jpg"
  ),
};

export default {
  title: "FA/Components/Card",
  component: Card,
  argTypes: {},
};
