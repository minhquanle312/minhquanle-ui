/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-multi-str */
// Libraries
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { isEmpty } from 'lodash'
import { createPortal } from 'react-dom'

// Types
import {
  AllAppOptionsProps,
  HelpDocItem,
  IHelpProps,
  ImageDrewProps,
  MenuItemTypeProps,
  StreamTrackProps,
  ValueFormProps,
} from './types'
import { ControlPosition } from 'react-draggable'
import type { MenuProps, TreeProps } from 'antd'
import { CaptureTypeProps } from 'minhquanle-ui/es/components/molecules/CaptureScreen/types'
// Assets
import '@antscorp/icons/main.css'

// Services
import TicketService from 'minhquanle-ui/es/services/Ticket'

// Component
import {
  ButtonFeedback,
  ControlGroup,
  ControlLabel,
  DropDown,
  EditorWrapper,
  ErrorMessage,
  FlexCenter,
  Header,
  HiddenBlock,
  IframeHelp,
  Image,
  Label,
  LabelTitle,
  Link,
  Overlay,
  PreviewBox,
  SendFeedback,
  Span,
  Text,
  TitleSearch,
  TreeContent,
  Video,
  Wrapper,
  WrapperBody,
  WrapperBodyModal,
  WrapperContentHelp,
  WrapperFooter,
  WrapperFooterSpace,
  WrapperHeader,
  WrapperIconEditor,
  WrapperImage,
  WrapperInputFile,
  WrapperLinkFiles,
  WrapperLinkItemFiles,
  WrapperLoading,
  WrapperSearch,
} from './styled'
import { Button, Spin, Tree } from 'antd'
import Icon from '@antscorp/icons'
import { Editor } from '@tinymce/tinymce-react'
import {
  LoadingOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from '@ant-design/icons'

// Atoms
import { Input } from 'minhquanle-ui/es/components/atoms'

// Molecules
import {
  PopupDraggable,
  Select,
  CaptureScreen,
  ChatBox,
} from 'minhquanle-ui/es/components/molecules'

// Constants
import {
  ATTACH_CAPTURE_TYPES,
  ATTACH_KEYS,
  DEFAULT_POSITIONS,
  MENU_KEYS,
  MESSAGE_TYPE,
  PORTALS_ANTSOMI_PACKAGE_UI_KEY,
  PORTALS_ANTSOMI_PACKAGE_UI_KEY_POPUP,
  REPORT_TYPES,
  TABS_SHARING_SCREEN,
  TICKET_CUSTOM_MESSAGE_KEY,
} from './constants'
import { THEME } from 'minhquanle-ui/es/constants'

// Utils
import {
  base64ToFile,
  convertBlobToFile,
  generateUniqueId,
  mergeAudioStreams,
} from 'minhquanle-ui/es/components/molecules/CaptureScreen/utils'
import { expendDefault, formatParams, postCustomEvent } from './utils'
import { DataNode, DirectoryTreeProps } from 'antd/es/tree'
import {
  CameraIcon,
  CaptureIcon,
  OpenUrlIcon,
  BugIcon,
  RequestIcon,
} from 'minhquanle-ui/es/components/icons'

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />
const Loading = ({ isLoading, height, width }) =>
  isLoading && (
    <WrapperLoading className="loader-container" height={height} width={width}>
      <Spin indicator={antIcon} />
    </WrapperLoading>
  )

type ReportValueType = (typeof REPORT_TYPES)[keyof typeof REPORT_TYPES]

const Help: React.FC<IHelpProps> = (props) => {
  const { configs, triggerType, boundsDraggable, isShowResizeHover, children } =
    props
  const {
    apiKey,
    domainPlatform,
    appCode,
    domain,
    portalId,
    token,
    userId,
    config,
    domainTicket,
    avatar,
  } = configs

  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false)
  const [defaultPositionDrawActions, setDefaultPositionDrawActions] =
    useState<ControlPosition>(DEFAULT_POSITIONS.capture)
  const [defaultPositionRecordActions, setDefaultPositionRecordActions] =
    useState<ControlPosition>(DEFAULT_POSITIONS.record)
  const [isMainLoading, setIsMainLoading] = useState<boolean>(false)
  const [isShowPopup, setIsShowPopup] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [type, setType] = useState<ReportValueType>(REPORT_TYPES.HELP)
  const [isValidAll, setIsValidAll] = useState<boolean>(true)
  const [valueInput, setValueInput] = useState<ValueFormProps>({
    title: '',
    ticketType: '',
    priority: 'normal',
    category: '',
    ownerId: Number(userId),
    followers: [],
    message: '',
    files: [],
    referenceUrl: '',
  })
  const [errFile, setErrFile] = useState<any>({
    isError: false,
    message: '',
  })
  const [pathHelp, setHelp] = useState<string>('')
  const [urlImageDrawer, setUrlImageDrawer] = useState<string>('')
  const [urlVideoPreview, setUrlVideoPreview] = useState<any>('')
  const [imageDrew, setImageDrew] = useState<ImageDrewProps>({
    imageName: '',
    dataURL: '',
  })
  const [isOpenImageDrawer, setIsOpenImageDrawer] = useState<boolean>(false)
  const [captureType, setCaptureType] = useState<CaptureTypeProps>(
    ATTACH_KEYS.CAPTURE
  )
  const [open, setOpen] = useState<boolean>(false)
  const [dataRecorded, setDataRecorded] = useState<any>([])
  const [dataListHelp, setDataListHelp] = useState<any>([])
  const [isMute, setIsMute] = useState<boolean>(false)
  const [appTargeting, setAppTargeting] = useState<AllAppOptionsProps>({
    label: '',
    value: '',
  })
  const [autoExpandParent, setAutoExpandParent] = useState(true)
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([])
  const [searchValue, setSearchValue] = useState('')
  const [allAppOptions, setAllAppOptions] = useState<Array<AllAppOptionsProps>>(
    []
  )
  const [isForceStopRecorder, setIsForceStopRecorder] = useState<boolean>(false)
  const [isLoadingListHelp, setIsLoadingHelp] = useState<boolean>(true)
  const recorderRef = useRef<MediaRecorder>()
  const streamTracks = useRef<StreamTrackProps>()

  // const showModal = (captureKey: CaptureTypeProps) => {
  //   setOpen(true);
  //   setCaptureType(captureKey);
  // };

  const items = useMemo(
    (): any => [
      {
        label: (
          <a
            href="https://docs.antsomi.com/cdp-365-user-guide-en/release-note/2023"
            target="_blank"
            rel="noreferrer"
          >
            <Label
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: 33,
                width: '100%',
                marginTop: 8,
              }}
            >
              New features & announcements
              <OpenUrlIcon
                style={{
                  fill: THEME.token?.colorIcon,
                  maxWidth: 24,
                  maxHeight: 24,
                }}
              />
            </Label>
          </a>
        ),
        key: MENU_KEYS.FEATURE_ANNOUNCEMENT,
      },
      {
        label: <Label>Leave feedback</Label>,
        key: MENU_KEYS.FEEDBACK,
      },
      {
        label: <Label>Get Help</Label>,
        key: MENU_KEYS.HELP,
      },
      {
        label: <Label>Get ideas with ChatGPT</Label>,
        key: MENU_KEYS.CHAT,
      },
      {
        type: 'divider',
      },
      {
        label: (
          <a
            href={`${domainTicket}/${portalId}/#/${userId}/tickets`}
            target="_blank"
            rel="noreferrer"
          >
            <Label className="verify-support">Verify support request</Label>
          </a>
        ),
        key: MENU_KEYS.SUPPORT,
      },
    ],
    [domainTicket, portalId, userId]
  )

  const modifiedDomain = useMemo(() => {
    const regex = /^(https?:)/

    if (regex.test(domain)) {
      return domain.replace(regex, '')
    }

    return domain
  }, [domain])

  const handleCancel = () => {
    setOpen(false)
  }
  const handleClick = (data: MenuItemTypeProps): any => {
    const { key = '' } = data
    switch (key) {
      case MENU_KEYS.FEEDBACK: {
        setType(REPORT_TYPES.FEEDBACK)
        setTitle('Send feedback to Antsomi')
        setIsShowPopup(true)
        break
      }
      case MENU_KEYS.HELP: {
        fetchDataListHelp()
        setType(REPORT_TYPES.HELP)
        setTitle('Get Help')
        setIsShowPopup(true)
        break
      }
      case MENU_KEYS.CHAT: {
        setType(REPORT_TYPES.CHAT)
        setTitle('Get ideas with ChatGPT')
        setIsShowPopup(true)
        break
      }
      default: {
        setIsOpenDropdown(false)
        break
      }
    }
  }

  const handleUploadFile = async (params) => {
    try {
      setIsMainLoading(true)

      const res = await TicketService.tickets.callApi.upload(
        params,
        domainTicket,
        token,
        config,
        userId,
        'ticket'
      )

      if (res.code === 200) {
        setValueInput((prevVal) => ({
          ...prevVal,
          files: [...valueInput.files, res.data],
        }))
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error :>', error)
    } finally {
      setIsMainLoading(false)
    }
  }

  useEffect(() => {
    const handleFetchAllApps = async () => {
      try {
        setIsMainLoading(true)

        const res = await TicketService.tickets.callApi.getCustomFields(
          {},
          domainTicket,
          token,
          config,
          userId,
          'get-custom-fields'
        )

        if (res && res.code === 200) {
          const { data } = res

          if (data && Array.isArray(data.fields)) {
            const features = data.fields.find(
              (item) => item.value === 'feature'
            )
            const { field_options = [] } = features || {}

            const temp = field_options.map((app) => ({
              label: app.name,
              value: app.value,
              raw: app,
            }))
            setAppTargeting(temp[0])
            setAllAppOptions(temp)
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error :>', error)
      } finally {
        setIsMainLoading(false)
      }
    }

    if (isEmpty(allAppOptions)) {
      handleFetchAllApps()
    }
  }, [allAppOptions, config, domainTicket, token, userId])

  const handleOnchangeFile = (e) => {
    const limitSize = 50 * 1024 * 1024
    const sizeFile = e.target?.files[0]?.size
    if (sizeFile >= limitSize) {
      setErrFile({
        isError: true,
        message: '*Maximum upload file size: 50MB',
      })
    } else {
      const formData = new FormData()
      formData.append('file', e.target.files[0])
      const params = {
        data: formData,
      }
      setErrFile({
        isError: false,
        message: '',
      })
      handleUploadFile(params)
    }
  }

  const handleRemoveFile = (token) => {
    let newListFile = valueInput.files
    newListFile = newListFile.filter((list) => list?.token !== token)
    setValueInput((prevVal) => ({ ...prevVal, files: newListFile }))
  }

  const handleResetData = () => {
    setUrlImageDrawer('')
    setUrlVideoPreview('')
    setIsValidAll(true)
    setIsOpenDropdown(false)
    setValueInput((prev) => ({
      ...prev,
      message: '',
      title: '',
      files: [],
    }))
    setIsShowPopup(false)
    setErrFile({
      isError: false,
      message: '',
    })
    setImageDrew({
      imageName: '',
      dataURL: '',
    })
    setDataRecorded([])
    setSearchValue('')
    setAutoExpandParent(false)
    setExpandedKeys([])
  }

  useEffect(() => () => handleResetData(), [])
  useEffect(() => {
    if (dataRecorded) {
      const dataRecordedBlob = new Blob(dataRecorded, { type: 'video/mp4' })
      const url = URL.createObjectURL(dataRecordedBlob)
      setUrlVideoPreview(url)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataRecorded])

  useEffect(() => {
    if (isForceStopRecorder && !isEmpty(dataRecorded)) {
      setDataRecorded([])
      setIsForceStopRecorder(false)
    }
  }, [dataRecorded, isForceStopRecorder])

  useEffect(
    () => () => {
      if (streamTracks.current) {
        const { desktopStream, voiceStream } = streamTracks.current
        if (desktopStream && voiceStream) {
          desktopStream.getTracks().forEach((track) => track.stop())
          voiceStream.getTracks().forEach((track) => track.stop())
        }
      }
    },
    []
  )

  const fetchDataListHelp = () => {
    setIsLoadingHelp(true)
    TicketService.help.callApi
      .getList({ appCode, role: '1' }, domainPlatform, token, config, userId)
      .then((res) => {
        if (res && res.data.code === 200 && res.data) {
          const { data } = res.data
          setDataListHelp(data)
          setIsLoadingHelp(false)
          setExpandedKeys(expendDefault(data))
        } else {
          setIsLoadingHelp(true)
        }
      })
      .catch((err) => {
        // console.log('err ===>', err)
      })
  }
  const handleCreateRecorder = async () => {
    try {
      let controller
      if (
        'CaptureController' in window &&
        'setFocusBehavior' in (window as any).CaptureController.prototype
      ) {
        controller = new (window as any).CaptureController()
        controller.setFocusBehavior('no-focus-change')
      }

      const displayMediaOptions: any = {
        // preferCurrentTab: true,
        video: {
          cursor: 'always',
        },
        audio: true,
        controller,
        selfBrowserSurface: 'include',
      }

      const desktopStream = await navigator.mediaDevices.getDisplayMedia(
        displayMediaOptions
      )
      const voiceStream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: !isMute,
      })

      const tracks = [
        ...desktopStream.getVideoTracks(),
        ...mergeAudioStreams(desktopStream, voiceStream),
      ]

      const stream = new MediaStream(tracks)
      const recorder = new MediaRecorder(stream)
      const data: Array<any> = []

      // ondataavailable -> fired periodically each time timeslice millisecond of media have been recorded
      // or when the entire media is recorded if no timeslice is specified
      recorder.ondataavailable = (event) => data.push(event.data)

      const stopped = new Promise((resolve, reject) => {
        recorder.onstop = resolve
        recorder.onerror = (event: any) => reject(event.name)
      })
      Promise.all([stopped, recorder]).then(() => {
        setDataRecorded(data)
      })

      const videoTrack = desktopStream.getVideoTracks()[0]
      // eslint-disable-next-line func-names
      videoTrack.onended = function () {
        if (recorder) {
          recorder.stop()
        }
        desktopStream.getTracks().forEach((track) => track.stop())
        voiceStream.getTracks().forEach((track) => track.stop())
        setIsShowPopup(true)
        setIsOpenImageDrawer(false)
      }

      recorderRef.current = recorder
      streamTracks.current = {
        desktopStream,
        voiceStream,
      }
      setIsForceStopRecorder(false)
      setIsOpenImageDrawer(true)
      handleCancel()
      setIsShowPopup(false)
    } catch (error) {
      console.log('error :>', error)
      setIsShowPopup(true)
    }
  }

  const handleCaptureScreen = async () => {
    try {
      let controller
      if (
        'CaptureController' in window &&
        'setFocusBehavior' in (window as any).CaptureController.prototype
      ) {
        controller = new (window as any).CaptureController()
        controller.setFocusBehavior('no-focus-change')
      }
      const displayMediaOptions: any = {
        // preferCurrentTab: true,
        video: {
          displaySurface: 'browser',
          cursor: 'always',
        },
        audio: false,
        surfaceSwitching: 'include',
        controller,
        selfBrowserSurface: 'include',
      }

      // navigator.mediaDevices.enumerateDevices().then(value => {
      //   console.log('insideee.dev - list :>', value);
      // });

      // asking permission to use a media input to record current tab
      const supportedConstraints =
        navigator.mediaDevices.getSupportedConstraints()

      // if (supportedConstraints.displaySurface) {
      //   displayMediaOptions.video.displaySurface = 'monitor';
      // }
      if (supportedConstraints.width) {
        displayMediaOptions.video.width = { ideal: 1920, max: 1920 }
      }
      if (supportedConstraints.height) {
        displayMediaOptions.video.heigh = { ideal: 1080 }
      }
      if (supportedConstraints.aspectRatio) {
        displayMediaOptions.video.aspectRatio = 1.777777778
      }
      if (supportedConstraints.frameRate) {
        displayMediaOptions.video.frameRate = { max: 30 }
      }
      const stream = await navigator.mediaDevices.getDisplayMedia(
        displayMediaOptions
      )
      const video = document.createElement('video')

      video?.addEventListener('loadedmetadata', () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        // passing video width & height as canvas width & height
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight

        video.play() // playing the video so the drawn image won't be black or blank
        // drawing an image of the captured video stream
        ctx?.drawImage(video, 0, 0, canvas.width, canvas.height)
        stream.getVideoTracks()[0].stop() // terminating first video track of the stream

        // passing canvas data url as screenshot preview src
        setUrlImageDrawer(canvas.toDataURL())
        setIsOpenImageDrawer(true)
        handleCancel()
        setIsShowPopup(false)
      })
      video.srcObject = stream // passing capture stream data as video source object
    } catch (error) {
      // if image couldn't capture by any reason, then alert the msg
      // eslint-disable-next-line no-console
      console.info('Failed to capture screenshot!', error)
      setIsShowPopup(true)
    }
  }

  const callback = (type: string, dataIn?: any): void => {
    switch (type) {
      case 'ON_CLOSE_POPUP': {
        handleResetData()
        break
      }
      case 'ON_BACK_POPUP': {
        setType(REPORT_TYPES.HELP)
        break
      }
      case REPORT_TYPES.ISSUE: {
        setTitle('Report an issue to Antsomi')
        setType(type)
        break
      }
      case REPORT_TYPES.IDEA: {
        setTitle('Request an idea to Antsomi')
        setType(type)
        break
      }
      case 'CLOSE_DRAWER': {
        setIsOpenImageDrawer(false)
        setIsShowPopup(true)

        if (captureType === ATTACH_KEYS.CAPTURE) {
          setUrlImageDrawer('')
        } else if (captureType === ATTACH_KEYS.RECORD) {
          setIsForceStopRecorder(true)
          const recorder = recorderRef.current as MediaRecorder
          const { desktopStream, voiceStream } =
            streamTracks.current as StreamTrackProps

          if (recorder && recorder.state === 'recording') {
            recorder.stop()
          }

          if (desktopStream && voiceStream) {
            desktopStream.getTracks().forEach((track) => track.stop())
            voiceStream.getTracks().forEach((track) => track.stop())
          }
        }
        break
      }
      case 'ON_DRAWER_DONE': {
        setIsOpenImageDrawer(false)
        setImageDrew(dataIn as ImageDrewProps)
        setIsShowPopup(true)
        break
      }
      case 'STOP_RECORDER': {
        setIsOpenImageDrawer(false)
        setIsShowPopup(true)
        streamTracks.current = undefined
        break
      }
      case 'ON_CHANGE_MUTE': {
        setIsMute((prevMute) => !prevMute)
        break
      }
      case 'SET_POSITION_DRAG': {
        const { name = '', x = 0, y = 0 } = dataIn

        if (name === ATTACH_KEYS.CAPTURE) {
          setDefaultPositionDrawActions({ x, y })
        }
        if (name === ATTACH_KEYS.RECORD) {
          setDefaultPositionRecordActions({ x, y })
        }
        break
      }
      case 'RESET_POSITION_DRAG': {
        setDefaultPositionDrawActions(DEFAULT_POSITIONS.capture)
        setDefaultPositionRecordActions(DEFAULT_POSITIONS.record)
        break
      }
      default: {
        break
      }
    }
  }

  const handleCreateTicket = async (params) => {
    try {
      setIsMainLoading(true)
      let attachments: string[] = []
      const {
        imageDrew = {},
        dataRecorded = [],
        type = '',
        ...restParams
      } = params
      if (params.attachments && !isEmpty(params.attachments)) {
        attachments = [...params.attachments]
      }

      if (imageDrew.dataURL) {
        const imageFile = base64ToFile(
          imageDrew.dataURL,
          `${imageDrew.imageName}-${generateUniqueId()}.png`
        )
        if (imageFile) {
          const uploadFormData = new FormData()

          uploadFormData.append('file', imageFile as File)
          const uploadFileParams = {
            data: uploadFormData,
          }

          const res = await TicketService.tickets.callApi.upload(
            uploadFileParams,
            domainTicket,
            token,
            config,
            userId,
            'ticket'
          )
          if (res && res.code === 200 && res.data) {
            attachments.push(res.data.token)
          }
        }
      }

      if (!isEmpty(dataRecorded)) {
        const blob = dataRecorded[0]
        const blobName = `video-${generateUniqueId()}.mp4`
        const videoFile = convertBlobToFile(blob, blobName)

        if (videoFile) {
          const uploadFormData = new FormData()
          uploadFormData.append('file', videoFile)

          const res = await TicketService.tickets.callApi.upload(
            { data: uploadFormData },
            domainTicket,
            token,
            config,
            userId,
            'ticket'
          )
          if (res && res.code === 200 && res.data) {
            attachments.push(res.data.token)
          }
        }
      }

      const dataToAPI = {
        ...restParams,
        attachments,
        networkId: Number(portalId),
        ticketType: type === REPORT_TYPES.ISSUE ? 'bug' : 'request',
      }

      const res = await TicketService.tickets.callApi.createTicket(
        dataToAPI,
        domainTicket,
        token,
        config,
        userId
      )

      if (res.code === 200) {
        postCustomEvent(TICKET_CUSTOM_MESSAGE_KEY, {
          type: MESSAGE_TYPE.TICKET_CREATE_STATUS,
          value: true,
        })
      } else {
        postCustomEvent(TICKET_CUSTOM_MESSAGE_KEY, {
          type: MESSAGE_TYPE.TICKET_CREATE_STATUS,
          value: false,
        })
      }

      handleResetData()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error :>', error)
    } finally {
      setIsMainLoading(false)
    }
  }

  const handleSubmit = () => {
    if (!valueInput.title || !valueInput.message) {
      setIsValidAll(false)
      return
    }

    if (!errFile.isError) {
      const params = formatParams({ ...valueInput, feature: appTargeting })
      handleCreateTicket({
        ...params,
        type,
        imageDrew,
        dataRecorded,
        submitterId: Number(userId),
      })
    }
  }

  // console.log('insideee.dev - data :>', valueInput, appTargeting, errFile);

  const handleShareCapture = (type: CaptureTypeProps) => {
    setCaptureType(type)
    setIsShowPopup(false)
    return () => {
      if (type === ATTACH_KEYS.CAPTURE) {
        handleCaptureScreen()
      } else {
        handleCreateRecorder()
      }
    }
  }

  const handleChangeAttachFile = (
    key: ATTACH_KEYS.CAPTURE | ATTACH_KEYS.RECORD,
    type: 'edit' | 'delete'
  ) => {
    if (type === 'edit') {
      // showModal(key);
      handleShareCapture(key)()
    } else if (type === 'delete') {
      if (key === ATTACH_KEYS.CAPTURE) {
        setImageDrew({
          imageName: '',
          dataURL: '',
        })
      } else if (key === ATTACH_KEYS.RECORD) {
        setDataRecorded([])
      }
    }
  }
  const onSelect = (selectedKeys, info) => {
    const { node } = info
    const { path } = node as HelpDocItem
    if (path) {
      setHelp(path)
      setType(REPORT_TYPES.HELP_V1)
    }

    // console.log('selected', selectedKeys, info);
  }

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys)
    setAutoExpandParent(false)
  }

  const getParentKey = (key: React.Key, tree: DataNode[]): React.Key => {
    let parentKey: React.Key
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i]
      if (node.children) {
        if (node.children.some((item) => item.key === key)) {
          parentKey = node.key
        } else if (getParentKey(key, node.children)) {
          parentKey = getParentKey(key, node.children)
        }
      }
    }
    return parentKey!
  }

  // const onExpand: DirectoryTreeProps['onCheck'] = (checkedKeys, info) => {
  //   console.log('onCheck', checkedKeys, info);
  // };
  const dataList: { key: React.Key; title: any }[] = []
  const generateList = (data: DataNode[]) => {
    for (let i = 0; i < data.length; i++) {
      const node = data[i]
      const { key, title } = node
      dataList.push({ key, title })
      if (node.children) {
        generateList(node.children)
      }
    }
  }
  generateList(dataListHelp)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const newExpandedKeys = dataList
      .map((item) => {
        if (
          item.title.toString().toLowerCase().indexOf(value.toLowerCase()) > -1
        ) {
          return getParentKey(item.key, dataListHelp)
        }
        return null
      })
      .filter((item, i, self) => item && self.indexOf(item) === i)
    setExpandedKeys(newExpandedKeys as React.Key[])
    setSearchValue(value)
    setAutoExpandParent(true)
  }

  const renderIcon = (name, style) =>
    ({
      'icon-ants-capture': <CaptureIcon style={style} />,
      'icon-ants-camera': <CameraIcon style={style} />,
    }[name])

  const treeData = useMemo(() => {
    const loop = (data: HelpDocItem[]): HelpDocItem[] =>
      data.map((item) => {
        const strTitle = item.title as string
        const index = strTitle
          .toString()
          .toLowerCase()
          .indexOf(searchValue.toLowerCase())
        const beforeStr = strTitle.substring(0, index)
        const afterStr = strTitle.slice(index + searchValue.length)
        const title =
          index > -1 ? (
            <Span styles={item.children}>
              {beforeStr}
              <TitleSearch>{searchValue}</TitleSearch>
              {afterStr}
            </Span>
          ) : (
            <Span styles={item.children}>{strTitle}</Span>
          )
        if (item.children) {
          return { title, key: item.key, children: loop(item.children) }
        }
        return {
          title,
          key: item.key,
          path: item.path,
        }
      })

    return loop(dataListHelp)
  }, [searchValue, dataListHelp])
  const renderAttachActions = (): React.ReactNode =>
    ATTACH_CAPTURE_TYPES.map((item) => (
      <ControlGroup
        key={item.key}
        size={10}
        direction="vertical"
        style={{ width: 'auto' }}
      >
        {((item.key === ATTACH_KEYS.CAPTURE && imageDrew.dataURL) ||
          (!isForceStopRecorder &&
            !isEmpty(dataRecorded) &&
            urlVideoPreview &&
            item.key === ATTACH_KEYS.RECORD)) && (
          <PreviewBox>
            <Overlay className="overlay-preview">
              <FlexCenter style={{ height: '100%', gap: 10 }}>
                {item.actions?.map((action) => (
                  <ButtonFeedback
                    key={`${item.key}-${action.key}`}
                    height={28}
                    style={{
                      borderRadius: `${THEME.token?.borderRadius}px`,
                      width: 34,
                    }}
                    borderRadiusCustom={3}
                    icon={
                      <Icon
                        type={action.icon}
                        style={{
                          color: THEME.token?.colorPrimary,
                          fontSize: '24px',
                        }}
                      />
                    }
                    onClick={() =>
                      handleChangeAttachFile(
                        item.key,
                        action.key as 'edit' | 'delete'
                      )
                    }
                  />
                ))}
              </FlexCenter>
            </Overlay>
            {item.key === ATTACH_KEYS.CAPTURE ? (
              <Image src={imageDrew.dataURL} alt="send feedback" isFull />
            ) : (
              <Video
                src={urlVideoPreview}
                muted
                autoPlay={false}
                controls={false}
              />
            )}
          </PreviewBox>
        )}
        <ButtonFeedback
          height={28}
          borderRadiusCustom={3}
          style={{
            borderRadius: `${THEME.token?.borderRadius}px`,
            marginBottom: 58,
          }}
          icon={
            // <Icon
            //   type={item.icon}
            //   style={{ color: `${THEME.token?.colorPrimary}`, fontSize: '24px' }}
            // />
            renderIcon(item.icon, {
              fill: THEME.token?.colorPrimary,
              maxWidth: '24px',
            })
          }
          // onClick={() => showModal(item.key)}
          onClick={() => handleShareCapture(item.key)()}
        >
          {item.label}
        </ButtonFeedback>
      </ControlGroup>
    ))

  const renderContentPopup = (type: string): React.ReactNode | null => {
    switch (type) {
      case REPORT_TYPES.FEEDBACK: {
        return (
          <SendFeedback>
            <FlexCenter>
              <WrapperImage>
                <HiddenBlock />
                <Image
                  src="https://st-media-template.antsomi.com/upload/2023/06/16/aa5d68c3-40a2-425f-beb4-cb1abd89e8cb.png"
                  alt="send feedback"
                  style={{ maxWidth: 'unset' }}
                />
              </WrapperImage>
            </FlexCenter>
            <FlexCenter style={{ margin: '50px 3px 0' }}>
              <FlexCenter
                onClick={(e) => {
                  e.stopPropagation()
                  callback(REPORT_TYPES.ISSUE)
                }}
              >
                <ButtonFeedback
                  icon={
                    // <Icon
                    //   type="icon-ants-bug"
                    //   style={{ color: `${THEME.token?.colorIcon}`, fontSize: '24px' }}
                    // />
                    <BugIcon
                      style={{ fill: THEME.token?.colorIcon, maxWidth: '24px' }}
                    />
                  }
                  style={{ marginRight: 15 }}
                >
                  <Text>Report an Issue</Text>
                </ButtonFeedback>
              </FlexCenter>
              <FlexCenter
                onClick={(e) => {
                  e.stopPropagation()
                  callback(REPORT_TYPES.IDEA)
                }}
              >
                <ButtonFeedback
                  icon={
                    // <Icon
                    //   type="icon-ants-idea"
                    //   style={{ color: `${THEME.token?.colorIcon}`, fontSize: '24px' }}
                    // />
                    <RequestIcon
                      style={{ fill: THEME.token?.colorIcon, maxWidth: '24px' }}
                    />
                  }
                >
                  <Text>Request an Idea</Text>
                </ButtonFeedback>
              </FlexCenter>
            </FlexCenter>
          </SendFeedback>
        )
      }
      case REPORT_TYPES.IDEA:
      case REPORT_TYPES.ISSUE: {
        return (
          <ControlGroup size={20} direction="vertical">
            {/* {type === REPORT_TYPES.ISSUE && ( */}
            <ControlGroup size={0} direction="vertical">
              <ControlLabel>
                When you noticed this issue, what were you trying to do?
              </ControlLabel>
              <Select
                defaultValue={appTargeting}
                value={appTargeting}
                style={{ width: '100%' }}
                onChange={(_, option) =>
                  setAppTargeting(option as AllAppOptionsProps)
                }
                options={allAppOptions}
              />
            </ControlGroup>
            {/* )} */}
            <ControlGroup size={0} direction="vertical">
              <ControlLabel>
                Title <span style={{ color: THEME.token?.red8 }}>*</span>
              </ControlLabel>
              <Input
                placeholder="Enter ticket title"
                value={valueInput.title}
                onChange={(event) => {
                  const { value } = event?.target
                  event.stopPropagation()
                  setValueInput((prev) => ({ ...prev, title: value }))
                }}
              />
              <ErrorMessage isShow={!isValidAll && !valueInput?.title}>
                *This field can&apos;t be empty
              </ErrorMessage>
            </ControlGroup>
            <ControlGroup size={0} direction="vertical">
              <ControlLabel>
                Message <span style={{ color: THEME.token?.red8 }}>*</span>
              </ControlLabel>
              <EditorWrapper>
                <Editor
                  apiKey={apiKey}
                  value={valueInput.message}
                  init={{
                    height: 200,
                    width: '100%',
                    max_height: 800,
                    max_width: 800,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link tinydrive image emoticons charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media paste code help wordcount ', //
                    ],
                    toolbar:
                      'formatselect | bold italic underline strikethrough code | image emoticons | \
                                  forecolor backcolor preview link |\
                                  alignleft aligncenter alignright alignjustify outdent indent |\
                                  numlist bullist checklist undo redo',
                    tinydrive_token_provider: `//${modifiedDomain}/hub/thirdparty-services/v2.0/tinymce?portalId=${portalId}&token=${token}`,
                    skin: 'snow',
                    toolbar_mode: 'sliding',
                    content_css: false,
                    branding: false,
                    resize: false,
                    statusbar: false,
                    setup(editor) {
                      editor.on('init', (e) => {
                        editor.getBody().style.fontSize = `${THEME.token?.fontSize}px`
                      })
                    },
                    placeholder: 'Enter your comment...',
                    entity_encoding: 'raw',
                    paste_data_images: true,
                  }}
                  // disabled={!!props.disabled}
                  // outputFormat='text'
                  onEditorChange={(content) =>
                    setValueInput((prevVal) => ({
                      ...prevVal,
                      message: content,
                    }))
                  }
                />
                <div>
                  {valueInput.files?.length > 0 && (
                    <WrapperLinkFiles>
                      {valueInput.files?.map((file) => (
                        <WrapperLinkItemFiles key={file?.token}>
                          <span
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                            }}
                          >
                            <Icon
                              type="icon-ants-hyperlink"
                              style={{
                                color: THEME.token?.colorPrimary,
                                fontSize: '24px',
                              }}
                            >
                              link
                            </Icon>
                            <Text
                              style={{
                                color: '#000',
                                fontSize: `${THEME.token?.fontSize}px`,
                              }}
                            >
                              {file?.file_name}
                            </Text>
                          </span>
                          <Icon
                            type="icon-ants-remove-slim"
                            style={{
                              color: THEME.token?.colorIcon,
                              fontSize: '12px',
                              cursor: 'pointer',
                            }}
                            onClick={() => handleRemoveFile(file?.token)}
                          >
                            clear
                          </Icon>
                        </WrapperLinkItemFiles>
                      ))}
                    </WrapperLinkFiles>
                  )}
                  <WrapperIconEditor
                    borderTop={Boolean(valueInput.files?.length)}
                  >
                    <WrapperInputFile>
                      <label htmlFor="fileImage">
                        <Icon
                          type="icon-ants-hyperlink"
                          style={{
                            color: THEME.token?.colorPrimary,
                            fontSize: '24px',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            cursor: 'pointer',
                          }}
                        >
                          link
                        </Icon>
                      </label>
                      <input
                        type="file"
                        style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          display: 'none',
                        }}
                        name="fileImage"
                        id="fileImage"
                        onChange={handleOnchangeFile}
                      />
                    </WrapperInputFile>
                  </WrapperIconEditor>
                </div>
              </EditorWrapper>
              {errFile.isError ? (
                <ErrorMessage isShow={errFile.isError}>
                  {errFile.message}
                </ErrorMessage>
              ) : (
                <ErrorMessage isShow={!isValidAll && !valueInput?.message}>
                  *This field can&apos;t be empty
                </ErrorMessage>
              )}
            </ControlGroup>
            <ControlGroup size={0} direction="vertical">
              <ControlLabel>Attached Screenshot/ Video Recorded</ControlLabel>
              <FlexCenter
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: 10,
                }}
              >
                {renderAttachActions()}
              </FlexCenter>
            </ControlGroup>
          </ControlGroup>
        )
      }
      case REPORT_TYPES.HELP: {
        return (
          <Wrapper>
            <WrapperSearch placeholder="Search..." onChange={onChange} />
            <div style={{ padding: '13px 15px' }}>
              <LabelTitle>Popular Help Resources</LabelTitle>
              {isLoadingListHelp && (
                <WrapperLoading
                  style={{ background: 'none' }}
                  height="80%"
                  width="100%"
                >
                  <Spin indicator={antIcon} />
                </WrapperLoading>
              )}
              {treeData.length > 0 &&
                treeData.map((item) => (
                  <WrapperContentHelp>
                    <TreeContent
                      onSelect={onSelect}
                      onExpand={onExpand}
                      treeData={[item]}
                      expandedKeys={expandedKeys}
                      autoExpandParent={autoExpandParent}
                    />
                  </WrapperContentHelp>
                ))}
            </div>
          </Wrapper>
        )
      }
      case REPORT_TYPES.CHAT: {
        return (
          <ChatBox
            domain={domainTicket}
            userId={userId}
            token={token}
            avatar={avatar}
            style={{
              height: 'calc(100% - 50px)',
            }}
            withoutBox
          />
        )
      }
      case REPORT_TYPES.HELP_V1: {
        return (
          <Wrapper>
            <IframeHelp src={pathHelp} />
          </Wrapper>
        )
      }
      default: {
        return null
      }
    }
  }

  const renderPopupLayout = (type: ReportValueType): React.ReactNode => (
    <>
      <Loading isLoading={isMainLoading} width="100%" height="100%" />
      <WrapperHeader className="cursor">
        <Header>{title}</Header>
      </WrapperHeader>
      <WrapperBody
        className="popup-content"
        style={{
          padding:
            type === REPORT_TYPES.CHAT ||
            type === REPORT_TYPES.HELP ||
            type === REPORT_TYPES.HELP_V1
              ? '0'
              : '13px 15px',
        }}
      >
        {renderContentPopup(type)}
      </WrapperBody>
      {![
        REPORT_TYPES.FEEDBACK,
        REPORT_TYPES.HELP,
        REPORT_TYPES.CHAT,
        REPORT_TYPES.HELP_V1,
      ].includes(type) && (
        <WrapperFooter>
          <Button
            type="primary"
            style={{ marginRight: 15, fontWeight: 'bold' }}
            onClick={() => handleSubmit()}
          >
            Send
          </Button>
          <Button onClick={() => callback('ON_CLOSE_POPUP')}>Cancel</Button>
        </WrapperFooter>
      )}
      {type === REPORT_TYPES.HELP_V1 && (
        <WrapperFooterSpace>
          <Button
            type="primary"
            style={{ marginRight: 15, fontWeight: 'bold' }}
            onClick={() => callback('ON_BACK_POPUP')}
          >
            BACK
          </Button>
          <Link
            target="_blank"
            href={pathHelp}
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
            }}
          >
            Open in new tab
            <OpenUrlIcon
              style={{
                fill: THEME.token?.colorPrimary,
                maxWidth: 18,
                maxHeight: 18,
              }}
            />
          </Link>
        </WrapperFooterSpace>
      )}
    </>
  )

  return (
    <>
      <DropDown
        menu={{
          style: { minWidth: 250, padding: 0 },
          items: items as any,
          onClick: (info) => handleClick(info as MenuItemTypeProps),
        }}
        onOpenChange={(isOpen) => setIsOpenDropdown(isOpen)}
        trigger={triggerType}
        placement="bottom"
        className="dropdown-helps"
      >
        {children || (
          <Button
            style={{
              width: 36,
              height: 36,
              borderRadius: '5px',
            }}
            icon={
              <QuestionCircleOutlined
                style={{
                  color: '#666666',
                  fontSize: '24px',
                  transform: 'unset',
                }}
              />
            }
            className={`${isOpenDropdown ? 'antsomi-btn-default-active' : ''}`}
            onClick={(e) => e.preventDefault()}
          />
        )}
      </DropDown>
      {isShowPopup &&
        createPortal(
          <PopupDraggable
            isHiddenResizing
            bounds={boundsDraggable}
            isShowResizeHover={isShowResizeHover}
            callback={callback}
            styleContainer={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
            }}
          >
            {renderPopupLayout(type)}
          </PopupDraggable>,
          document.body,
          PORTALS_ANTSOMI_PACKAGE_UI_KEY_POPUP
        )}
      {isOpenImageDrawer &&
        createPortal(
          <CaptureScreen
            recorderConfigs={{
              recorder: recorderRef.current,
              streamTracks: streamTracks.current,
              isMute,
            }}
            defaultPositions={{
              [ATTACH_KEYS.CAPTURE]: defaultPositionDrawActions,
              [ATTACH_KEYS.RECORD]: defaultPositionRecordActions,
            }}
            captureType={captureType}
            src={urlImageDrawer}
            callback={callback}
          />,
          document.body,
          PORTALS_ANTSOMI_PACKAGE_UI_KEY
        )}
      {/* <Modal // Hiện tại dùng Prompt mặc định của Screen Capture API, không dùng Modal custom này
        open={open}
        closable={false}
        title={<Header style={{ display: 'block', padding: 15 }}>Choose what to share</Header>}
        onOk={handleCaptureScreen}
        onCancel={handleCancel}
        footer={
          <WrapperFooter style={{ position: 'unset', padding: 15, textAlign: 'left' }}>
            <Button
              type="primary"
              style={{ marginRight: 7, fontWeight: 'bold' }}
              // onClick={handleCaptureScreen}
              onClick={() => {
                if (captureType === ATTACH_KEYS.CAPTURE) {
                  handleCaptureScreen();
                } else {
                  handleCreateRecorder();
                }
              }}
            >
              Share
            </Button>
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>
          </WrapperFooter>
        }
        style={{ minWidth: 630 }}
      >
        <WrapperBodyModal>
          <Text>cdp.antsomi.com wants to share the contents of your screen.</Text>
          <Tabs size="middle" tabPosition="top" items={TABS_SHARING_SCREEN} />
        </WrapperBodyModal>
      </Modal> */}
    </>
  )
}

Help.defaultProps = {
  triggerType: ['click'],
  boundsDraggable: 'body',
  isShowResizeHover: true,
  configs: {
    apiKey: 'scyw71pj8619analvxs56ppc2w2fj2kpy5vnmflhhc300y35',
    domain: '//sandbox-app.cdp.asia',
    domainTicket: 'https://sandbox-issue.antsomi.com',
    portalId: '33167',
    userId: '1600080515',
    token: '5474r2x214z254a4u2a4y4m503w5p2r5a4s2g4x2l5e4',
    domainPlatform: 'https://platform.ants.tech',
    appCode: 'APP_API_HUB',
    avatar: 'https://c0-platform.ants.tech/avatar/2021/09/20/bldjzfbz33.png',
    config: {
      p_timezone: 'Asia/Hong_Kong',
      api_pid: 33167,
      p_f_longdatetime: "dd MMMM 'at' HH:mm:ss",
      user_language: 'en',
      embeddedData: {},
      INSIGHT_U_OGS: 'uogs',
    },
  },
  children: '',
}
export { Help }
