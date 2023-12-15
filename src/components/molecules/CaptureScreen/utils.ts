// Themes
// import { blackTheme } from './themes/black';

// Types
import { EditorConfigProps } from './types';

// Constants
import { DRAW_KEYS } from './constants';

export const getEditorConfigs = (): EditorConfigProps => ({
  selectionStyle: {
    cornerSize: 20,
    rotatingPointOffset: 70,
  },
  usageStatistics: false,
});

export const initDefaultColors = () => ({
  [DRAW_KEYS.HIGHLIGHT]: '#0f2eae',
  [DRAW_KEYS.COMMENT]: '#0f2eae',
  [DRAW_KEYS.PEN]: '#0f2eae',
  [DRAW_KEYS.ARROW]: '#0f2eae',
  [DRAW_KEYS.HIDE]: '#0f2eae',
});

export const base64ToFile = (dataUrl: string, filename: string) => {
  const arr = dataUrl.split(',');

  if (arr.length) {
    const mime = (arr[0].match(/:(.*?);/) as RegExpMatchArray)[1];
    const bstr = window.atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
};

export const convertBlobToFile = (blob: Blob, fileName: string): File => {
  const file = new File([blob], fileName);
  return file;
};

export const generateUniqueId = () => {
  const randomId = Math.random().toString(36).substring(2);
  const timestamp = Date.now().toString(36);
  return randomId + timestamp;
};

export const mergeAudioStreams = (desktopStream: MediaStream, voiceStream: MediaStream): any[] => {
  const context = new AudioContext();
  const destination = context.createMediaStreamDestination();
  let hasDesktop = false;
  let hasVoice = false;

  if (desktopStream && desktopStream.getAudioTracks().length > 0) {
    // If you don't want to share Audio from the desktop it should still work with just the voice.
    const source1 = context.createMediaStreamSource(desktopStream);
    const desktopGain = context.createGain();
    desktopGain.gain.value = 0.7;
    source1.connect(desktopGain).connect(destination);
    hasDesktop = true;
  }

  if (voiceStream && voiceStream.getAudioTracks().length > 0) {
    const source2 = context.createMediaStreamSource(voiceStream);
    const voiceGain = context.createGain();
    voiceGain.gain.value = 0.7;
    source2.connect(voiceGain).connect(destination);
    hasVoice = true;
  }

  return hasDesktop || hasVoice ? destination.stream.getAudioTracks() : [];
};
