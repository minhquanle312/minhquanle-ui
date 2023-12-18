// Types
import { CSSProperties } from 'react'
import { BoxDimensionProps } from './components/CommentBox/types'
import { DrawItemProps } from './types'

// Constants
import { THEME } from 'minhquanle-ui/es/constants'

export const OFFSET_CENTER = 20
export const SIZE_ADJUST = 1.0

export enum IGNORE_DRAW_ID_LIST {
  ICON_CLOSE = 'antsomi-package-close-draw-icon',
  BORDER_OVERLAY = 'antsomi-package-border-overlay',
  DRAW_ACTIONS = 'antsomi-package-draw-action-options',
  CLASS_PREVENT_HOVER = 'antsomi-package-ignore-hovering-draw',
}
export const COMMENT_BOX_DIMENSION_FIXED: BoxDimensionProps = {
  width: 330,
  height: 170,
}

export const styleDrawItem = {
  MEDIUM: 33,
  SMALL: 31,
  LARGE: 43,
}
export const styleRecordItem: CSSProperties = {
  height: '100%',
  padding: 10,
}

export const styleContainer: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  minWidth: 133,
  width: 'auto',
  height: 52,
  padding: '0px 10px',
  boxShadow: '0px 4px 10px 0 rgba(0, 0, 0, 0.2)',
  backgroundColor: THEME.token?.bw0,
  borderRadius: THEME.token?.borderRadius,
  top: 'unset',
  bottom: '20px',
  right: '50%',
  zIndex: 999,
}

export enum DRAW_KEYS {
  NULL = 'null',
  HIGHLIGHT = 'highlight',
  COMMENT = 'comment',
  PEN = 'pen',
  ARROW = 'arrow',
  HIDE = 'hide',
  DONE = 'done',
  CANCEL = 'cancel',
}

export enum RECORD_KEYS {
  DRAGGABLE = 'draggable',
  NULL = 'null',
  START = 'start_recorder',
  STOP = 'stop_recorder',
  PAUSE = 'pause_recorder',
  RESUME = 'resume_recorder',
  UNMUTE = 'unmute_recorder',
  MUTED = 'muted_recorder',
  TIMELINE = 'timeline_recorder',
}

export const DRAW_ACTION_LIST: Array<DrawItemProps> = [
  {
    key: DRAW_KEYS.HIGHLIGHT,
    icon: 'icon-ants-highlight',
    label: 'Highlight',
    isShowColorList: true,
    colorList: [
      '#0f2eae',
      '#212b37',
      '#1e6be5',
      '#17bb84',
      '#f5b108',
      '#f71007',
    ],
  },
  {
    key: DRAW_KEYS.COMMENT,
    icon: 'icon-ants-comment',
    label: 'Comment',
    isShowColorList: true,
    colorList: [
      '#0f2eae',
      '#212b37',
      '#1e6be5',
      '#17bb84',
      '#f5b108',
      '#f71007',
    ],
  },
  {
    key: DRAW_KEYS.PEN,
    icon: 'icon-ants-free-draw',
    label: 'Pen',
    isShowColorList: true,
    colorList: [
      '#0f2eae',
      '#212b37',
      '#1e6be5',
      '#17bb84',
      '#f5b108',
      '#f71007',
    ],
  },
  {
    key: DRAW_KEYS.ARROW,
    icon: 'icon-ants-arrow-grow',
    label: 'Arrow',
    isShowColorList: true,
    colorList: [
      '#0f2eae',
      '#212b37',
      '#1e6be5',
      '#17bb84',
      '#f5b108',
      '#f71007',
    ],
  },
  {
    key: DRAW_KEYS.HIDE,
    icon: 'icon-ants-invisible',
    label: 'Hide',
    isShowColorList: true,
    colorList: [
      '#0f2eae',
      '#212b37',
      '#1e6be5',
      '#17bb84',
      '#f5b108',
      '#f71007',
    ],
  },
  {
    key: DRAW_KEYS.NULL,
    icon: 'icon-ants-laptop',
    type: 'divider',
    isShowColorList: false,
  },
  {
    key: DRAW_KEYS.DONE,
    icon: 'icon-ants-check-slim',
    label: 'Done',
    isShowColorList: false,
  },
  {
    key: DRAW_KEYS.CANCEL,
    icon: 'icon-ants-check-slim',
    label: 'Cancel',
    isShowColorList: false,
  },
]
