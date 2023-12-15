// Libraries
import React, { useEffect, useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Button, Space } from 'antd';
import { CaptureScreen } from './CaptureScreen';

// Constants
import { ATTACH_KEYS } from 'src/components/organism/Help/constants';

// Types
import { CaptureTypeProps, ControlPositionProps } from './types';
import { ImageDrewProps, StreamTrackProps } from 'src/components/organism/Help/types';

// Utils
import { mergeAudioStreams } from './utils';

const DEFAULT_POSITIONS: ControlPositionProps = {
  [ATTACH_KEYS.CAPTURE]: {
    x: 250,
    y: 0,
  },
  [ATTACH_KEYS.RECORD]: {
    x: 82,
    y: 0,
  },
};

export default {
  title: 'Molecules/CaptureScreen',
  component: CaptureScreen,
  argTypes: {
    callback: {
      control: {
        type: null, // Disable control for callback prop
      },
      table: {
        type: {
          summary: '(type, dataIn) => void',
        },
        defaultValue: {
          summary: '() => void',
        },
      },
      description: 'The callback function to perform these action in component',
    },
    captureType: {
      control: {
        type: 'select',
        options: [ATTACH_KEYS.CAPTURE, ATTACH_KEYS.RECORD],
      },
      description: 'The type of capture to perform.',
      defaultValue: ATTACH_KEYS.CAPTURE,
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: ATTACH_KEYS.CAPTURE,
        },
      },
    },
    isMute: {
      control: 'boolean',
      description: 'Toggle audio recording on/off.',
      defaultValue: false,
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    defaultPositions: {
      control: {
        type: 'object',
      },
      table: {
        type: {
          summary: `{
            capture: {
              x: number,
              y: number,
            },
            record: {
              x: number,
              y: number
            }
          }`,
        },
        defaultValue: {
          summary: JSON.stringify(DEFAULT_POSITIONS),
        },
      },
      description:
        'To initial positions draggable of settings actions bar when start capture/record',
    },
    src: {
      control: {
        type: null, // Disable control for src prop
      },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
      description: 'Base64 string data to action draw',
    },
    recorderConfigs: {
      control: {
        type: null, // Disable control for recorderConfigs prop
      },
      table: {
        type: {
          summary: `{
            isMute: boolean, 
            recorder: RecorderRef, 
            streamTracks: StreamTracksRef
          }`,
        },
        defaultValue: {
          summary: '',
        },
      },
      description: 'Configs for recorder',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A component help you to capture and record on tabs or browsers.',
      },
    },
  },
} as ComponentMeta<typeof CaptureScreen>;

