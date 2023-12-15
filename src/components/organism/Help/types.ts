import { ReactNode } from 'react';
import type { MenuProps, TabPaneProps } from 'antd';

type TriggerTypeDropdown = Array<'hover' | 'contextMenu' | 'click'>;

type ConfigProps = {
  domain: string;
  domainTicket: string;
  token: string;
  apiKey: string;
  portalId: string;
  config: any;
  userId: string;
  domainPlatform: string;
  appCode: string;
  avatar?: string;
};

export interface ValueFormProps {
  title: string;
  ticketType: string;
  priority: string;
  category: any;
  ownerId: number;
  followers: any[];
  message: string;
  files: any[];
  referenceUrl: string;
}

export interface AllAppOptionsProps {
  label: string;
  value: string;
  raw?: any;
}

export interface IHelpProps {
  configs: ConfigProps;
  boundsDraggable?: string;
  isShowResizeHover?: boolean;
  triggerType: TriggerTypeDropdown;
  onClick?: Function;
  children?: ReactNode;
}
export interface LabelProps {
  color: string;
}

export type MenuItemTypeProps = {
  item: any;
  key: string;
  keyPath: string[];
  domEvent: React.MouseEvent<any>;
};

export interface ITabShareScreenProps extends Omit<TabPaneProps, 'tab'> {
  key: string;
  label: React.ReactNode;
}

export interface ImageDrewProps {
  imageName: string;
  dataURL: string;
}

export interface StreamTrackProps {
  desktopStream: MediaStream;
  voiceStream: MediaStream;
}

export interface HelpDocItem {
  title: string | JSX.Element;
  key: string;
  path?: string;
  children?: HelpDocItem[];
}
