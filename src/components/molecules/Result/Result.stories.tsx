// Libraries
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CloseCircleOutlined, SmileOutlined } from '@ant-design/icons';

// Components
import { Result } from './Result';
import { Button, Typography } from '../../atoms';

const { Paragraph, Text } = Typography;

export default {
  title: 'Molecules/Result',
  component: Result,
  argTypes: {
    extra: {
      name: 'extra',
      description: 'Operating area	',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: null,
    },
    icon: {
      name: 'icon',
      description: 'Custom back icon	',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: null,
    },
    status: {
      name: 'status',
      description: 'Result status, decide icons and colors	',
      table: {
        type: { summary: 'success | error | info | warning | 404 | 403 | 500' },
        defaultValue: { summary: 'info' },
      },
      control: 'select',
      options: ['success', 'error', 'warning', '404', '403', '500', 'info'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'To trigger an operation.',
      },
    },
  },
} as ComponentMeta<typeof Result>;

// Default
const Template: ComponentStory<typeof Result> = args => (
  <Result
    title="Your operation has been executed"
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
    {...args}
  />
);

export const Basic = Template.bind({});

// Example

export const Error = () => (
  <Result
    status="error"
    title="Submission Failed"
    subTitle="Please check and modify the following information before resubmitting."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          The content you submitted has the following error:
        </Text>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been
        frozen. <a>Thaw immediately &gt;</a>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account is not yet
        eligible to apply. <a>Apply Unlock &gt;</a>
      </Paragraph>
    </div>
  </Result>
);

Error.parameters = {
  docs: {
    description: {
      story: 'Complex error feedback.',
    },
  },
};

export const CustomIcon = () => (
  <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />
);

CustomIcon.parameters = {
  docs: {
    description: {
      story: 'Custom icon.',
    },
  },
};
