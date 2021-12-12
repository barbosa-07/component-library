import React from "react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    type: {
      options: ["text", "password", "email", "number"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "default",
  name: "default",
  type: "text",
  placeholder: "type here...",
};
