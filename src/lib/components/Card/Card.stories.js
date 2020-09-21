import React from "react";

import { Card } from "./Card.React";
import { CardProps } from "../../../test/Card";

const Template = (args) => <Card {...args} />;

export const TextOnly = Template.bind({});
TextOnly.args = {
  ...CardProps,
};

export default {
  title: "FA/Components/Card",
  component: Card,
  argTypes: {},
};
