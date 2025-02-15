import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './button.component';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args: Button) => ({
  component: Button,
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  text: 'Button',
  onClick: action('onClick'),
};

export const Emoji = Template.bind({});
Emoji.args = {
  text: '😀 😎 👍 💯',
};

Emoji.parameters = { notes: 'My notes on a button with emojis' };

export const TextWithAction = () => ({
  component: Button,
  props: {
    text: 'Trigger Action',
    onClick: () => action('This was clicked')(),
  },
});

TextWithAction.storyName = 'With an action';
TextWithAction.parameters = { notes: 'My notes on a button with emojis' };

export const ButtonWithLinkToAnotherStory = () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('example-introduction--page'),
  },
});

ButtonWithLinkToAnotherStory.storyName = 'button with link to another story';
