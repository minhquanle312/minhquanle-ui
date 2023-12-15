/* eslint-disable no-console */
// Library
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Slider } from './index';
import { Switch } from '../Switch';
import { Icon } from '../Icon';

export default {
  title: 'Atoms/Slider',
  component: Slider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    range: {
      name: 'range',
      defaultValue: false,
      description: 'Dual thumb mode',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    value: {
      name: 'value',
      defaultValue: undefined,
      description:
        'The value of slider. When range is false, use number, otherwise, use [number, number]',
      table: {
        type: { summary: 'number | [number, number]' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'number',
      },
    },
    defaultValue: {
      name: 'defaultValue',
      defaultValue: undefined,
      description:
        'The default value of slider. When range is false, use number, otherwise, use [number, number]',
      table: {
        type: { summary: 'number | [number, number]' },
        defaultValue: { summary: '0 | [0, 0]' },
      },
      control: {
        type: 'number',
      },
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      description: 'If true, the slider will not be interactable',
      table: {
        type: { summary: 'false | true' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    vertical: {
      name: 'vertical',
      defaultValue: false,
      description: 'If true, the slider will be vertical',
      table: {
        type: { summary: 'false | true' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    marks: {
      name: 'marks',
      defaultValue: undefined,
      description:
        'Tick mark of Slider, type of key must be number, and must in closed interval [min, max], each mark can declare its own style',
      table: {
        type: { summary: 'object' },
        defaultValue: {
          summary: '{ number: ReactNode } | { number: { style: CSSProperties, label: ReactNode } }',
        },
      },
      control: {
        type: 'object',
      },
    },
    included: {
      name: 'included',
      defaultValue: true,
      description:
        'Make effect when marks not null, true means containment and false means coordinative',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: {
        type: 'boolean',
      },
    },
    dots: {
      name: 'dots',
      defaultValue: false,
      description: 'Whether the thumb can drag over tick only',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    min: {
      name: 'min',
      defaultValue: 0,
      description: 'The minimum value the slider can slide to',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
      control: {
        type: 'number',
      },
    },
    max: {
      name: 'max',
      defaultValue: 100,
      description: 'The maximum value the slider can slide to',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 },
      },
      control: {
        type: 'number',
      },
    },
    step: {
      name: 'step',
      defaultValue: 1,
      description:
        'The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When marks no null, step can be null',
      table: {
        type: { summary: 'number | null' },
        defaultValue: { summary: 1 },
      },
      control: {
        type: 'number',
      },
    },
    onChange: {
      name: 'onChange',
      defaultValue: undefined,
      description: "Callback function that is fired when the user changes the slider's value",
      table: {
        type: { summary: '(value) => void' },
        defaultValue: { summary: '-' },
      },
    },
    onAfterChange: {
      name: 'onAfterChange',
      defaultValue: undefined,
      description: 'Fire when onmouseup is fired',
      table: {
        type: { summary: '(value) => void' },
        defaultValue: { summary: '-' },
      },
    },
    trackStyle: {
      name: 'trackStyle',
      defaultValue: undefined,
      description: 'Fire when onmouseup is fired',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'object',
      },
    },
    handleStyle: {
      name: 'handleStyle',
      defaultValue: undefined,
      description: 'The style of slider handle',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'object',
      },
    },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = args => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      component:
        'A Slider component for displaying current value and intervals in range.\n # When To Use\n To input a value in a range.',
    },
  },
};

// Basic
export const Basic: ComponentStory<typeof Slider> = args => {
  const [disabled, setDisabled] = useState(false);

  const onChange = (checked: boolean) => {
    setDisabled(checked);
  };

  return (
    <>
      <Slider defaultValue={30} disabled={disabled} />
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
      Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
    </>
  );
};

Basic.parameters = {
  docs: {
    description: {
      story:
        'Basic slider. When range is true, display as dual thumb mode. When disable is true, the slider will not be interactable.\n ##### Example',
    },
  },
};

// Icon slider props
interface IconSliderProps {
  max: number;
  min: number;
}

export const SliderIcon: ComponentStory<typeof Slider> = (args, props) => {
  const { max, min } = props;
  const [value, setValue] = useState(0);

  const mid = Number(((max - min) / 2).toFixed(5));
  const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
  const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';

  return (
    <div className="icon-wrapper" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <Icon type="icon-ants-minus-square-outlined" className={preColorCls} />
      <Slider {...props} onChange={setValue} value={value} />
      <Icon type="icon-ants-plus-square-outlined" className={nextColorCls} />
    </div>
  );
};

SliderIcon.parameters = {
  docs: {
    description: {
      story: 'You can add an icon beside the slider to make it meaningful.\n ##### Example',
    },
  },
};

// event in radio
export const Event: ComponentStory<typeof Slider> = args => {
  const onChange = (value: number | [number, number]) => {
    console.log('onChange: ', value);
  };

  const onAfterChange = (value: number | [number, number]) => {
    console.log('onAfterChange: ', value);
  };
  return (
    <>
      <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
      <Slider
        range
        step={10}
        defaultValue={[20, 50]}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
    </>
  );
};

Event.parameters = {
  docs: {
    description: {
      story:
        "The onChange callback function will fire when the user changes the slider's value. The onAfterChange callback function will fire when onmouseup fired.\n ##### Example",
    },
  },
};

// reverse
export const Reverse: ComponentStory<typeof Slider> = args => {
  const [reverse, setReverse] = useState(true);
  return (
    <>
      <Slider defaultValue={30} reverse={reverse} />
      <Slider range defaultValue={[20, 50]} reverse={reverse} />
      Reversed: <Switch size="small" checked={reverse} onChange={setReverse} />
    </>
  );
};

Reverse.parameters = {
  docs: {
    description: {
      story: 'Using reverse to render slider reversely.\n ##### Example',
    },
  },
};
