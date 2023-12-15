// Libraries
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Switch, Skeleton, ConfigProvider } from 'antd';

// Components
import { Card } from './Card';
import { Row, Col } from '../../atoms';
import { Table } from '../../organism';

// Constants
import { TABLE_API_COLUMNS } from 'src/constants';

export default {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {
    actions: {
      name: 'actions',
      description: 'The action list, shows at the bottom of the Card	',
      table: {
        type: { summary: 'Array<ReactNode>' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    activeTabKey: {
      name: 'activeTabKey	',
      description: `Current TabPane's key	`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    bodyStyle: {
      name: 'bodyStyle	',
      description: 'Inline style to apply to the card content	',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    bordered: {
      name: 'bordered',
      defaultValue: true,
      description: 'Toggles rendering of the border around the card	',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: {
        type: 'boolean',
      },
    },
    cover: {
      name: 'cover',
      description: 'Card cover',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: null,
    },
    defaultActiveTabKey: {
      name: 'defaultActiveTabKey',
      description: 'Initial active TabPanes key, if `activeTabKey` is not set',
      table: {
        type: { summary: 'string' },
      },
      control: null,
    },
    extra: {
      name: 'extra',
      description: 'Content to render in the top-right corner of the card	',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: null,
    },
    headStyle: {
      name: 'headStyle	',
      description: 'Inline style to apply to the card head',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    hoverable: {
      name: 'hoverable',
      defaultValue: false,
      description: 'Inline style to apply to the card headLift up when hovering card',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    loading: {
      name: 'loading',
      defaultValue: false,
      description: 'Shows a loading indicator while the contents of the card are being fetched',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    size: {
      name: 'size',
      defaultValue: 'default',
      description: 'Size of card	',
      table: {
        type: { summary: 'default | small' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
        option: ['default', 'small'],
      },
    },
    tabBarExtraContent: {
      name: 'tabBarExtraContent	',
      description: 'Extra content in tab bar	',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    tabList: {
      name: 'tabList	',
      description: 'List of TabPanes head	',
      table: {
        type: { summary: 'TabItemType' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    tabProps: {
      name: 'tabProps',
      description: 'Tabs',
      control: null,
    },
    title: {
      name: 'title	',
      description: 'Card title',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    type: {
      name: 'type',
      description: 'Card style `type`, can be set to inner or not set',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: null,
    },
    onTabChange: {
      name: 'onTabChange',
      description: 'Callback when tab is switched',
      table: {
        type: { summary: '(key) => void' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Simple rectangular container.' +
          '\n### When To Use' +
          '\n' +
          '- A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.' +
          '\n',
      },
    },
  },
} as ComponentMeta<typeof Card>;

// Default
const Template: ComponentStory<typeof Card> = args => (
  <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }} {...args}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

export const Basic = Template.bind({});

// Examples

export const NoBorder = () => (
  <Card title="Card title" bordered={false} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

NoBorder.parameters = {
  docs: {
    description: {
      story: 'A borderless card on a gray background.',
    },
  },
};

export const SimpleCard = () => (
  <Card style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

SimpleCard.parameters = {
  docs: {
    description: {
      story: 'A simple card only containing a content area.',
    },
  },
};

export const CustomizedContent = () => {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

CustomizedContent.parameters = {
  docs: {
    description: {
      story: 'You can use `Card.Meta` to support more flexible content.',
    },
  },
};

export const CardInColumn = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
);

CardInColumn.parameters = {
  docs: {
    description: {
      story: 'Cards usually cooperate with grid column layout in overview page.',
    },
  },
};

export const LoadingCard = () => {
  const { Meta } = Card;
  const [loading, setLoading] = useState(true);
  const onChange = (checked: boolean) => {
    setLoading(!checked);
  };
  return (
    <>
      <Switch checked={!loading} onChange={onChange} />
      <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </>
  );
};

LoadingCard.parameters = {
  docs: {
    description: {
      story: 'Shows a loading indicator while the contents of the card is being fetched.',
    },
  },
};

export const GridCard = () => {
  const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
  };
  return (
    <Card title="Card Title">
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid hoverable={false} style={gridStyle}>
        Content
      </Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
    </Card>
  );
};

export const InnerCard = () => (
  <Card title="Card title">
    <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
      Inner Card content
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Inner Card title"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </Card>
  </Card>
);

InnerCard.parameters = {
  docs: {
    description: {
      story:
        'It can be placed inside the ordinary card to display the information of the multilevel structure.',
    },
  },
};

export const WithTabs = () => {
  const tabList = [
    {
      key: 'tab1',
      tab: 'tab1',
    },
    {
      key: 'tab2',
      tab: 'tab2',
    },
  ];

  const contentList: Record<string, React.ReactNode> = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
  };

  const tabListNoTitle = [
    {
      key: 'article',
      tab: 'article',
    },
    {
      key: 'app',
      tab: 'app',
    },
    {
      key: 'project',
      tab: 'project',
    },
  ];

  const contentListNoTitle: Record<string, React.ReactNode> = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
  };
  const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');
  const [activeTabKey2, setActiveTabKey2] = useState<string>('app');

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  return (
    <>
      <Card
        style={{ width: '100%' }}
        title="Card title"
        extra={<a href="#">More</a>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
      <br />
      <br />
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={<a href="#">More</a>}
        onTabChange={onTab2Change}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  );
};

WithTabs.parameters = {
  docs: {
    description: {
      story: 'More content can be hosted.',
    },
  },
};

export const SupportMoreContentConfiguration = () => {
  const { Meta } = Card;
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
};

SupportMoreContentConfiguration.parameters = {
  docs: {
    description: {
      story: 'A Card that supports `cover`, `avatar`, `title` and `description`.',
    },
  },
};

export const CardGrid: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'className',
      description: `The className of container`,
      type: 'string',
      default: '-',
    },
    {
      key: '2',
      property: 'hoverable',
      description: 'Lift up when hovering card grid	',
      type: 'boolean',
      default: 'true',
    },
    {
      key: '3',
      property: 'style',
      description: 'The style object of container	',
      type: 'CSSProperties',
      default: '-',
    },
  ];

  return <Table dataSource={dataSource} columns={TABLE_API_COLUMNS} pagination={false} />;
};

CardGrid.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
};

export const CardMeta: ComponentStory<any> = () => {
  const dataSource = [
    {
      key: '1',
      property: 'avatar',
      description: `Avatar or icon	`,
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '2',
      property: 'className',
      description: 'The className of container',
      type: 'string',
      default: '-',
    },
    {
      key: '3',
      property: 'description',
      description: 'Description content',
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '4',
      property: 'style',
      description: 'The style object of container	',
      type: 'CSSProperties',
      default: '-',
    },
    {
      key: '5',
      property: 'title',
      description: 'Title content	',
      type: 'ReactNode',
      default: '-',
    },
  ];

  return <Table dataSource={dataSource} columns={TABLE_API_COLUMNS} pagination={false} />;
};

CardGrid.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
};
