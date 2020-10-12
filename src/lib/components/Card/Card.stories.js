import React from "react";

import { Card } from "./Card.React";
import { CardProps } from "../../../test/Card";

const Template = (args) => <Card {...args} />;

export const TextOnly = Template.bind({});
TextOnly.args = {
  ...CardProps,
  inlineMedia: false,
};

export const InlineMedia = Template.bind({});
InlineMedia.args = {
  ...CardProps,
  inlineMedia: true,
};

export default {
  title: "FA/Components/Card",
  component: Card,
  argTypes: {},
};
