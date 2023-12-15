// Libraries
import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LikeOutlined, ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

// Components
import { Statistic } from './Statistic';
import { Row, Col, Button } from '../index';
import { Card } from '../../molecules';
import { CountdownProps } from 'antd';

export default {
  title: 'Atoms/Statistic',
  component: Statistic,
  argTypes: {
    decimalSeparator: {
      name: 'decimalSeparator',
      description: 'The decimal separator	',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '.' },
      },
      control: null,
    },
    formatter: {
      name: 'formatter',
      description: 'Customize value display logic	',
      table: {
        type: { summary: '(value) => ReactNode	' },
      },
      control: null,
    },
    groupSeparator: {
      name: 'groupSeparator',
      description: 'Group separator',
      table: {
        type: { summary: 'string' },
      },
      control: null,
    },
    loading: {
      name: 'loading',
      description: 'Loading status of Statistic	',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    precision: {
      name: 'precision',
      description: 'The precision of input value	',
      table: {
        type: { summary: 'number' },
      },
      control: null,
    },
    prefix: {
      name: 'prefix',
      description: 'The prefix node of value	',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: null,
    },
    title: {
      name: 'title',
      description: 'Display title	',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: null,
    },
    value: {
      name: 'value',
      description: 'Display title	',
      table: {
        type: { summary: 'string | number	' },
      },
      control: null,
    },
    valueStyle: {
      name: 'value',
      description: 'Set value section style',
      table: {
        type: { summary: 'CSSProperties' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'To trigger an operation.',
      },
    },
  },
} as ComponentMeta<typeof Statistic>;

// Default
const Template: ComponentStory<typeof Statistic> = args => <Statistic {...args} />;

export const Default = Template.bind({});

// Examples
export const Basic = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={1} />
      <Button style={{ marginTop: 16 }} type="primary">
        Recharge
      </Button>
    </Col>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} loading />
    </Col>
  </Row>
);

Basic.parameters = {
  docs: {
    description: {
      story: 'Simplest Usage.',
    },
  },
};

export const Unit = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
    </Col>
    <Col span={12}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
    </Col>
  </Row>
);

Unit.parameters = {
  docs: {
    description: {
      story: 'Add unit through `prefix` and `suffix`.',
    },
  },
};
const useCountUp = (initialCount = 0, step = 1, delay = 1000, stopValue) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount + step;
        if (newCount >= stopValue) {
          clearInterval(interval);
          return stopValue;
        }
        return newCount;
      });
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [step, delay, stopValue]);

  return count;
};

export const ActiveNumber = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={useCountUp(0, 10013, 1000, 11196)} />
    </Col>
    <Col span={12}>
      <Statistic
        title="Account Balance (CNY)"
        value={useCountUp(0, 50000, 1000, 112893)}
        precision={2}
      />
    </Col>
  </Row>
);

export const InCard = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{ color: '#3f8600' }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{ color: '#cf1322' }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
);

InCard.parameters = {
  docs: {
    description: {
      story: 'Display statistic data in Card.',
    },
  },
};

export const CountDown = () => {
  const { Countdown } = Statistic;

  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  const onFinish: CountdownProps['onFinish'] = () => {
    console.log('finished!');
  };

  const onChange: CountdownProps['onChange'] = val => {
    if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!');
    }
  };
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
      </Col>
      <Col span={12}>
        <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
      </Col>
      <Col span={24} style={{ marginTop: 32 }}>
        <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
      </Col>
      <Col span={12}>
        <Countdown title="Countdown" value={Date.now() + 10 * 1000} onChange={onChange} />
      </Col>
    </Row>
  );
};

CountDown.parameters = {
  docs: {
    description: {
      story: 'Countdown component.',
    },
  },
};
