// Libraries
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { red, green } from '@ant-design/colors';

// Components
import { Progress } from './Progress';
import { Space, Button, Tooltip } from '../index';

// Constants

export default {
  title: 'Atoms/Progress',
  component: Progress,
  argTypes: {
    format: {
      name: 'format',
      description: 'The template function of the content	',
      table: {
        type: { summary: 'function(percent, successPercent)	' },
        defaultValue: { summary: '(percent) => percent + %	' },
      },
      control: {
        type: null,
      },
    },
    percent: {
      name: 'percent',
      defaultValue: 0,
      description: 'To set the completion percentage		',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
      control: {
        type: 'number',
      },
    },
    showInfo: {
      name: 'showInfo',
      defaultValue: true,
      description: 'Whether to display the progress value and the status icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    status: {
      name: 'status',
      description:
        'To set the status of the Progress, options: `success` `exception` `normal` `active`(line only)',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'select',
        options: ['success', 'exception', 'normal', 'active'],
      },
    },
    strokeColor: {
      name: 'strokeColor',
      description: 'The color of progress bar',
      table: {
        type: { summary: 'string' },
      },
      control: null,
    },
    strokeLinecap: {
      name: 'strokeLinecap',
      description: 'To set the style of the progress linecap	',
      table: {
        type: { summary: 'round | butt | square, see `stroke-linecap`' },
        defaultValue: { summary: 'round' },
      },
      control: {
        type: 'select',
        options: ['round', 'butt', 'square'],
      },
    },
    success: {
      name: 'success',
      description: 'Configs of successfully progress bar	',
      table: {
        type: { summary: '{ percent: number, strokeColor: string }' },
      },
      control: null,
    },
    trailColor: {
      name: 'trailColor',
      description: 'The color of unfilled part	',
      table: {
        type: { summary: 'string' },
      },
      control: null,
    },
    type: {
      name: 'type',
      description: 'To set the type, options: `line` `circle` `dashboard`',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'line' },
      },
      control: {
        type: 'select',
        options: ['line', 'circle', 'dashboard'],
      },
    },
    size: {
      name: 'size',
      description: 'Progress size	',
      table: {
        type: { summary: 'number | [number | string, number] | "small" | "default"' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
        options: ['default', 'small'],
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Display the current progress of an operation flow.        ' +
          '\n### When To Use' +
          '\n' +
          'If it will take a long time to complete an operation, you can use `Progress` to show the current progress and status. ' +
          '\n' +
          '- When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds' +
          '\n' +
          '- When you need to display the completion percentage of an operation.' +
          '\n',
      },
    },
  },
} as ComponentMeta<typeof Progress>;

// Default
const Template: ComponentStory<typeof Progress> = args => <Progress {...args} />;

export const Default = Template.bind({});

export const ProgressBar = () => (
  <>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </>
);

ProgressBar.parameters = {
  docs: {
    description: {
      story: 'A standard progress bar.',
    },
  },
};

export const CircularProgressBar = () => (
  <Space wrap>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </Space>
);

CircularProgressBar.parameters = {
  docs: {
    description: {
      story: 'A circular progress bar.        ',
    },
  },
};

export const MiniSizeProgressBar = () => (
  <div style={{ width: 170 }}>
    <Progress percent={30} size="small" />
    <Progress percent={50} size="small" status="active" />
    <Progress percent={70} size="small" status="exception" />
    <Progress percent={100} size="small" />
  </div>
);

MiniSizeProgressBar.parameters = {
  docs: {
    description: {
      story: 'Appropriate for a narrow area.',
    },
  },
};

export const MiniSizeCircularBar = () => (
  <Space wrap>
    <Progress type="circle" percent={30} size={80} />
    <Progress type="circle" percent={70} size={80} status="exception" />
    <Progress type="circle" percent={100} size={80} />
  </Space>
);

MiniSizeCircularBar.parameters = {
  docs: {
    description: {
      story: 'A smaller circular progress bar.',
    },
  },
};

export const ResponsiveCircularProgressBar = () => (
  <>
    <Progress
      type="circle"
      trailColor="#e6f4ff"
      percent={60}
      strokeWidth={20}
      size={14}
      format={number => `进行中，已完成${number}%`}
    />
    <span style={{ marginLeft: 8 }}>代码发布</span>
  </>
);

