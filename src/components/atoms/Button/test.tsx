// Libraries
import React, { useState } from 'react';
import Icon from '@antscorp/icons';

// Components
import { Button, Divider, Radio, Space, Modal } from '../../index';

const TestIcon = () => <Icon type="icon-ants-toggle-on" />;

const TestButton: React.FC = () => {
  const [size, setSize] = useState<any>('large'); // default is 'middle'
  const [api, context] = Modal.useModal();

  return (
    <>
      {context}
      <Space direction="vertical" size={20}>
        <Space wrap>
          <Button
            type="primary"
            onClick={() => {
              api.confirm({
                title: 'hello',
                content: 'this is me',
              });
            }}
          >
            Primary Button
          </Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>
        <Space direction="vertical">
          <Space wrap>
            <Button type="primary" shape="circle" icon={<TestIcon />} />
            <Button type="primary" shape="circle">
              A
            </Button>
            <Button type="primary" icon={<TestIcon />}>
              Search
            </Button>
            <Button shape="circle" icon={<TestIcon />} />
            <Button icon={<TestIcon />}>Search</Button>
          </Space>
          <Space wrap>
            <Button shape="circle" icon={<TestIcon />} />
            <Button icon={<TestIcon />}>Search</Button>
            <Button type="dashed" shape="circle" icon={<TestIcon />} />
            <Button type="dashed" icon={<TestIcon />}>
              Search
            </Button>
            <Button icon={<TestIcon />} href="https://www.google.com" />
          </Space>
        </Space>
        <Space wrap>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>
        <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <Divider orientation="left" plain>
          Preview
        </Divider>
        <Space direction="vertical">
          <Space wrap>
            <Button type="primary" size={size}>
              Primary
            </Button>
            <Button size={size}>Default</Button>
            <Button type="dashed" size={size}>
              Dashed
            </Button>
          </Space>
          <Button type="link" size={size}>
            Link
          </Button>
          <Space wrap>
            <Button type="primary" icon={<TestIcon />} size={size} />
            <Button type="primary" shape="circle" icon={<TestIcon />} size={size} />
            <Button type="primary" shape="round" icon={<TestIcon />} size={size} />
            <Button type="primary" shape="round" icon={<TestIcon />} size={size}>
              Download
            </Button>
            <Button type="primary" icon={<TestIcon />} size={size}>
              Download
            </Button>
            <Button danger>Danger</Button>
            <Button danger type="primary">
              Danger
            </Button>
            <Button danger type="link">
              Danger
            </Button>
            <Button danger type="text">
              Danger
            </Button>
          </Space>
        </Space>

        <Space direction="vertical">
          <Space>
            <Button type="primary">Primary</Button>
            <Button type="primary" disabled>
              Primary(disabled)
            </Button>
          </Space>
          <Space>
            <Button>Default</Button>
            <Button disabled>Default(disabled)</Button>
          </Space>
          <Space>
            <Button type="dashed">Dashed</Button>
            <Button type="dashed" disabled>
              Dashed(disabled)
            </Button>
          </Space>
          <Space>
            <Button type="text">Text</Button>
            <Button type="text" disabled>
              Text(disabled)
            </Button>
          </Space>
          <Space>
            <Button type="link">Link</Button>
            <Button type="link" disabled>
              Link(disabled)
            </Button>
          </Space>
          <Space>
            <Button type="primary" href="https://ant.design/index-cn">
              Href Primary
            </Button>
            <Button type="primary" href="https://ant.design/index-cn" disabled>
              Href Primary(disabled)
            </Button>
          </Space>
          <Space>
            <Button danger>Danger Default</Button>
            <Button danger disabled>
              Danger Default(disabled)
            </Button>
          </Space>
          <Space>
            <Button type="primary" danger>
              Primary
            </Button>
            <Button type="primary" danger disabled>
              Primary(disabled)
            </Button>
          </Space>
          <Space>
            <Button danger type="text">
              Danger Text
            </Button>
            <Button danger type="text" disabled>
              Danger Text(disabled)
            </Button>
          </Space>
          <Space>
            <Button type="link" danger>
              Danger Link
            </Button>
            <Button type="link" danger disabled>
              Danger Link(disabled)
            </Button>
          </Space>
          <Space className="site-button-ghost-wrapper">
            <Button ghost>Ghost</Button>
            <Button ghost disabled>
              Ghost(disabled)
            </Button>
          </Space>
        </Space>
      </Space>
    </>
  );
};

export default TestButton;
