// Libraries
import ImageEditor from 'tui-image-editor'

// Constants
import { DRAW_KEYS } from './constants'
import { ATTACH_KEYS } from 'minhquanle-ui/es/components/organism/Help/constants'

// Types
import { StreamTrackProps } from 'minhquanle-ui/es/components/organism/Help/types'
import { ControlPosition } from 'react-draggable'

interface RecorderConfigProps {
  isMute: boolean
  recorder?: MediaRecorder
  streamTracks?: StreamTrackProps
}

export interface ControlPositionProps {
  [ATTACH_KEYS.CAPTURE]: ControlPosition
  [ATTACH_KEYS.RECORD]: ControlPosition
}
export interface IImageEditorProps {
  src?: string
  alt?: string
  recorderConfigs: RecorderConfigProps
  defaultPositions?: ControlPositionProps
  captureType: CaptureTypeProps
  callback: Function
}

export type CaptureTypeProps = ATTACH_KEYS.CAPTURE | ATTACH_KEYS.RECORD

export interface IncludeUIOptionProps {
  loadImage?: {
    path: string
    name: string
  }
  theme?: any
  menu?: string[]
  initMenu?: string
  uiSize?: {
    width: string
    height: string
  }
  menuBarPosition?: string
  usageStatistics?: boolean
}

export interface SelectionStyleConfigProps {
  cornerStyle?: string
  cornerSize?: number
  cornerColor?: string
  cornerStrokeColor?: string
  transparentCorners?: boolean
  lineWidth?: number
  borderColor?: string
  rotatingPointOffset?: number
}

export interface EditorConfigProps {
  includeUI?: IncludeUIOptionProps
  cssMaxWidth?: number
  cssMaxHeight?: number
  usageStatistics?: boolean
  selectionStyle?: SelectionStyleConfigProps
}

export interface DrawItemProps {
  key: string
  icon: string
  type?: string
  label?: string
  isShowColorList: boolean
  colorList?: Array<string>
}

export interface MethodImageEditorProps {
  activateShapeMode: Function
  activateTextMode: Function
  getSettings: Function
}

export interface ImageEditorInstanceProps {
  editorInstance: ImageEditor | null
  canvasEditor: any
  methods: MethodImageEditorProps
}

export type ColorListProps =
  | '#0f2eae'
  | '#212b37'
  | '#1e6be5'
  | '#17bb84'
  | '#f5b108'
  | '#f71007'

export type ColorKeys =
  | DRAW_KEYS.HIGHLIGHT
  | DRAW_KEYS.COMMENT
  | DRAW_KEYS.PEN
  | DRAW_KEYS.ARROW
  | DRAW_KEYS.HIDE

export interface ShapeOptionProps {
  fill?: string
  stroke?: string
  strokeWidth?: number
  width?: number
  height?: number
  rx?: number
  ry?: number
  left?: number
  top?: number
  isRegular?: boolean
}

interface ArrowTypeProps {
  tail?: 'chevron' | 'triangle'
  head?: 'chevron' | 'triangle'
}

export interface DrawingModeOptionProps {
  width?: number
  color?: string
  arrowType?: ArrowTypeProps
}

export interface CommentListProps {
  id: string
  index: number
  color: string
  content?: string
  isSubmitted: boolean
  left: number
  top: number
  isReverseAxisX: boolean
  isReverseAxisY: boolean
}