ResponsiveCircularProgressBar.parameters = {
  docs: {
    description: {
      story:
        'Responsive circular progress bar. When `width` is smaller than 20, progress information will be displayed in Tooltip.',
    },
  },
};

export const Dynamic = () => {
  const [percent, setPercent] = useState<number>(0);

  const increase = () => {
    setPercent(prevPercent => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };

  const decline = () => {
    setPercent(prevPercent => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };

  return (
    <>
      <Progress percent={percent} />
      <Button.Group>
        <Button onClick={decline} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Button.Group>
    </>
  );
};

Dynamic.parameters = {
  docs: {
    description: {
      story: 'A dynamic progress bar is better.',
    },
  },
};

export const DynamicCircularProgressBar = () => {
  const [percent, setPercent] = useState<number>(0);

  const increase = () => {
    setPercent(prevPercent => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };

  const decline = () => {
    setPercent(prevPercent => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };

  return (
    <>
      <Progress type="circle" percent={percent} style={{ marginRight: 8 }} />
      <Button.Group>
        <Button onClick={decline} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Button.Group>
    </>
  );
};

DynamicCircularProgressBar.parameters = {
  docs: {
    description: {
      story: 'A dynamic progress bar is better.',
    },
  },
};

export const CustomTextFormat = () => (
  <Space wrap>
    <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
    <Progress type="circle" percent={100} format={() => 'Done'} />
  </Space>
);

CustomTextFormat.parameters = {
  docs: {
    description: {
      story: 'You can set a custom text by setting the format prop.',
    },
  },
};

export const Dashboard = () => (
  <Space wrap>
    <Progress type="dashboard" percent={75} />
    <Progress type="dashboard" percent={75} gapDegree={30} />
  </Space>
);

Dashboard.parameters = {
  docs: {
    description: {
      story:
        'By setting `type=dashboard`, you can get a dashboard style of progress easily. Modify `gapDegree` to set the degree of gap.',
    },
  },
};

export const StrokeLinecap = () => (
  <>
    <Progress strokeLinecap="butt" percent={75} />
    <Space wrap>
      <Progress strokeLinecap="butt" type="circle" percent={75} />
      <Progress strokeLinecap="butt" type="dashboard" percent={75} />
    </Space>
  </>
);

StrokeLinecap.parameters = {
  docs: {
    description: {
      story:
        'By setting `strokeLinecap="butt"`, you can change the linecaps from `round` to `butt`, see stroke-linecap for more information.',
    },
  },
};

export const ProgressBarWithSuccessSegment = () => (
  <>
    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress percent={60} success={{ percent: 30 }} />
    </Tooltip>
    <Space wrap>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress percent={60} success={{ percent: 30 }} type="circle" />
      </Tooltip>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress percent={60} success={{ percent: 30 }} type="dashboard" />
      </Tooltip>
    </Space>
  </>
);

ProgressBarWithSuccessSegment.parameters = {
  docs: {
    description: {
      story: 'Show several parts of progress with different status.',
    },
  },
};

export const CustomLineGradient = () => (
  <>
    <Progress percent={99.9} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
    <Progress percent={99.9} status="active" strokeColor={{ from: '#108ee9', to: '#87d068' }} />
    <Space wrap>
      <Progress type="circle" percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
      <Progress type="circle" percent={100} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
    </Space>
  </>
);

CustomLineGradient.parameters = {
  docs: {
    description: {
      story: 'A package of `linear-gradient`. It is recommended to only pass two colors.',
    },
  },
};

export const ProgressBarWithSteps = () => (
  <>
    <Progress percent={50} steps={3} />
    <br />
    <Progress percent={30} steps={5} />
    <br />
    <Progress percent={100} steps={5} size="small" strokeColor={green[6]} />
    <br />
    <Progress percent={60} steps={5} strokeColor={[green[6], green[6], red[5]]} />
  </>
);

ProgressBarWithSteps.parameters = {
  docs: {
    description: {
      story: 'A progress bar with steps. ',
    },
  },
};
