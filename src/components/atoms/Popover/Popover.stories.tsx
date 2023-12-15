// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
// Components
import { Popover } from './Popover';
import { Button } from '../Button';
import styled from 'styled-components';

const BlockStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const MiddleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export default {
  title: 'Atoms/Popover',
  component: Popover,
  argTypes: {
    content: {
      name: 'content',
      defaultValue: 'Text',
      description: 'Content of the card',
      table: {
        type: { summary: 'string | ReactNode | () => ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'select',
        options: {
          Text: 'Text content of card',
          ReactNode: <p>ReactNode content of card</p>,
        },
      },
    },
    title: {
      name: 'Title',
      description: 'Title of the card',
      table: {
        type: { summary: 'string | ReactNode | () => ReactNode' },
      },
      control: {
        type: 'select',
        options: {
          Text: 'Text Title',
          ReactNode: <h3>ReactNode Title</h3>,
        },
      },
    },
    trigger: {
      name: 'trigger',
      description: 'Tooltip trigger mode. Could be multiple by passing an array',
      table: {
        type: { summary: 'hover | focus | click | contextMenu | Array<string>' },
        defaultValue: { summary: 'hover' },
      },
      defaultValue: 'hover',
      control: {
        type: 'select',
        options: {
          Hover: 'hover',
          Focus: 'focus',
          Click: 'click',
          Array: ['hover', 'click'],
        },
      },
    },
    placement: {
      name: 'placement',
      description: 'The position of the tooltip relative to the target, which can be one of',
      table: {
        type: {
          summary:
            'string | top | left | right | bottom | topLeft | topRight | bottomLeft | bottomRight | leftTop | leftBottom | rightTop | rightBottom',
        },
        defaultValue: { summary: 'top' },
      },
      defaultValue: 'top',
      control: {
        type: 'select',
        options: {
          top: 'top',
          left: 'left',
          right: 'right',
          bottom: 'bottom',
          topLeft: 'topLeft',
          topRight: 'topRight',
          bottomLeft: 'bottomLeft',
          bottomRight: 'bottomRight',
          leftTop: 'leftTop',
          leftBottom: 'leftBottom',
          rightTop: 'rightTop',
          rightBottom: 'rightBottom',
        },
      },
    },
    onOpenChange: {
      name: 'onOpenChange',
      description: 'Callback executed when open of the Popover card is changed',
      table: {
        type: {
          summary: '(open: boolean) => void',
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The floating card popped by clicking or hovering.' +
          '\n### When To Use' +
          '\n' +
          '- A simple popup menu to provide extra information or operations.' +
          '\n' +
          '- Comparing with `Tooltip`, besides information `Popover` card can also provide action elements like links and buttons.<br /> ' +
          '\n',
      },
    },
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = args => {
  const content = (
    <div>
      <p>Content example 1</p>
      <p>Content example 2</p>
    </div>
  );

  return (
    <Popover content={content} title="Title example" {...args}>
      <Button type="primary">Hover me</Button>
    </Popover>
  );
};

export const Default = Template.bind({});

export const ThreeWaysToTrigger = () => {
  const Content = (
    <div>
      <p>Content 1</p>
      <p>Content 2</p>
    </div>
  );

  return (
    <BlockStyle>
      <Popover content={Content} title="Hover Me" trigger="hover">
        <Button>Hover me</Button>
      </Popover>
      <Popover content={Content} title="Focus Me" trigger="focus">
        <Button>Focus me</Button>
      </Popover>
      <Popover content={Content} title="Click Me" trigger="click">
        <Button>Click me</Button>
      </Popover>
    </BlockStyle>
  );
};

ThreeWaysToTrigger.parameters = {
  docs: {
    description: {
      story: 'Mouse to click, focus and move in.',
    },
  },
};

export const Placement = () => {
  const Title = <h3>Title of ReactNode</h3>;
  const Content = (
    <div>
      <p>Content 1</p>
      <p>Content 2</p>
      <p>Content 3</p>
    </div>
  );

  const buttonWidth = 100;
  const marginTB = 12;

  return (
    <div>
      <BlockStyle>
        <Popover title={Title} content={Content} placement="topLeft" trigger="click">
          <Button style={{ width: buttonWidth }}>Top Left</Button>
        </Popover>
        <Popover title={Title} content={Content} placement="top" trigger="click">
          <Button style={{ width: buttonWidth }}>Top</Button>
        </Popover>
        <Popover title={Title} content={Content} placement="topRight" trigger="click">
          <Button style={{ width: buttonWidth }}>Top Right</Button>
        </Popover>
      </BlockStyle>
      <MiddleStyle>
        <div style={{ width: buttonWidth }}>
          <Popover title={Title} content={Content} placement="leftTop" trigger="click">
            <Button style={{ width: buttonWidth }}>Left Top</Button>
          </Popover>
          <Popover title={Title} content={Content} placement="left" trigger="click">
            <Button style={{ width: buttonWidth, marginTop: marginTB, marginBottom: marginTB }}>
              Left
            </Button>
          </Popover>
          <Popover title={Title} content={Content} placement="leftBottom" trigger="click">
            <Button style={{ width: buttonWidth }}>Left Bottom</Button>
          </Popover>
        </div>
        <div style={{ width: buttonWidth }}>
          <Popover title={Title} content={Content} placement="rightTop" trigger="click">
            <Button style={{ width: buttonWidth }}>Right Top</Button>
          </Popover>
          <Popover title={Title} content={Content} placement="right" trigger="click">
            <Button style={{ width: buttonWidth, marginTop: marginTB, marginBottom: marginTB }}>
              Right
            </Button>
          </Popover>
          <Popover title={Title} content={Content} placement="rightBottom" trigger="click">
            <Button style={{ width: buttonWidth }}>Right Bottom</Button>
          </Popover>
        </div>
      </MiddleStyle>
      <BlockStyle>
        <Popover title={Title} content={Content} placement="bottomLeft" trigger="click">
          <Button style={{ width: buttonWidth }}>Bottom Left</Button>
        </Popover>
        <Popover title={Title} content={Content} placement="bottom" trigger="click">
          <Button style={{ width: buttonWidth }}>Bottom</Button>
        </Popover>
        <Popover title={Title} content={Content} placement="bottomRight" trigger="click">
          <Button style={{ width: buttonWidth }}>Bottom Right</Button>
        </Popover>
      </BlockStyle>
    </div>
  );
};

Placement.parameters = {
  docs: {
    description: {
      story: 'There are 12 `placement` options available.',
    },
  },
};

export const ControllingTheCloseDialog = () => {
  const Title = <h3>Title</h3>;

  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = () => {
    setOpen(!open);
  };

  return (
    <Popover
      title={Title}
      content={<Button onClick={hide}>Close</Button>}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button>Hover</Button>
    </Popover>
  );
};

ControllingTheCloseDialog.parameters = {
  docs: {
    description: {
      story: 'Use `open` prop to control the display of the card.',
    },
  },
};

export const HoverWithClick = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const HoverContent = <p>This is hover content.</p>;

  const handleHoverChange = (open: boolean) => {
    setHovered(open);
  };

  const handleClickChange = (open: boolean) => {
    setHovered(false);
    setClicked(open);
  };

  const hide = () => {
    setHovered(false);
    setClicked(false);
  };

  const ClickContent = (
    <div>
      <p>This is click content.</p>
      <Button type="ghost" onClick={hide}>
        Close
      </Button>
    </div>
  );

  return (
    <Popover
      title="Hover me"
      content={HoverContent}
      open={hovered}
      trigger="hover"
      onOpenChange={handleHoverChange}
    >
      <Popover
        title="Click me"
        content={ClickContent}
        trigger="click"
        open={clicked}
        onOpenChange={handleClickChange}
      >
        <Button>Hover / Click me!</Button>
      </Popover>
    </Popover>
  );
};
