import React from "react";

import { Button } from "./Button";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    type: {
      options: ["primary", "outlined", "danger"],
      control: { type: "radio" },
    },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: "",
  type: "",
  children: "default",
};
