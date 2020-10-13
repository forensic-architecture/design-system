import React from "react";

import { CardStack } from "./CardStack.React";
import { CardStackProps } from "../../../test/CardStack";

const Template = (args) => <CardStack {...args} />;

export const CardStack1 = Template.bind({});
CardStack1.args = {
  ...CardStackProps,
};

export default {
  title: "FA/Components/Card Stack",
  component: CardStack,
  argTypes: {},
};
