// Libraries
import styled from 'styled-components'

// Constantsim
import { THEME } from 'minhquanle-ui/lib/constants'

export const ChatBoxWrapper = styled.div<{ withoutBox?: boolean }>`
  box-sizing: border-box;
  width: ${(props) => (props.withoutBox ? '100%' : '450px')};
  min-height: ${(props) => (props.withoutBox ? '100%' : '300px')};
  max-height: ${(props) => (props.withoutBox ? 'unset' : 'calc(100vh - 57px)')};
  position: ${(props) => (props.withoutBox ? 'static' : 'fixed')};
  right: 5px;
  bottom: 0px;
  z-index: 9999;

  display: flex;
  flex-direction: column;

  font-family: Roboto, san-serif;
  border: 1px solid #e5e5e5;
`
export const ChatBoxHeader = styled.div`
  flex: 0 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px 0 20px;
  background: #fff;

  .title {
    font-size: 16px;
  }

  .close-btn {
    border: none;
    padding: 0;
  }
`
export const ChatBoxBody = styled.div`
  flex: 1;
  background: #fff;
  // max-height: calc(100vh - 150px);
  overflow: auto;

  display: flex;
  flex-direction: column;
  gap: 5px;

  padding: 11px 0;

  ::-webkit-scrollbar {
    height: 1rem;
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    --tw-border-opacity: 1;
    background-color: rgba(217, 217, 227, 0.8);
    border-color: rgba(255, 255, 255, var(--tw-border-opacity));
    border-radius: 9999px;
    border-width: 1px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 9999px;
  }

  // &::-webkit-scrollbar {
  //   -webkit-appearance: none;
  //   background-color: #eee;
  //   width: 8px;
  //   height: 8px;
  // }
  // &::-webkit-scrollbar-thumb {
  //   background-color: rgba(0, 0, 0, 0.2);
  //   -webkit-border-top-right-radius: 4px;
  //   -webkit-border-bottom-right-radius: 4px;
  //   -webkit-border-bottom-left-radius: 4px;
  //   -webkit-border-top-left-radius: 4px;
  //   border-top-right-radius: 4px;
  //   border-bottom-right-radius: 4px;
  //   border-bottom-left-radius: 4px;
  //   border-top-left-radius: 4px;
  // }
`
export const ChatBoxFooter = styled.div`
  background: #fff;
`
export const MessageItemWrapper = styled.div`
  margin: 0 11px;
  padding: 10px;
  border-radius: 3px;
  background: transparent;

  display: flex;
  align-items: flex-start;
  gap: 10px;
  // text-align: justify;

  &.greyBg {
    background: ${THEME.token?.bw2};
  }

  .icon {
    min-width: 30px;
    min-height: 30px;
  }
  .gpt {
    background-image: url(/assets/images/gpt.png);
  }
  .user {
    min-width: 24px;
    min-height: 24px;
  }
  .avatar {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
  .reactMarkDown {
    white-space: pre-wrap;
  }
  .reactMarkDown * {
    font-size: 12px;
    line-height: 1.5;
  }
  .reactMarkDown > *:first-child {
    margin-top: 0 !important;
  }
  .reactMarkDown ol {
    padding-inline-start: 12px !important;
  }
  .reactMarkDown p,
  .reactMarkDown ol,
  .reactMarkDown ul {
    margin: 0 !important;
    margin-block: 0 !important;
  }
  .reactMarkDown ol,
  .reactMarkDown ul {
    line-height: 0 !important;
  }
  .reactMarkDown ol :not(ol):not(ul),
  .reactMarkDown ul :not(ol):not(ul) {
    line-height: 1.5 !important;
  }

  .typing {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  }

  @keyframes cursor-blink {
    to {
      visibility: hidden;
    }
  }

  .ants-text-streaming > div {
    white-space: pre-wrap;
  }

  .ants-text-streaming > div > :not(ol):not(ul):not(pre):last-child,
  .ants-text-streaming > div > ol:last-child li:last-child,
  .ants-text-streaming > div > ul:last-child li:last-child {
    white-space: pre-wrap !important;
  }
  // .ants-text-streaming > div > pre:last-child code:last-child span:last-child {
  //   white-space: nowrap !important;
  // }

  .ants-text-streaming > div > :not(ol):not(ul):not(pre):last-child:after,
  .ants-text-streaming
    > div
    > ol:last-child
    > li:last-child
    > *:last-child:after,
  .ants-text-streaming
    > div
    > pre:last-child
    > code:last-child
    > span:last-child:after,
  .ants-text-streaming > div > ul:last-child > li:last-child:after {
    -webkit-animation: cursor-blink 1s steps(5, start) infinite;
    animation: cursor-blink 1s steps(5, start) infinite;
    content: '▋';
    margin-left: 0.25rem;
    vertical-align: baseline;
    line-height: 1.5;
  }

  // .mes-content,
  // .mes-content * {
  //   max-width: 100%;
  //   overflow: auto;
  //   font-size: 14px;
  // }
  // .mes-content > p:first-child {
  //   margin-top: 0 !important;
  // }
  .mes-content pre {
    ::-webkit-scrollbar {
      height: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
      --tw-border-opacity: 1;
      background-color: rgba(217, 217, 227, 0.8);
      border-color: rgba(255, 255, 255, var(--tw-border-opacity));
      border-radius: 9999px;
      border-width: 1px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 9999px;
    }
  }
  code {
    white-space: pre-wrap;
  }
`
export const WarningWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-item: flex-start;
  gap: 10px;
  border: 1px solid #fec9c9;
  background: #fec9c9;
  margin: 0 10px;

  .icon {
    min-width: 18px;
  }
`
export const InputWrapper = styled.div`
  min-height: 44px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 15px 0 10px;
  margin: 10px;

  border: 1px solid #e5e5e5;
  background: #fff;

  .input {
    border: none;
    font-size: 12px;

    &:focus {
      outline: none !important;
      box-shadow: none !important;
    }
  }
  .submit-btn {
    border: none;
    padding: 0;
    border-radius: 50%;
    aspect-ratio: 1;
    // border: 1px solid;
    position: relative;
    left: -3px;

    &:focus {
      outline: none !important;
    }
    &.disabled {
      opacity: 0.65;
    }
  }
  .icon {
    flex: 0 0 24px;
    position: relative;
    left: 3px;
  }
`
export const TypingCursor = styled.div`
  width: 3px;
  height: 10px;
  background: #000;
  animation: cursor-blink 1.5s steps(2) infinite;
  // animation:
  //   typing 3.5s steps(40, end),
  //   blink-caret .75s step-end infinite;
`
