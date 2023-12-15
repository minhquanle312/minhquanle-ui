/* eslint-disable react/no-unused-prop-types */
// Libraries
import React, { useEffect, useState, useRef, useCallback } from 'react';
import clsx from 'clsx';
import axios from 'axios';

// Atoms
import { Button, Typography } from 'src/components/atoms';
import { Input as AntdInput } from 'antd';

// Components
import MessageItem from './MessageItem';
import { CloseIcon, PlaneIcon, WarningIcon } from 'src/components/icons';

// Styled
import {
  ChatBoxWrapper,
  ChatBoxHeader,
  ChatBoxBody,
  ChatBoxFooter,
  WarningWrapper,
  InputWrapper,
} from './styled';

// Types
import { IChatBoxProps, Message, Role } from './types';

const { TextArea } = AntdInput;
const { Text } = Typography;

export const ChatBox: React.FC<IChatBoxProps> = props => {
  const { onClose, domain, userId, token, withoutBox, avatar, style } = props;
  const [question, setQuestion] = useState('');
  const [isClosed, setIsClosed] = useState(false);
  const [limitMessage, setLimitMessage] = useState('');
  const [isAnswering, setAnswering] = useState<boolean>(false);
  const [showPlaceHolder, setShowPlaceholder] = useState<boolean>(false);
  const [conversation, setConversation] = useState<Message[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const initRef = useRef<boolean>(false);
  const answeringRef = useRef<boolean>(false);

  const scrollBody = useCallback(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTo(0, bodyRef.current.scrollHeight);
    }
  }, []);

  const renderDone = useCallback(
    idx => {
      if (idx === conversation.length - 1) {
        answeringRef.current = false;
        setAnswering(false);
      }
    },
    [conversation],
  );

  const addMessage = (content: string, role = Role.Assistant) => {
    setConversation(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role,
        content,
      } as Message,
    ]);
  };

  const loadConversation = async () => {
    const result = await axios.get(`${domain}/api/chat/performance`, {
      params: {
        _token: token,
        _user_id: userId,
        _account_id: userId,
        format: 'grid',
        objType: 7,
        limit: 1000,
        page: 1,
      },
    });

    if (result && result.data && result.data.data && result.data.data.rows) {
      const initConversation: Message[] = [];

      result.data.data.rows
        .sort((a, b) => a.message_id - b.message_id)
        .forEach(mess => {
          initConversation.push({
            id: mess.message_id,
            role: Role.User,
            content: mess.message,
          });

          initConversation.push({
            id: `gpt_${mess.message_id}`,
            role: Role.Assistant,
            content: mess.response_message,
          });
        });

      setConversation(initConversation);
    }
  };

  const request = async (question: string) => {
    if (!question) return;

    // await new Promise<any>(r => setTimeout(() => r({data: {data:{message: 'Lorem ipsum'}}}), Math.random() * 3000))
    const result = await axios.post(
      `${domain}/api/chat/index`,
      {
        message: question,
      },
      {
        params: {
          _token: token,
          _user_id: userId,
          _account_id: userId,
        },
      },
    );
    if (result && result.data && result.data.data && result.data.data.message) {
      addMessage(result.data.data.message);
    } else if (result && result.data && result.data.code === 400) {
      setLimitMessage(result.data.message);
    }
  };

  useEffect(() => {
    loadConversation();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    scrollBody();
  }, [conversation]);

  useEffect(() => {
    if (isAnswering && conversation.at(-1)?.role !== Role.Assistant) {
      setTimeout(() => {
        if (isAnswering && conversation.at(-1)?.role !== Role.Assistant) {
          setShowPlaceholder(true);
        } else {
          setShowPlaceholder(false);
        }
      }, Math.random() * 4000);
    } else {
      setShowPlaceholder(false);
    }
  }, [isAnswering, conversation]);

  const handleClose = () => {
    setIsClosed(true);
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const renderMessage = (message, idx: number, isPlaceholder = false) => (
    <MessageItem
      key={idx}
      idx={idx}
      {...message}
      scrollBody={scrollBody}
      renderDone={renderDone}
      doAnimation={initRef.current && idx === conversation.length - 1}
      avatar={avatar}
      isPlaceholder={isPlaceholder}
    />
  );

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (answeringRef.current || limitMessage || !question || !question.trim()) {
        return;
      }
      initRef.current = true;
      answeringRef.current = true;
      setAnswering(true);

      addMessage(question, Role.User);
      request(question);
      setQuestion('');
    }
  };

  if (isClosed) {
    return null;
  }

  return (
    <ChatBoxWrapper withoutBox={withoutBox} style={style}>
      {!withoutBox && (
        <ChatBoxHeader>
          <Text className={clsx('title')}>Get ideas with ChatGPT</Text>
          <Button className={clsx('close-btn')} onClick={handleClose}>
            <CloseIcon />
          </Button>
        </ChatBoxHeader>
      )}
      <ChatBoxBody ref={bodyRef}>
        {conversation.map((message, idx) => renderMessage(message, idx))}
        {showPlaceHolder &&
          !limitMessage &&
          isAnswering &&
          conversation.at(-1)?.role !== Role.Assistant &&
          renderMessage(
            {
              id: 'placeholder',
              role: Role.Assistant,
              content: '',
            },
            conversation.length,
            true,
          )}
      </ChatBoxBody>
      <ChatBoxFooter>
        {limitMessage && (
          <WarningWrapper>
            <WarningIcon className={clsx('icon')} />
            <Text>{limitMessage}</Text>
          </WarningWrapper>
        )}

        <InputWrapper>
          <TextArea
            ref={inputRef}
            value={question}
            onChange={e => setQuestion(e.target.value)}
            className={clsx('input')}
            placeholder="Type your question..."
            onKeyDown={handleKeyDown}
            autoSize
          />
          <Button
            disabled={isAnswering}
            className={clsx('submit-btn', { disabled: isAnswering })}
            onClick={() => handleKeyDown({ key: 'Enter', preventDefault: () => null })}
          >
            <PlaneIcon className={clsx('icon')} />
          </Button>
        </InputWrapper>
      </ChatBoxFooter>
    </ChatBoxWrapper>
  );
};

ChatBox.defaultProps = {
  withoutBox: false,
  avatar: '',
};
