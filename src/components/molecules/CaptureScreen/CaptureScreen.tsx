// Libraries
import React, { useState, useEffect, useRef, MouseEvent, useMemo, useCallback } from 'react';
import clsx from 'clsx';
// import html2canvas from 'html2canvas';
import { toPng } from 'html-to-image';
import { isEmpty } from 'lodash';

// PropTypes
import {
  CaptureTypeProps,
  ColorKeys,
  CommentListProps,
  DrawItemProps,
  IImageEditorProps,
} from './types';
// import { PositionCursorProps } from './components/Cursor/types';

// Styled
import {
  BorderOverlay,
  BoxColor,
  ContainerCapture,
  Divider,
  DrawerGroupItem,
  DrawerGroups,
  FlexCenter,
  FlexColumn,
  Heading,
  ImageIcon,
  OutlineRemoveContainer,
  PopupBySide,
  WrapperColor,
  WrapperDraggable,
  WrapperIcon,
  WrapperRemoveBtn,
} from './styled';

// Components
import Icon from '@antscorp/icons';
import { Button } from 'src/components/atoms';
import { PopupDraggable } from '../PopupDraggable';
import { Cursor } from './components/Cursor';
import { CommentBox } from './components/CommentBox';
import { Progress } from 'antd';

// Constants
import { THEME } from 'src/constants';
import {
  DRAW_ACTION_LIST,
  DRAW_KEYS,
  COMMENT_BOX_DIMENSION_FIXED,
  OFFSET_CENTER,
  IGNORE_DRAW_ID_LIST,
  styleContainer,
  RECORD_KEYS,
  SIZE_ADJUST,
  styleRecordItem,
  styleDrawItem,
} from './constants';
import { ATTACH_KEYS } from 'src/components/organism/Help/constants';

// Hooks
import { useImageEditor } from './hooks/useImageEditor';

// Utils
import { generateUniqueId, initDefaultColors } from './utils';
import {
  ArrowGrowIcon,
  AudioRecordIcon,
  CheckSlimIcon,
  CommentIcon,
  FreeDrawIcon,
  HighlightIcon,
  InvisibleIcon,
  MuteIcon,
  PauseIcon,
  StopRecordIcon,
} from 'src/components/icons';

