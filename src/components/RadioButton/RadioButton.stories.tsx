import React from 'react';
import { Story, Meta } from '@storybook/react'

import RadioButton, { Props } from './';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
} as Meta;

const Template: Story<Props> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = {
    checked: true
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
};

  