// Libraries
import { Dropdown, Button, Space, Typography, Tree, Input } from 'antd'
import styled, { css } from 'styled-components'
import { Editor } from '@tinymce/tinymce-react'

// Constantsim
import { THEME } from 'minhquanle-ui/es/constants'

// Components
const { Text: AntText } = Typography
const { Search } = Input
export const DropDown = styled(Dropdown)`
  .verify-support span {
    font-size: ${THEME.token?.fontSize}px;
    color: ${THEME.token?.colorPrimary};
    font-weight: medium;
  }
`

export const ButtonFeedback = styled(Button)<{
  height?: number
  borderRadiusCustom?: number
}>`
  width: 200px;
  height: ${(props) => (props.height ? props.height : 36)}px !important;
  border-radius: ${(props) =>
    props.borderRadiusCustom ? props.borderRadiusCustom : 5}px !important;
  border: 1px solid ${THEME.token?.blue1} !important;
  z-index: 10;
`

export const PreviewBox = styled.div`
  position: relative;
  width: 200px;
  height: 125px;
  background-color: ${THEME.token?.bw0};
  cursor: pointer;
  overflow: hidden;

  &:hover .overlay-preview {
    top: 0;
  }
`

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 100%;
  /* top: 0; */
  background-color: rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: all 0.2s ease-out;
`

export const Text = styled.span`
  font-weight: normal !important;
  color: ${THEME.token?.colorText} !important;
  font-size: ${THEME.token?.fontSize}px !important;
`

export const Label = styled.span`
  &.verify-support {
    display: inline-block;
    padding: 5px 0;
    color: ${THEME.token?.colorPrimary};
    font-size: ${THEME.token?.fontSize}px;
    font-weight: 500;
  }
`

export const SendFeedback = styled.div`
  margin-top: 30px;
`

export const ControlGroup = styled(Space)`
  width: 100%;
`

export const ControlLabel = styled(AntText)`
  font-size: ${THEME.token?.fontSize}px !important;
  color: ${THEME.token?.bw8} !important;
`

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WrapperFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HiddenBlock = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  width: 17px;
  height: 50px;
  background-color: ${THEME.token?.bw0};
`

export const WrapperImage = styled.div`
  position: relative;
  width: 290px;
  height: 170px;
  overflow: hidden;
`

export const Image = styled.img<{ isFull?: boolean }>`
  ${(props) =>
    props.isFull &&
    css`
      width: 100%;
      height: 100%;
      object-fit: cover;
    `}
`

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const WrapperHeader = styled.strong`
  display: block;
  height: 50px;
  border-bottom: 1px solid ${THEME.token?.bw3};
  line-height: 50px;
  padding-left: 15px;
  box-sizing: border-box;

  &.cursor {
    cursor: move;
  }
`

export const Header = styled(AntText)`
  font-size: 16px !important;
  color: ${THEME.token?.colorText} !important;
  font-weight: normal !important;
`

export const WrapperBody = styled.div<{ types?: string }>`
  padding: ${(props) =>
    props.types === 'help' || props.types === 'help_v1'
      ? 'none;'
      : '13px 15px;'};
  box-sizing: border-box;
  // height: calc(100% - 100px);
  flex: 1;
  overflow-y: auto;
`

export const WrapperFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 58px;
  border-top: 1px solid ${THEME.token?.bw3};
  background-color: ${THEME.token?.bw0};
  padding: 15px;
  box-sizing: border-box;
  z-index: 10;
`
export const WrapperFooterSpace = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 58px;
  border-top: 1px solid ${THEME.token?.bw3};
  background-color: ${THEME.token?.bw0};
  padding: 15px;
  box-sizing: border-box;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const EditorWrapper = styled.div`
  .tox-tinymce {
    border: 1px solid ${THEME.token?.bw3_5};
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
`

export const WrapperLinkFiles = styled.div`
  border-right: 1px solid ${THEME.token?.bw3_5};
  border-left: 1px solid ${THEME.token?.bw3_5};
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 4px;
`

export const WrapperLinkItemFiles = styled.div`
  color: ${THEME.token?.bw10};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const WrapperIconEditor = styled.div<{ borderTop?: boolean }>`
  height: 44px;
  border: 1px solid ${THEME.token?.bw3_5};
  border-top: ${(props) =>
    props.borderTop ? `1px solid ${THEME.token?.bw3_5}` : 'none'};
  display: flex;
  align-items: center;
  padding: 0 8px;
  justify-content: space-between;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
`

export const WrapperLoading = styled.div<{
  width?: number | string
  height?: number | string
}>`
  width: ${(props) => (props.width ? props.width : 'calc(100% - 100px)')};
  height: ${(props) => (props.height ? props.height : '100%')};
  position: fixed;
  background: rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`

export const WrapperInputFile = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`

export const WrapperBodyModal = styled.div`
  padding: 0 15px;
`

export const ErrorMessage = styled.div<{ isShow: boolean }>`
  display: ${(props) => (props.isShow ? 'block' : 'none')};
  color: ${THEME.token?.red8};
  font-size: 11px;
  line-height: 24px;
  font-family: ${THEME.token?.fontFamily};
`
export const Wrapper = styled.div``
export const LabelTitle = styled(AntText)`
  font-size: 13px !important;
  color: ${THEME.token?.colorText} !important;
  font-weight: bold;
`
export const WrapperContentHelp = styled.div`
  // border-radius: 5px;
  // border: 1px solid rgb(229, 229, 229);
  // border-left: 5px solid rgb(19 195 32);
  margin: 5px 0px 5px 0px;
  padding: 5px;
`
export const Link = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: #005fb8;
  font-family: ${THEME.token?.fontFamily};
  font-weight: bold;
`
export const IframeHelp = styled.iframe`
  width: 100%;
  height: 650px;
  border-style: none;
`
export const TitleSearch = styled.span`
  color: #f50;
`
export const WrapperSearch = styled(Search)`
  margin-bottom: 8px;
  margin-top: 10px;
  .antsomi-input {
    border: none;
  }
  .antsomi-btn {
    border: none;
    font-size: 16px;
  }
  border-bottom: 1px solid rgb(229, 229, 229);
`
export const TreeContent = styled(Tree)`
  .antsomi-tree-switcher {
    // order: 3;
    color: #005fb8;
  }
`
export const Span = styled.span<{ styles: any }>`
  font-weight: ${(props) =>
    props.styles && props.styles.length > 0 ? 'bold' : 'normal'};
`
