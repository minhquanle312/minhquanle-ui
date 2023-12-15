export const enum Role {
  Assistant = 'assistant',
  User = 'user',
}

export interface Message {
  id: string;
  role: Role;
  content: string;
  answering?: boolean;
}

export interface IChatBoxMessageProps extends Message {
  role: Role;
  content: string;
  isTyping?: boolean;
  isPlaceholder?: boolean;
  scrollBody: Function;
  renderDone: Function;
  doAnimation: boolean;
  answeringContent: string;
  avatar?: string;
  idx?: number;
  renderType: 'text' | 'markdown';
}

export interface IChatBoxProps {
  onClose?: Function;
  withoutBox?: boolean;
  domain: string;
  userId: string | number;
  token: string;
  avatar?: string;
  style?: Record<string, any>;
}
