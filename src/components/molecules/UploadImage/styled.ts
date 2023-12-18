// Libraries
import styled from 'styled-components'

// Constants
import { THEME } from 'minhquanle-ui/es/constants'

export const WrapperListImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: auto;
  text-align: center;

  &.ants-group:hover .group-hover {
    opacity: 1;
  }
`

export const TextStyled = styled.span`
  color: ${THEME.token?.colorTextDark};
`

export const Boxed = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border-width: 1px;
  border-style: solid;
  --tw-border-opacity: 1;
  border-color: rgb(224 224 224 / var(--tw-border-opacity));

  &:hover {
    border-width: 2px;
  }
`

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`

export const WrapperBtn = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  gap: 15px;
  opacity: 0;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`

export const Paragraph = styled.p`
  display: inline-block;
  margin-top: 5px;
  width: 100%;
  font-size: ${THEME.token?.fontSize}px;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 2;
  background-color: ${THEME.token?.bgLightTransparent};
  opacity: 0;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`

export const WrapperInputMode = styled.div<{ width?: string }>`
  position: relative;
  width: ${(props) => (props.width ? props.width : '100%')};
`

export const WrapperIcon = styled.div`
  position: absolute;
  top: -10px;
  left: calc(100% - 44px);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 50%;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`

export const ErrorMessage = styled.div`
  width: 100%;
  margin-top: 3px;
  color: #f44336;
  font-size: 0.688rem;
  line-height: 1.66;
`

export const UploadImageWrapper = styled.div`
  .antsomi-upload.antsomi-upload-btn {
    padding: 0px;
  }

  .image-upload-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 20px;
    position: relative;
    border-radius: ${THEME.token?.borderRadius}px;
    border-width: 2px;
    border-style: dashed;
    --tw-border-opacity: 1;
    border-color: rgb(210 210 210 / var(--tw-border-opacity));
    aspect-ratio: 3.2;

    &.uploaded {
      background: url('data:image/svg+xml;base64, PHN2ZyBoZWlnaHQ9IjEwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIuMTI1IiBkPSJNMCAyNTZoMjU2djI1NkgweiI+PC9wYXRoPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIuMjUiIGQ9Ik0yNTYgMjU2aDI1NnYyNTZIMjU2eiI+PC9wYXRoPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIuMTI1IiBkPSJNMjU2IDBoMjU2djI1NkgyNTZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9Ii4yNSIgZD0iTTAgMGgyNTZ2MjU2SDB6Ij48L3BhdGg+PC9zdmc+')
        repeat rgb(249, 251, 255);
    }
    .antsomi-upload-drag-container {
    }
    .upload-file-info {
      p {
        font-size: 12px;
      }
    }
  }
`
