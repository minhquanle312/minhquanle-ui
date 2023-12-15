// Libraries
import { RefObject, useState, useRef, useEffect, useMemo } from 'react';
import ImageEditor from '@antscorp/image-editor';

// Types
import {
  ColorKeys,
  ColorListProps,
  DrawingModeOptionProps,
  ImageEditorInstanceProps,
  ShapeOptionProps,
} from '../types';

// Utils
import { getEditorConfigs } from '../utils';

// Constants
import { DRAW_KEYS } from '../constants';

export const useImageEditor = (
  imageEditorRef: RefObject<HTMLDivElement>,
  options?: {
    preventCreateInstance: boolean;
  },
): ImageEditorInstanceProps => {
  const [_triggerOut, setTriggerOut] = useState<number>(1);
  const editorInstance = useRef(null) as any;
  const canvasEditor = useRef(null) as any;
  const { preventCreateInstance = false } = options || {};

  useEffect(() => {
    let timerId;
    try {
      if (!preventCreateInstance) {
        (editorInstance.current = new ImageEditor(
          imageEditorRef.current as HTMLDivElement,
          getEditorConfigs(),
        )) as ImageEditor;

        canvasEditor.current = editorInstance.current.getCanvas();

        const canvas = canvasEditor.current;
        if (canvas) {
          timerId = setTimeout(() => {
            canvas.setWidth(window.innerWidth);
            canvas.setHeight(window.innerHeight);
            editorInstance.current
              .loadImageFromURL(editorInstance.current.toDataURL())
              .then(_result => {
                editorInstance.current.clearUndoStack();
              });
          }, 300);
        }

        setTriggerOut(prev => prev + 1);
      }
    } catch (err) {
      console.log(err);
    }

    return () => {
      if (!preventCreateInstance) {
        editorInstance.current.destroy();
      }
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [imageEditorRef, preventCreateInstance]);

  const activateShapeMode = (): void => {
    if (!preventCreateInstance && editorInstance.current.getDrawingMode() !== 'SHAPE') {
      editorInstance.current.stopDrawingMode();
      editorInstance.current.startDrawingMode('SHAPE');
    }
  };

  const activateTextMode = () => {
    if (!preventCreateInstance && editorInstance.current.getDrawingMode() !== 'TEXT') {
      editorInstance.current.stopDrawingMode();
      editorInstance.current.startDrawingMode('TEXT');
    }
  };

  const getSettings = (
    key: ColorKeys,
    color: ColorListProps,
  ): ShapeOptionProps | DrawingModeOptionProps => {
    switch (key) {
      case DRAW_KEYS.PEN: {
        return {
          width: 9,
          color,
        };
      }
      case DRAW_KEYS.HIGHLIGHT: {
        return {
          stroke: color,
          strokeWidth: 3,
          fill: 'transparent',
        };
      }
      case DRAW_KEYS.HIDE: {
        return {
          stroke: 'transparent',
          strokeWidth: 0,
          fill: color,
        };
      }
      case DRAW_KEYS.ARROW: {
        return {
          width: 9,
          color,
          arrowType: {
            tail: 'triangle',
          },
        };
      }
      default: {
        return {};
      }
    }
  };

  return {
    editorInstance: preventCreateInstance ? null : (editorInstance.current as ImageEditor),
    canvasEditor: canvasEditor.current,
    methods: {
      activateTextMode,
      activateShapeMode,
      getSettings,
    },
  };
};
