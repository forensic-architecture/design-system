import React from "react";

import { Card } from "./Card.React";
import { generateCardLayout } from "../../templates";
import { ProtestsCardProps, YemenCardProps } from "../../../test/Card";

const Template = (args) => <Card {...args} />;

export const TextOnly = Template.bind({});
TextOnly.args = {
  ...ProtestsCardProps,
};

const addInlineMedia = (props, media) => {
  return {
    ...props,
    content: [...props.content, [{ kind: "media", value: media }]],
  };
};

export const BasicLayoutTemplate = Template.bind({});
BasicLayoutTemplate.args = {
  content: generateCardLayout["basic"]({
    event: {
      datetime: new Date(),
      location: `Somewhere`,
      description: `Something happened`,
    },
  }),
};

export const InlineVideoPortrait = Template.bind({});
InlineVideoPortrait.args = {
  ...addInlineMedia(
    ProtestsCardProps,
    [
      {
        title: "Mock Title 1",
        src: "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/114.mp4"
      },
      {
        title: "Mock Title 2",
        src: "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/114.mp4"
      },
      {
        title: "Mock Title 3",
        src: "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/114.mp4"
      },
    ]
  )
};

export const InlinePicturePortrait = Template.bind({});
InlinePicturePortrait.args = {
  ...addInlineMedia(
    ProtestsCardProps,
    [
      {
        title: "Mock Title",
        src: "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/118.jpg"
      }
    ]
  ),
};

export const InlinePictureLandscape = Template.bind({});
InlinePictureLandscape.args = {
  ...addInlineMedia(
    ProtestsCardProps,
    [
      {
        title: "Mock Title",
        src: "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/143.jpg"
      }
    ]
  ),
};

export const SampleProject = Template.bind({});
SampleProject.args = {
  ...addInlineMedia(
    YemenCardProps,
    [
      {
        title: "Mock Title",
        src: "https://datasheet-sources.ams3.cdn.digitaloceanspaces.com/us2020/114.mp4"
      }
    ]
  )
};

export default {
  title: "FA/Components/Card",
  component: Card,
  argTypes: {},
};