// Default
const Template: ComponentStory<typeof CaptureScreen> = args => {
  const [urlImageDrawer, setUrlImageDrawer] = useState<string>('');
  const [dataRecorded, setDataRecorded] = useState<Array<any>>([]);
  const [captureType, setCaptureType] = useState(ATTACH_KEYS.CAPTURE);
  const [isShowCaptureScreen, setIsShowCaptureScreen] = useState<boolean>(false);
  const [isMute, setIsMute] = useState<boolean>(false);
  const [imageDrew, setImageDrew] = useState<ImageDrewProps>({
    imageName: '',
    dataURL: '',
  });

  const recorderRef = useRef<MediaRecorder>();
  const streamTracks = useRef<StreamTrackProps>();
  const videoPreviewRef: React.RefObject<HTMLVideoElement> = useRef(null);

  const handleCaptureScreen = async () => {
    try {
      let controller;
      if (
        'CaptureController' in window &&
        'setFocusBehavior' in (window as any).CaptureController.prototype
      ) {
        controller = new (window as any).CaptureController();
        controller.setFocusBehavior('no-focus-change');
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
      };

      // navigator.mediaDevices.enumerateDevices().then(value => {
      //   console.log('insideee.dev - list :>', value);
      // });

      // asking permission to use a media input to record current tab
      const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();

      // if (supportedConstraints.displaySurface) {
      //   displayMediaOptions.video.displaySurface = 'monitor';
      // }
      if (supportedConstraints.width) {
        displayMediaOptions.video.width = { ideal: 1920, max: 1920 };
      }
      if (supportedConstraints.height) {
        displayMediaOptions.video.heigh = { ideal: 1080 };
      }
      if (supportedConstraints.aspectRatio) {
        displayMediaOptions.video.aspectRatio = 1.777777778;
      }
      if (supportedConstraints.frameRate) {
        displayMediaOptions.video.frameRate = { max: 30 };
      }
      const stream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
      const video = document.createElement('video');

      video?.addEventListener('loadedmetadata', () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // passing video width & height as canvas width & height
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        video.play(); // playing the video so the drawn image won't be black or blank
        // drawing an image of the captured video stream
        ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
        stream.getVideoTracks()[0].stop(); // terminating first video track of the stream

        // passing canvas data url as screenshot preview src
        setUrlImageDrawer(canvas.toDataURL());
        setIsShowCaptureScreen(true);
      });
      video.srcObject = stream; // passing capture stream data as video source object
    } catch (error) {
      // if image couldn't capture by any reason, then alert the msg
      // eslint-disable-next-line no-console
      console.info('Failed to capture screenshot!', error);
    }
  };

  const handleCreateRecorder = async () => {
    try {
      let controller;
      if (
        'CaptureController' in window &&
        'setFocusBehavior' in (window as any).CaptureController.prototype
      ) {
        controller = new (window as any).CaptureController();
        controller.setFocusBehavior('no-focus-change');
      }

      const displayMediaOptions: any = {
        // preferCurrentTab: true,
        video: {
          cursor: 'always',
        },
        audio: true,
        controller,
        surfaceSwitching: 'include',
        selfBrowserSurface: 'include',
      };

      const desktopStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
      const voiceStream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: !isMute,
      });

      const tracks = [
        ...desktopStream.getVideoTracks(),
        ...mergeAudioStreams(desktopStream, voiceStream),
      ];

      const stream = new MediaStream(tracks);
      const recorder = new MediaRecorder(stream);
      const data: Array<any> = [];

      // ondataavailable -> fired periodically each time timeslice millisecond of media have been recorded
      // or when the entire media is recorded if no timeslice is specified
      recorder.ondataavailable = event => data.push(event.data);

      const stopped = new Promise((resolve, reject) => {
        recorder.onstop = resolve;
        recorder.onerror = (event: any) => reject(event.name);
      });
      Promise.all([stopped, recorder]).then(() => {
        setDataRecorded(data);
      });

      recorderRef.current = recorder;
      streamTracks.current = {
        desktopStream,
        voiceStream,
      };
      setIsShowCaptureScreen(true);
    } catch (error) {
      console.log('error :>', error);
    }
  };

  useEffect(() => {
    if (videoPreviewRef.current && dataRecorded) {
      const dataRecordedBlob = new Blob(dataRecorded, { type: 'video/mp4' });
      const url = URL.createObjectURL(dataRecordedBlob);
      videoPreviewRef.current.src = url;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoPreviewRef.current, dataRecorded]);

  const handleResetData = () => {
    setIsShowCaptureScreen(false);
    setCaptureType(ATTACH_KEYS.CAPTURE);
    setUrlImageDrawer('');
    setImageDrew({
      dataURL: '',
      imageName: '',
    });
    if (videoPreviewRef.current && videoPreviewRef.current?.src) {
      setDataRecorded([]);
      (videoPreviewRef.current.src as any) = null;
    }
  };

  const handleShareCapture = (key: CaptureTypeProps) => {
    handleResetData();

    setCaptureType(key);

    return () => {
      if (key === ATTACH_KEYS.CAPTURE) {
        handleCaptureScreen();
      } else {
        handleCreateRecorder();
      }
    };
  };

  const callback = (type: string, dataIn?: any): void => {
    switch (type) {
      case 'ON_CLOSE_POPUP': {
        handleResetData();
        break;
      }
      case 'CLOSE_DRAWER': {
        setIsShowCaptureScreen(false);

        if (captureType === ATTACH_KEYS.CAPTURE) {
          setUrlImageDrawer('');
        } else if (captureType === ATTACH_KEYS.RECORD) {
          const recorder = recorderRef.current as MediaRecorder;
          const { desktopStream, voiceStream } = streamTracks.current as StreamTrackProps;
          if (recorder && recorder.state === 'recording') {
            recorder.stop();
          }
          if (desktopStream && voiceStream) {
            desktopStream.getTracks().forEach(track => track.stop());
            voiceStream.getTracks().forEach(track => track.stop());
          }
        }
        break;
      }
      case 'ON_DRAWER_DONE': {
        setIsShowCaptureScreen(false);
        setImageDrew(dataIn as ImageDrewProps);
        break;
      }
      case 'STOP_RECORDER': {
        setIsShowCaptureScreen(false);
        streamTracks.current = undefined;
        break;
      }
      case 'ON_CHANGE_MUTE': {
        setIsMute(prevMute => !prevMute);
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <Space direction="vertical" style={{ width: '100%', justifyContent: 'center', gap: 50 }}>
      <Space style={{ width: '100%', justifyContent: 'center', gap: 50 }}>
        <Button onClick={() => handleShareCapture(ATTACH_KEYS.CAPTURE)()}>Start Capture</Button>
        <Button onClick={() => handleShareCapture(ATTACH_KEYS.RECORD)()}>Start Record</Button>
        <Button type="dashed" onClick={() => handleResetData()}>
          Reset Data
        </Button>
      </Space>
      {imageDrew && imageDrew.dataURL && (
        <img src={imageDrew.dataURL} alt="drew capture" style={{ width: '100%', height: '100%' }} />
      )}
      {Array.isArray(dataRecorded) && dataRecorded.length > 0 && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video ref={videoPreviewRef} autoPlay controls style={{ width: '100%', height: '100%' }} />
      )}

      {isShowCaptureScreen && (
        <CaptureScreen
          src={urlImageDrawer}
          captureType={captureType}
          callback={callback}
          defaultPositions={{
            capture: DEFAULT_POSITIONS.capture,
            record: DEFAULT_POSITIONS.record,
          }}
          recorderConfigs={{
            recorder: recorderRef.current,
            streamTracks: streamTracks.current,
            isMute,
          }}
        />
      )}
    </Space>
  );
};

export const Default = Template.bind({});

Default.args = {};
