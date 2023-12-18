// Libraries
import { Button } from 'minhquanle-ui/es/components/atoms'
import styled from 'styled-components'

// Constants
import { THEME } from 'minhquanle-ui/es/constants'

export const IconSelectionWrapper = styled.div`
  width: 100%;
  padding: 5px;
  aspect-ratio: 1.74;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;

  .transparent-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 15px;
    aspect-ratio: 1.74;
    background: url('data:image/svg+xml;base64, PHN2ZyBoZWlnaHQ9IjEwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1oaWRkZW49InRydWUiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIuMTI1IiBkPSJNMCAyNTZoMjU2djI1NkgweiI+PC9wYXRoPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIuMjUiIGQ9Ik0yNTYgMjU2aDI1NnYyNTZIMjU2eiI+PC9wYXRoPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIuMTI1IiBkPSJNMjU2IDBoMjU2djI1NkgyNTZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9Ii4yNSIgZD0iTTAgMGgyNTZ2MjU2SDB6Ij48L3BhdGg+PC9zdmc+')
      repeat rgb(249, 251, 255);
  }
`

export const WrapperListRender = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: auto;
  text-align: center;

  &:hover .ants-hover {
    border-width: 2px;
  }

  &.ants-group:hover .group-hover {
    opacity: 1;
  }
`

export const WrapperListItemRender = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(224 224 224 / var(--tw-border-opacity));
  border-style: solid;
  box-sizing: border-box;
`

export const CustomButton = styled(Button)`
  position: absolute !important;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  z-index: 3;
  opacity: 0;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
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
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
`