const CaptureScreen = (props: IImageEditorProps) => {
  const { captureType, src, defaultPositions, recorderConfigs, callback } = props;

  const [isShowCursor, setIsShowCursor] = useState<boolean>(false);
  const [drawItemActive, setDrawItemActive] = useState<string>('');
  const [recordingItemActive, setRecordingItemActive] = useState<string>('');
  const [isMouseDowning, setIsMouseDowning] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [drawColors, setDrawColors] = useState<Record<ColorKeys, string>>(initDefaultColors());
  const [commentInfoList, setCommentInfoList] = useState<Array<CommentListProps>>([]);
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);

  const imageEditorRef: React.RefObject<HTMLDivElement> = useRef(null);
  const cursorRef: React.RefObject<HTMLDivElement> = useRef(null);
  const outlineRemoveContainerRef: React.RefObject<HTMLDivElement> = useRef(null);
  const wrapperRemoveBtnRef: React.RefObject<HTMLDivElement> = useRef(null);
  const timerIdRef = useRef(null);

  const { editorInstance, canvasEditor, methods } = useImageEditor(imageEditorRef, {
    preventCreateInstance: captureType !== ATTACH_KEYS.CAPTURE,
  });
  const { activateShapeMode, getSettings } = methods;

  const handleMouseMove = useCallback(event => {
    event.preventDefault();
    event.stopPropagation();

    const positionX = event?.clientX;
    const positionY = event?.clientY;
    if (!isEmpty(cursorRef.current)) {
      const cursorRefTemp = cursorRef.current as unknown as HTMLDivElement;
      cursorRefTemp.style.left = `${positionX}px`;
      cursorRefTemp.style.top = `${positionY}px`;
      imageEditorRef.current?.classList.add('hide-cursor');
    }
  }, []);

  useEffect(() => {
    let canvasUpper;

    if (!isEmpty(editorInstance) && captureType === ATTACH_KEYS.CAPTURE) {
      canvasUpper = document.querySelector(
        '.tui-image-editor-canvas-container .upper-canvas',
      ) as HTMLCanvasElement;

      if (
        canvasUpper &&
        ([DRAW_KEYS.PEN, DRAW_KEYS.COMMENT, DRAW_KEYS.HIGHLIGHT] as string[]).includes(
          drawItemActive,
        )
      ) {
        canvasUpper.addEventListener('mousemove', handleMouseMove);
      }
    }

    return () => {
      if (canvasUpper) {
        canvasUpper.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [editorInstance, captureType, drawItemActive, handleMouseMove]);

  useEffect(() => {
    let timerId;

    if (isEmpty(drawItemActive) && isMouseDowning && captureType === ATTACH_KEYS.CAPTURE) {
      timerId = setTimeout(() => {
        setIsMouseDowning(false);
      }, 300);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [drawItemActive, isMouseDowning, captureType]);

  useEffect(() => {
    if (captureType === ATTACH_KEYS.CAPTURE) {
      const canvasContainer = document.querySelector(
        '.tui-image-editor-canvas-container',
      ) as HTMLDivElement;

      const handleAddComment = event => {
        try {
          event.stopPropagation();
          const canvasUpper = canvasContainer.querySelector('.upper-canvas');

          if (!canvasUpper) return;

          const pointerPosX = event.clientX;
          const pointerPosY = event.clientY;
          const clientX = canvasUpper.clientWidth;
          const clientY = canvasUpper.clientHeight;
          let isReverseAxisX = false;
          let isReverseAxisY = false;

          if (clientX - pointerPosX < COMMENT_BOX_DIMENSION_FIXED.width) {
            isReverseAxisX = true;
          }
          if (clientY - pointerPosY < COMMENT_BOX_DIMENSION_FIXED.height) {
            isReverseAxisY = true;
          }

          if (
            imageEditorRef &&
            imageEditorRef.current &&
            imageEditorRef.current.classList.contains('hide-cursor')
          ) {
            setIsShowCursor(false);
            imageEditorRef.current.classList.remove('hide-cursor');
            canvasUpper.removeEventListener('mousemove', handleMouseMove);
          }

          setCommentInfoList(prevCommentList => {
            if (
              prevCommentList.length > 0 &&
              !prevCommentList[prevCommentList.length - 1].isSubmitted
            )
              return prevCommentList;

            const randomId = generateUniqueId();

            // Căn giữa CommentPoint Component theo cursor click
            const left = pointerPosX - OFFSET_CENTER;
            const top = pointerPosY - OFFSET_CENTER;
            const temp = [...prevCommentList];

            let newLatestCommentIndex = 1;

            if (temp.length > 0) {
              newLatestCommentIndex = temp[temp.length - 1].index + 1;
            }

            temp.push({
              left,
              top,
              content: '',
              id: randomId,
              color: drawColors[DRAW_KEYS.COMMENT],
              index: newLatestCommentIndex,
              isSubmitted: false,
              isReverseAxisX,
              isReverseAxisY,
            });
            return temp;
          });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('error :>', error);
        }
      };

      try {
        if (canvasContainer && drawItemActive === DRAW_KEYS.COMMENT) {
          canvasContainer.addEventListener('mousedown', handleAddComment);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error :>', error);
      }

      return () => {
        canvasContainer.removeEventListener('mousedown', handleAddComment);
      };
    }
  }, [drawItemActive, drawColors, captureType, handleMouseMove]);

  useEffect(() => {
    let handleMouseUp;
    let canvasUpper;

    if (!isEmpty(editorInstance) && captureType === ATTACH_KEYS.CAPTURE) {
      canvasUpper = document.querySelector('.tui-image-editor-canvas-container .upper-canvas');

      if (canvasUpper) {
        handleMouseUp = () => {
          setIsMouseDowning(false);

          if (([DRAW_KEYS.PEN, DRAW_KEYS.HIGHLIGHT] as string[]).includes(drawItemActive)) {
            canvasUpper.addEventListener('mousemove', handleMouseMove);
          }
        };

        canvasUpper.addEventListener('mouseup', handleMouseUp);
      }

      // reset lại draw type đang active và đưa draw về mode NORMAL sau khi add 1 object
      editorInstance?.on('objectAdded', _data => {
        setIsMouseDowning(false);
      });
    }

    return () => {
      if (canvasUpper && handleMouseUp) {
        canvasUpper.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [editorInstance, captureType, drawItemActive, handleMouseMove]);

  const handleClickDrawItem = useCallback(
    (item: DrawItemProps, stroke?: string): void => {
      try {
        // Không được chuyển type draw khi chưa submit comment
        if (commentInfoList.length > 0 && !commentInfoList[commentInfoList.length - 1].isSubmitted)
          return;

        const { key } = item;
        if (!key) return;

        if (drawItemActive !== key) {
          setDrawItemActive(key);
        }

        if (isEmpty(editorInstance)) return;

        const color = stroke || drawColors[key];
        const settings = getSettings(key, color);

        switch (key) {
          case DRAW_KEYS.CANCEL: {
            callback('CLOSE_DRAWER');
            break;
          }
          case DRAW_KEYS.HIGHLIGHT:
          case DRAW_KEYS.HIDE: {
            if (key === DRAW_KEYS.HIGHLIGHT) {
              setIsShowCursor(true);
            }

            if (
              imageEditorRef &&
              imageEditorRef.current &&
              imageEditorRef.current.classList.contains('hide-cursor') &&
              key === DRAW_KEYS.HIDE
            ) {
              imageEditorRef.current.classList.remove('hide-cursor');
            }

            const shapeType = ([DRAW_KEYS.HIGHLIGHT, DRAW_KEYS.HIDE] as string[]).includes(key)
              ? 'rect'
              : 'circle';

            editorInstance.setDrawingShape(shapeType, settings);
            activateShapeMode();
            break;
          }
          case DRAW_KEYS.PEN: {
            setIsShowCursor(true);
            editorInstance.stopDrawingMode();
            editorInstance.changeCursor('none');
            editorInstance.startDrawingMode('FREE_DRAWING', settings);
            break;
          }
          case DRAW_KEYS.ARROW: {
            setIsShowCursor(false);
            if (
              imageEditorRef &&
              imageEditorRef.current &&
              imageEditorRef.current.classList.contains('hide-cursor')
            ) {
              imageEditorRef.current.classList.remove('hide-cursor');
            }

            editorInstance.stopDrawingMode();
            editorInstance.startDrawingMode('LINE_DRAWING', settings);
            break;
          }
          case DRAW_KEYS.DONE: {
            setIsShowCursor(false);
            if (
              imageEditorRef &&
              imageEditorRef.current &&
              imageEditorRef.current.classList.contains('hide-cursor')
            ) {
              imageEditorRef.current.classList.remove('hide-cursor');
            }

            editorInstance.deactivateAll();
            editorInstance.stopDrawingMode();
            setDrawItemActive('');

            toPng(imageEditorRef.current as HTMLElement, {
              filter: (element: HTMLElement) =>
                !(
                  [
                    IGNORE_DRAW_ID_LIST.DRAW_ACTIONS,
                    IGNORE_DRAW_ID_LIST.ICON_CLOSE,
                    IGNORE_DRAW_ID_LIST.BORDER_OVERLAY,
                  ] as string[]
                ).some(id => element.id === id),
            })
              .then(dataURL => {
                const imageName = editorInstance.getImageName();

                if (typeof callback === 'function') {
                  callback('ON_DRAWER_DONE', { imageName, dataURL });
                }
              })
              .catch(error => {
                // eslint-disable-next-line no-console
                console.error('oops, something went wrong!', error);
              });
            // html2canvas(imageEditorRef.current as HTMLElement, {
            //   allowTaint: false,
            // ignoreElements: (element: Element) => {
            //   if (
            //     (
            //       [IGNORE_DRAW_ID_LIST.DRAW_ACTIONS, IGNORE_DRAW_ID_LIST.ICON_CLOSE] as string[]
            //     ).includes(element.id)
            //   ) {
            //     return true;
            //   }

            //   return false;
            // },
            // }).then(canvas => {
            //   const dataURL = canvas.toDataURL('image/png');
            // console.log('insideee.dev - dataUrl :>', dataURL);

            // const imageName = editorInstance.getImageName();

            // if (typeof callback === 'function') {
            //   callback('ON_DRAWER_DONE', { imageName, dataURL });
            // }
            // });
            break;
          }
          case DRAW_KEYS.COMMENT: {
            setIsShowCursor(true);
            editorInstance.stopDrawingMode();
            editorInstance.changeCursor('cell');
            break;
          }
          default: {
            break;
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error :>', error);
      }
    },
    [
      activateShapeMode,
      callback,
      commentInfoList,
      drawColors,
      drawItemActive,
      editorInstance,
      getSettings,
    ],
  );

  useEffect(() => {
    try {
      if (!isEmpty(editorInstance) && captureType === ATTACH_KEYS.CAPTURE) {
        editorInstance.on('mousedown', () => {
          const canvasUpper = document.querySelector(
            '.tui-image-editor-canvas-container .upper-canvas',
          );

          if (canvasUpper) {
            canvasUpper.removeEventListener('mousemove', handleMouseMove);
          }

          if (editorInstance.getDrawingMode() !== 'NORMAL') {
            setIsMouseDowning(true);
          }
        });
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, [captureType, editorInstance, handleMouseMove, handleClickDrawItem]);

  useEffect(() => {
    if (
      captureType === ATTACH_KEYS.CAPTURE &&
      isEmpty(drawItemActive) &&
      !isEmpty(editorInstance)
    ) {
      handleClickDrawItem(DRAW_ACTION_LIST[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorInstance]);

  const handleSetColorByKey = (
    e: MouseEvent<HTMLDivElement>,
    drawItem: DrawItemProps,
    itemColor: string,
  ): void => {
    e.stopPropagation();
    // Không được chuyển type draw khi chưa submit comment
    if (commentInfoList.length > 0 && !commentInfoList[commentInfoList.length - 1].isSubmitted)
      return;

    const { key } = drawItem;

    setDrawColors({
      ...drawColors,
      [key]: itemColor,
    });

    if (isEmpty(editorInstance)) return;

    handleClickDrawItem(drawItem, itemColor);
  };

  const handleChangeComment = (type: string, dataIn: CommentListProps) => {
    const commentIndex = commentInfoList.findIndex(item => item.id === dataIn.id);
    if (commentIndex === -1) return;

    const tempCommentList = [...commentInfoList];

    if (type === 'CHANGE_CONTENT') {
      tempCommentList.splice(commentIndex, 1, dataIn);
    } else if (type === 'SUBMIT') {
      const temp = { ...dataIn, isSubmitted: true };
      tempCommentList.splice(commentIndex, 1, temp);
    } else if (type === 'CANCEL') {
      tempCommentList.splice(commentIndex, 1);
    }

    setCommentInfoList(tempCommentList);

    if (['SUBMIT', 'CANCEL'].includes(type) && imageEditorRef && imageEditorRef.current) {
      const canvasUpper = document.querySelector(
        '.tui-image-editor-canvas-container .upper-canvas',
      );
      if (
        canvasUpper &&
        ([DRAW_KEYS.COMMENT, DRAW_KEYS.HIGHLIGHT, DRAW_KEYS.PEN] as string[]).includes(
          drawItemActive,
        )
      ) {
        canvasUpper.addEventListener('mousemove', handleMouseMove);
        imageEditorRef.current.classList.add('hide-cursor');
        setIsShowCursor(true);
      }
    }
  };

  useEffect(() => {
    if (!isEmpty(recorderConfigs) && recorderConfigs.recorder) {
      recorderConfigs.recorder.onerror = (event: any) => {
        // eslint-disable-next-line no-console
        console.error('MediaRecorder error:', event.error);
        setIsRecording(false);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recorderConfigs.recorder]);

  useEffect(
    () => () => {
      if (typeof callback === 'function') {
        callback('RESET_POSITION_DRAG');
      }
      if (timerIdRef && timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleActionRecorderByType = useCallback(
    (type: string): void => {
      try {
        if (
          isEmpty(recorderConfigs) ||
          !recorderConfigs.recorder ||
          !recorderConfigs.streamTracks ||
          !recorderConfigs.streamTracks?.desktopStream ||
          !recorderConfigs.streamTracks?.voiceStream
        )
          return;

        switch (type) {
          case RECORD_KEYS.START: {
            const recordActionEle = document.getElementById(IGNORE_DRAW_ID_LIST.DRAW_ACTIONS);

            if (recordActionEle && defaultPositions?.record) {
              (timerIdRef.current as any) = setTimeout(() => {
                recordActionEle.style.transform = `translate(${defaultPositions?.record.x}px, ${defaultPositions?.record.y}px)`;
              }, 10);
            }
            recorderConfigs.recorder.start();
            setRecordingItemActive(type);
            setIsRecording(true);
            break;
          }
          case RECORD_KEYS.STOP: {
            if (['paused', 'recording'].includes(recorderConfigs.recorder.state)) {
              recorderConfigs.recorder.stop();
              setIsRecording(false);
            }

            const { desktopStream, voiceStream } = recorderConfigs.streamTracks;

            desktopStream.getTracks().forEach(track => track.stop());
            voiceStream.getTracks().forEach(track => track.stop());
            if (typeof callback === 'function') {
              callback('STOP_RECORDER', recorderConfigs);
            }
            setRecordingItemActive(type);
            break;
          }
          case RECORD_KEYS.PAUSE: {
            if (recorderConfigs.recorder.state === 'paused') {
              recorderConfigs.recorder.resume();
            } else {
              recorderConfigs.recorder.pause();
            }
            setRecordingItemActive(prev => (prev === RECORD_KEYS.PAUSE ? '' : type));
            break;
          }
          // case RECORD_KEYS.RESUME: {
          //   setRecordingItemActive(type);
          //   recorderConfigs.recorder.resume();
          //   break;
          // }
          case RECORD_KEYS.MUTED:
          case RECORD_KEYS.UNMUTE: {
            const { isMute, streamTracks } = recorderConfigs;
            const { voiceStream } = streamTracks;
            const audioTracks = voiceStream.getAudioTracks();

            audioTracks.forEach(track => {
              track.enabled = isMute;
            });
            setRecordingItemActive(type);
            callback('ON_CHANGE_MUTE');
            break;
          }
          default: {
            break;
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error :>', error);
      }
    },
    [callback, isRecording, recorderConfigs],
  );

  useEffect(() => {
    let intervalId;
    const totalDuration = 2 * 60;

    if (isRecording) {
      intervalId = setInterval(() => {
        if (recorderConfigs.recorder?.state === 'recording') {
          setSeconds(prevSeconds => (prevSeconds === 59 ? 0 : prevSeconds + 1));

          if (seconds === 59) {
            setMinutes(prevMinutes => prevMinutes + 1);
          }

          const currentSeconds = minutes * 60 + seconds;
          const progressPercentage = (currentSeconds / totalDuration) * 100;
          setPercentage(Number(progressPercentage.toFixed(2)));

          if (minutes === 2 && seconds === 0) {
            clearInterval(intervalId);
            handleActionRecorderByType(RECORD_KEYS.STOP);
          }
        }
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [
    handleActionRecorderByType,
    isRecording,
    minutes,
    recorderConfigs.recorder?.state,
    seconds,
    percentage,
  ]);

  useEffect(() => {
    let ignoreHoveringList;
    let handleMouseEnterDrawActions;
    let handleMouseOutDrawActions;
    if (
      !isMouseDowning &&
      captureType === ATTACH_KEYS.CAPTURE &&
      ([DRAW_KEYS.PEN, DRAW_KEYS.COMMENT, DRAW_KEYS.HIGHLIGHT] as string[]).includes(drawItemActive)
    ) {
      ignoreHoveringList = document.querySelectorAll(`.${IGNORE_DRAW_ID_LIST.CLASS_PREVENT_HOVER}`);

      if (ignoreHoveringList.length > 0) {
        handleMouseEnterDrawActions = event => {
          event.stopPropagation();

          if (
            (drawItemActive === DRAW_KEYS.COMMENT && commentInfoList.length === 0) ||
            (drawItemActive === DRAW_KEYS.COMMENT &&
              commentInfoList.length > 0 &&
              commentInfoList[commentInfoList.length - 1].isSubmitted) ||
            ([DRAW_KEYS.PEN, DRAW_KEYS.HIGHLIGHT] as string[]).includes(drawItemActive)
          ) {
            setIsShowCursor(false);
          }
        };
        handleMouseOutDrawActions = event => {
          event.stopPropagation();
          if (
            (drawItemActive === DRAW_KEYS.COMMENT && commentInfoList.length === 0) ||
            (drawItemActive === DRAW_KEYS.COMMENT &&
              commentInfoList.length > 0 &&
              commentInfoList[commentInfoList.length - 1].isSubmitted) ||
            ([DRAW_KEYS.PEN, DRAW_KEYS.HIGHLIGHT] as string[]).includes(drawItemActive)
          ) {
            setIsShowCursor(true);
          }
        };

        ignoreHoveringList.forEach(ignoreItem => {
          ignoreItem.addEventListener('mouseenter', handleMouseEnterDrawActions);
          ignoreItem.addEventListener('mouseleave', handleMouseOutDrawActions);
        });
      }
    }

    return () => {
      if (!isEmpty(ignoreHoveringList)) {
        ignoreHoveringList.forEach(ignoreItem => {
          ignoreItem.removeEventListener('mouseenter', handleMouseEnterDrawActions);
          ignoreItem.removeEventListener('mouseleave', handleMouseOutDrawActions);
        });
      }
    };
  }, [captureType, commentInfoList, drawItemActive, isMouseDowning]);

  const setPositionOutlineRemoveContainer = useCallback(obj => {
    const outlineRemoveContainer = outlineRemoveContainerRef.current || null;
    const removeBtn = wrapperRemoveBtnRef.current || null;
    const absCoords: { left: number; top: number } = {
      left: obj.left,
      top: obj.top,
    };

    const objWidth = obj.width * (obj.scaleX || 1);
    const objHeight = obj.height * (obj.scaleY || 1);

    if (outlineRemoveContainer) {
      outlineRemoveContainer.style.width = `${SIZE_ADJUST * objWidth + obj.strokeWidth}px`;
      outlineRemoveContainer.style.height = `${SIZE_ADJUST * objHeight + obj.strokeWidth}px`;
      outlineRemoveContainer.style.left = `${absCoords.left}px`;
      outlineRemoveContainer.style.top = `${absCoords.top}px`;
    }
    if (removeBtn) {
      removeBtn.style.left = `${absCoords.left + objWidth / 2}px`;
      removeBtn.style.top = `${absCoords.top - objHeight / 2}px`;
    }
  }, []);

  // Handle Hover and remove object in canvas
  useEffect(() => {
    let handleDelete;
    let handleRemoveBtnMouseEnter;
    let handleRemoveBtnMouseLeave;
    let currentObjectDrew = null;
    let activeObject = null;
    let isMouseDown = false;
    const btnRemove = wrapperRemoveBtnRef.current || null;
    const outlineRemoveContainer = outlineRemoveContainerRef.current || null;

    if (captureType === ATTACH_KEYS.CAPTURE && canvasEditor) {
      handleDelete = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        currentObjectDrew && canvasEditor.remove(currentObjectDrew);

        if (btnRemove && outlineRemoveContainer) {
          btnRemove.style.display = 'none';
          outlineRemoveContainer.style.display = 'none';
        }
      };

      handleRemoveBtnMouseEnter = () => {
        if (!currentObjectDrew) return;

        if (btnRemove && !isMouseDown) {
          btnRemove.style.display = 'flex';
        }
        setPositionOutlineRemoveContainer(currentObjectDrew);
        if (outlineRemoveContainer && !isMouseDown) {
          outlineRemoveContainer.style.border = '2px dashed #707070';
          outlineRemoveContainer.style.display = 'block';
        }

        canvasEditor.renderAll();
      };

      handleRemoveBtnMouseLeave = () => {
        if (!currentObjectDrew) return;

        if (btnRemove && outlineRemoveContainer) {
          btnRemove.style.display = 'none';
          outlineRemoveContainer.style.border = 'none';
        }
      };

      if (btnRemove) {
        btnRemove.addEventListener('click', handleDelete);
        btnRemove.addEventListener('mouseenter', handleRemoveBtnMouseEnter);
        btnRemove.addEventListener('mouseleave', handleRemoveBtnMouseLeave);
      }

      canvasEditor.on('mouse:over', event => {
        if (!event.target || activeObject === event.target) return;

        const currentObj = event.target;
        currentObjectDrew = currentObj;
        setPositionOutlineRemoveContainer(currentObj);
        if (!isMouseDown) {
          if (btnRemove) {
            btnRemove.style.display = 'flex';
          }
          if (outlineRemoveContainer) {
            outlineRemoveContainer.style.border = '2px dashed #707070';
            outlineRemoveContainer.style.display = 'block';
          }
        }

        canvasEditor.renderAll();
      });

      canvasEditor.on('mouse:down', () => {
        isMouseDown = true;
        // eslint-disable-next-line no-underscore-dangle
        activeObject = canvasEditor._activeObject;

        if (btnRemove && outlineRemoveContainer && activeObject) {
          btnRemove.style.display = 'none';
          outlineRemoveContainer.style.border = 'none';
        }
      });
      canvasEditor.on('mouse:up', () => {
        isMouseDown = false;
      });

      canvasEditor.on('mouse:out', e => {
        if (!e.target) return;

        if (btnRemove && outlineRemoveContainer) {
          btnRemove.style.display = 'none';
          outlineRemoveContainer.style.border = 'none';
        }
      });

      canvasEditor.on('object:moving', () => {
        if (btnRemove && outlineRemoveContainer) {
          btnRemove.style.display = 'none';
          outlineRemoveContainer.style.border = 'none';
        }
      });
    }

    return () => {
      if (btnRemove) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        handleDelete && btnRemove.removeEventListener('click', handleDelete);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        handleRemoveBtnMouseEnter &&
          btnRemove.removeEventListener('mouseenter', handleRemoveBtnMouseEnter);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        handleRemoveBtnMouseLeave &&
          btnRemove.removeEventListener('mouseleave', handleRemoveBtnMouseLeave);
      }
    };
  }, [captureType, canvasEditor, setPositionOutlineRemoveContainer]);

  useEffect(() => {
    if (captureType === ATTACH_KEYS.RECORD && isRecording) {
      const drawActions = document.getElementById(IGNORE_DRAW_ID_LIST.DRAW_ACTIONS);

      if (drawActions) {
        drawActions.style.transform = 'translate(169px, 0px)';
      }
    }
  }, [isRecording, captureType]);

  const numberCommentCursor = useMemo(() => {
    if (drawItemActive === DRAW_KEYS.COMMENT) {
      if (!commentInfoList[commentInfoList.length - 1]) return 1;

      return commentInfoList[commentInfoList.length - 1].index + 1;
    }

    return null;
  }, [commentInfoList, drawItemActive]);

  const renderIcon = (name, style) =>
    ({
      'icon-ants-highlight': <HighlightIcon style={style} />,
      'icon-ants-comment': <CommentIcon style={style} />,
      'icon-ants-free-draw': <FreeDrawIcon style={style} />,
      'icon-ants-arrow-grow': <ArrowGrowIcon style={style} />,
      'icon-ants-invisible': <InvisibleIcon style={style} />,
      'icon-ants-check-slim': <CheckSlimIcon style={style} />,
      'icon-ants-audio-record': <AudioRecordIcon style={style} />,
      'icon-ants-mute': <MuteIcon style={style} />,
      'icon-ants-pause': <PauseIcon style={style} />,
      'icon-ants-stop-record': <StopRecordIcon style={style} />,
    }[name]);

  const renderDrawActionList = (): React.ReactNode =>
    DRAW_ACTION_LIST.map(drawItem => {
      if (drawItem?.type === 'divider') {
        return <Divider isVertical key={drawItem.key} style={{ width: styleDrawItem.SMALL }} />;
      }

      return (
        <DrawerGroupItem
          key={drawItem.key}
          className={clsx({
            active: drawItemActive === drawItem.key,
            'hide-hover': ([DRAW_KEYS.DONE, DRAW_KEYS.CANCEL] as string[]).includes(drawItem.key),
          })}
          style={{
            height: styleDrawItem.SMALL,
            marginLeft: ([DRAW_KEYS.HIGHLIGHT, DRAW_KEYS.DONE] as string[]).includes(drawItem.key)
              ? '15px'
              : '8px',
            marginRight: drawItem.key === DRAW_KEYS.HIDE ? '15px' : '8px',
            width: !([DRAW_KEYS.DONE, DRAW_KEYS.CANCEL] as string[]).includes(drawItem.key)
              ? styleDrawItem.MEDIUM
              : 'auto',
          }}
          onClick={() => handleClickDrawItem(drawItem)}
        >
          <FlexColumn>
            {/* <Icon
              type={drawItem.icon}
              style={{ fontSize: '24px', color: `${THEME.token?.colorIcon}` }}
            /> */}
            {([DRAW_KEYS.DONE, DRAW_KEYS.CANCEL] as string[]).includes(drawItem.key) ? (
              <Button
                type={drawItem.key === DRAW_KEYS.DONE ? 'primary' : 'default'}
                style={{ fontWeight: 'bold', flexDirection: 'row-reverse' }}
                icon={
                  drawItem.key === DRAW_KEYS.DONE
                    ? renderIcon('icon-ants-check-slim', {
                        fontSize: '24px',
                        color: `${THEME.token?.bw0}`,
                      })
                    : undefined
                }
              >
                {drawItem.label}
              </Button>
            ) : (
              renderIcon(drawItem.icon, {
                maxWidth: '24px',
                fill: `${
                  drawItemActive === drawItem.key
                    ? THEME.token?.colorPrimary
                    : THEME.token?.colorIcon
                }`,
              })
            )}
          </FlexColumn>
          {drawItem.isShowColorList && (
            <PopupBySide className="toggle-popup-by-side">
              <Heading>{drawItem.label}</Heading>
              <WrapperColor>
                {drawItem.colorList?.map(itemColor => (
                  <BoxColor
                    key={`${drawItem.key}-${itemColor}`}
                    bgColor={itemColor}
                    onClick={e => handleSetColorByKey(e, drawItem, itemColor)}
                  >
                    {drawColors[drawItem.key] === itemColor && (
                      // <Icon
                      //   type="icon-ants-check-slim"
                      //   style={{ color: `${THEME.token?.bw0}`, fontSize: '20px' }}
                      // />
                      <CheckSlimIcon style={{ fill: `${THEME.token?.bw0}`, maxWidth: '20px' }} />
                    )}
                  </BoxColor>
                ))}
              </WrapperColor>
            </PopupBySide>
          )}
        </DrawerGroupItem>
      );
    });

  const renderRecordActionList = (): React.ReactNode => (
    <>
      <WrapperDraggable className="cursor" style={{ height: '100%' }}>
        <FlexColumn>
          <Icon
            type="icon-ants-double-three-dots"
            style={{ fontSize: '24px', color: 'rgba(89, 89, 89, 0.5)' }}
          />
        </FlexColumn>
      </WrapperDraggable>
      <Divider isVertical />
      {!isRecording ? (
        <DrawerGroupItem
          style={styleRecordItem}
          className={clsx({ active: recordingItemActive === RECORD_KEYS.STOP })}
          onClick={() => handleActionRecorderByType(RECORD_KEYS.START)}
        >
          <FlexColumn>
            <ImageIcon
              src="https://st-media-template.antsomi.com/upload/2023/06/16/440878f6-0cc1-465e-b978-44bd4f348199.png"
              alt="start-recording-icon"
            />
          </FlexColumn>
        </DrawerGroupItem>
      ) : (
        <>
          <DrawerGroupItem
            className={clsx({ active: recordingItemActive === RECORD_KEYS.STOP })}
            style={styleRecordItem}
            onClick={() => handleActionRecorderByType(RECORD_KEYS.STOP)}
          >
            <FlexColumn>
              {/* <Icon
                type="icon-ants-stop-record"
                style={{ fontSize: '24px', color: `${THEME.token?.red8}` }}
              /> */}
              {renderIcon('icon-ants-stop-record', {
                maxWidth: '24px',
                fill: `${THEME.token?.red8}`,
              })}
            </FlexColumn>
          </DrawerGroupItem>
          <DrawerGroupItem
            // key={recordItem.key}
            className={clsx({ active: recordingItemActive === RECORD_KEYS.PAUSE })}
            style={styleRecordItem}
            onClick={() => handleActionRecorderByType(RECORD_KEYS.PAUSE)}
          >
            <FlexColumn>
              {recordingItemActive === RECORD_KEYS.PAUSE ? (
                <ImageIcon
                  src="https://st-media-template.antsomi.com/upload/2023/06/16/440878f6-0cc1-465e-b978-44bd4f348199.png"
                  alt="start-recording-icon"
                  style={{ width: 22, height: 22 }}
                />
              ) : (
                renderIcon('icon-ants-pause', {
                  maxWidth: '24px',
                  fill: `${THEME.token?.colorIcon}`,
                })
              )}
            </FlexColumn>
          </DrawerGroupItem>
          {/* <DrawerGroupItem
              // key={recordItem.key}
              className={clsx({ active: recordingItemActive === RECORD_KEYS.RESUME })}
              style={{ height: '100%' }}
              onClick={() => handleActionRecorderByType(RECORD_KEYS.RESUME)}
            >
              <FlexColumn>
                <Icon
                  type="icon-ants-laptop"
                  style={{ fontSize: '24px', color: `${THEME.token?.colorIcon}` }}
                />
                Resume
              </FlexColumn>
            </DrawerGroupItem> */}
        </>
      )}
      {recorderConfigs && recorderConfigs.isMute ? (
        <DrawerGroupItem
          className={clsx({ active: recordingItemActive === RECORD_KEYS.UNMUTE })}
          style={styleRecordItem}
          onClick={() => handleActionRecorderByType(RECORD_KEYS.UNMUTE)}
        >
          <FlexColumn>
            {/* <Icon
              type="icon-ants-mute"
              style={{ fontSize: '24px', color: `${THEME.token?.colorIcon}` }}
            /> */}
            {renderIcon('icon-ants-mute', { maxWidth: '24px', fill: `${THEME.token?.colorIcon}` })}
          </FlexColumn>
        </DrawerGroupItem>
      ) : (
        <DrawerGroupItem
          className={clsx({ active: recordingItemActive === RECORD_KEYS.MUTED })}
          style={styleRecordItem}
          onClick={() => handleActionRecorderByType(RECORD_KEYS.MUTED)}
        >
          <FlexColumn>
            {/* <Icon
              type="icon-ants-audio-record"
              style={{ fontSize: '24px', color: `${THEME.token?.colorIcon}` }}
            /> */}
            {renderIcon('icon-ants-audio-record', {
              maxWidth: '24px',
              fill: `${THEME.token?.colorIcon}`,
            })}
          </FlexColumn>
        </DrawerGroupItem>
      )}

      {isRecording && (
        <DrawerGroupItem style={{ ...styleRecordItem, width: 130 }} className="timer-recording">
          <FlexCenter>
            <Progress percent={percentage} showInfo={false} style={{ width: 100, margin: 0 }} />
            <Heading style={{ whiteSpace: 'nowrap' }}>{`${minutes}:${seconds
              .toString()
              .padStart(2, '0')}`}</Heading>
          </FlexCenter>
        </DrawerGroupItem>
      )}
    </>
  );

  const renderPopupAction = (type: CaptureTypeProps): React.ReactNode => {
    if (type === ATTACH_KEYS.RECORD) {
      return (
        <PopupDraggable
          bounds="body"
          name={ATTACH_KEYS.RECORD}
          defaultPosition={defaultPositions?.record}
          isHiddenClose
          isHiddenResizing
          id={IGNORE_DRAW_ID_LIST.DRAW_ACTIONS}
          styleContainer={styleContainer}
          callback={callback}
        >
          {renderRecordActionList()}
        </PopupDraggable>
      );
    }

    return (
      !isMouseDowning && (
        <PopupDraggable
          defaultPosition={defaultPositions?.capture}
          bounds="body"
          name={ATTACH_KEYS.CAPTURE}
          isHiddenClose
          isHiddenResizing
          id={IGNORE_DRAW_ID_LIST.DRAW_ACTIONS}
          styleContainer={{
            ...styleContainer,
            height: styleDrawItem.LARGE,
            minHeight: styleDrawItem.LARGE,
            padding: '0px 5px',
          }}
          callback={callback}
        >
          <DrawerGroups
            id={IGNORE_DRAW_ID_LIST.DRAW_ACTIONS}
            className={IGNORE_DRAW_ID_LIST.CLASS_PREVENT_HOVER}
            style={{ height: styleDrawItem.LARGE }}
          >
            <WrapperDraggable
              className="cursor"
              style={{
                height: styleDrawItem.SMALL,
                width: styleDrawItem.MEDIUM,
                marginRight: 6,
                padding: 'unset',
              }}
            >
              <FlexColumn>
                <Icon
                  type="icon-ants-double-three-dots"
                  style={{ fontSize: '24px', color: 'rgba(89, 89, 89, 0.5' }}
                />
              </FlexColumn>
            </WrapperDraggable>
            <Divider isVertical style={{ width: styleDrawItem.SMALL }} />
            {renderDrawActionList()}
          </DrawerGroups>
        </PopupDraggable>
      )
    );
  };

  const renderCommentList = (commentList: Array<CommentListProps>) =>
    commentList.map(commentItem => (
      <CommentBox
        key={commentItem.id}
        className={IGNORE_DRAW_ID_LIST.CLASS_PREVENT_HOVER}
        boxDimension={COMMENT_BOX_DIMENSION_FIXED}
        offset={OFFSET_CENTER}
        info={commentItem}
        onChangeComment={handleChangeComment}
      />
    ));

  return (
    <ContainerCapture
      imageURL={src}
      isRecord={captureType === ATTACH_KEYS.RECORD}
      ref={imageEditorRef}
    >
      <Cursor
        drawItemType={drawItemActive}
        cursorRef={cursorRef}
        isShowCursor={isShowCursor && !isMouseDowning}
        isPointerBox={drawItemActive === DRAW_KEYS.COMMENT}
        bgColor={drawColors[drawItemActive]}
        offset={OFFSET_CENTER}
      >
        {numberCommentCursor}
      </Cursor>
      {captureType === ATTACH_KEYS.CAPTURE && (
        <>
          {renderCommentList(commentInfoList)}
          <BorderOverlay
            id={IGNORE_DRAW_ID_LIST.BORDER_OVERLAY}
            className={IGNORE_DRAW_ID_LIST.CLASS_PREVENT_HOVER}
          />
          <WrapperIcon
            id={IGNORE_DRAW_ID_LIST.ICON_CLOSE}
            className={IGNORE_DRAW_ID_LIST.CLASS_PREVENT_HOVER}
            // isRecord={captureType === ATTACH_KEYS.RECORD}
            onClick={() => callback('CLOSE_DRAWER')}
          >
            <Icon
              type="icon-ants-remove-slim"
              style={{ color: `${THEME.token?.bw0}`, fontSize: '12px' }}
            />
          </WrapperIcon>
          <OutlineRemoveContainer ref={outlineRemoveContainerRef} />
          <WrapperRemoveBtn
            ref={wrapperRemoveBtnRef}
            className={IGNORE_DRAW_ID_LIST.CLASS_PREVENT_HOVER}
          >
            <Icon
              type="icon-ants-remove-trash"
              style={{ fontSize: '20px', color: `${THEME.token?.colorIcon}` }}
            />
          </WrapperRemoveBtn>
        </>
      )}

      {renderPopupAction(captureType)}
    </ContainerCapture>
  );
};

CaptureScreen.defaultProps = {
  isOpen: false,
  src: '',
  alt: 'CaptureScreen',
  defaultPositions: {
    capture: null,
    record: null,
  },
  callback: () => {},
};

export { CaptureScreen };
