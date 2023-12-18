import React, { FC, useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/vs2015.css'

// Atoms
import { Typography } from 'minhquanle-ui/es/components/atoms'

// Components
import { GPTIconV3, UserIcon } from 'minhquanle-ui/es/components/icons'

// Type
import { IChatBoxMessageProps, Role } from './types'

// Style
import { MessageItemWrapper } from './styled'

const { Text } = Typography

const MessageItem: FC<IChatBoxMessageProps> = ({
  role,
  content,
  scrollBody,
  renderDone,
  doAnimation,
  avatar,
  idx,
  isPlaceholder,
  renderType,
}) => {
  const isBot = role === Role.Assistant
  const [text, setText] = useState(isBot && doAnimation ? '' : content)
  const contentRef = useRef<React.ReactElement>()

  const MAP_ICON = {
    [Role.Assistant]: <GPTIconV3 className={clsx('icon', 'gpt')} />,
    [Role.User]: avatar ? (
      <img className={clsx('avatar')} src={avatar} alt="avatar" />
    ) : (
      <UserIcon className={clsx('icon', 'user')} />
    ),
  }

  useEffect(() => {
    if (isBot && doAnimation) {
      let i = 0
      setTimeout(() => {
        const intervalId = setInterval(() => {
          const nextSpace = content.slice(i).indexOf(' ')
          i += nextSpace >= 0 ? nextSpace + 1 : content.length + 1
          setText(content.slice(0, i))
          if (i > content.length) {
            clearInterval(intervalId)
            renderDone(idx)
          }
          scrollBody()
        }, 20)

        return () => clearInterval(intervalId)
      }, 150)
    } else {
      scrollBody()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBot])

  const renderMarkdown = () => {
    try {
      const newContent = isPlaceholder ? (
        <div className="reactMarkDown">
          <pre>
            <code>
              <span />
            </code>
          </pre>
        </div>
      ) : (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          className="reactMarkDown"
        >
          {text}
        </ReactMarkdown>
      )

      contentRef.current = newContent

      return contentRef.current
    } catch (error) {
      return contentRef.current
    }
  }
  return (
    <MessageItemWrapper className={clsx({ greyBg: isBot })}>
      {MAP_ICON[role]}
      {renderType === 'markdown' ? (
        <div
          className={
            isPlaceholder ||
            (isBot && doAnimation && text.length < content.length)
              ? 'ants-text-streaming'
              : ''
          }
        >
          {renderMarkdown()}
        </div>
      ) : (
        <Text
          className={
            isPlaceholder || (isBot && doAnimation && text !== content)
              ? 'ants-text-streaming'
              : ''
          }
        >
          {isPlaceholder ? '' : text}
        </Text>
      )}
    </MessageItemWrapper>
  )
}

MessageItem.defaultProps = {
  renderType: 'markdown',
}

export default React.memo(MessageItem)
