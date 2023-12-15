// Libraries
import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

// Components
import Icon from '@antscorp/icons';
import { Space, Button } from 'antd';

// Constanst
import { THEME } from 'src/constants';

// Hooks
import { useDebounce } from 'src/hooks/useDebounce';

// Types
import { CommentBoxProps } from './types';
import { CommentListProps } from '../../types';

// Styled
import { CommentBoxed, CommentPoint, RoundedDashed, TextArea, WrapperIcon } from './styled';

const LIMIT_CONTENT_COMMENT = 200;

const CommentBox = (props: CommentBoxProps) => {
  const { info, offset, className, boxDimension, onChangeComment } = props;

  const [activeDrags, setActiveDrags] = useState<number>(0);
  const [positionDrag] = useState<Pick<CommentListProps, 'left' | 'top'>>({
    top: info.top,
    left: info.left,
  });

  const [debouncedPosition, _positionOriginal, setPositionDrag] = useDebounce(positionDrag, 400);

  const handleStart = (): void => {
    setActiveDrags(activeDrags + 1);
  };

  const handleStop = (): void => {
    setActiveDrags(activeDrags - 1);
  };

  const handleDrag = (_e, _ui) => {
    try {
      const left = _ui.node.offsetLeft;
      const top = _ui.node.offsetTop;
      setPositionDrag({
        left,
        top,
      });
    } catch (error) {
      console.log('error :>', error);
    }
  };

  useEffect(() => {
    if (typeof onChangeComment === 'function') {
      onChangeComment('CHANGE_CONTENT', { ...info, ...debouncedPosition });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPosition]);

  return (
    <Draggable bounds="canvas" onDrag={handleDrag} onStart={handleStart} onStop={handleStop}>
      <CommentPoint
        color={info.color}
        isSubmitted={info.isSubmitted}
        id={info.id}
        offset={offset}
        left={info.left}
        top={info.top}
        className={`${className} comment-point`}
      >
        {info.index}
        <CommentBoxed
          boxDimension={boxDimension}
          isReverseAxisX={info.isReverseAxisX}
          isReverseAxisY={info.isReverseAxisY}
          className={className}
        >
          <Space direction="vertical" size={10}>
            <TextArea
              placeholder="Enter comment …"
              value={info.content}
              disabled={info.isSubmitted}
              maxLength={LIMIT_CONTENT_COMMENT}
              onChange={event => {
                const { value } = event?.target;
                if (value && value.length <= LIMIT_CONTENT_COMMENT) {
                  onChangeComment('CHANGE_CONTENT', { ...info, content: value });
                }
              }}
            />
            {!info.isSubmitted && (
              <Space size={15}>
                <Button
                  type="primary"
                  disabled={!info.content}
                  style={{ height: 28 }}
                  onClick={() => onChangeComment('SUBMIT', info)}
                >
                  Comment
                </Button>
                <Button style={{ height: 28 }} onClick={() => onChangeComment('CANCEL', info)}>
                  Cancel
                </Button>
              </Space>
            )}
          </Space>
        </CommentBoxed>
        <RoundedDashed offset={offset} className="rounded-dashed" />
        <WrapperIcon
          className="icon-close-comment"
          onClick={e => {
            e.stopPropagation();
            onChangeComment('CANCEL', info);
          }}
        >
          <Icon
            type="icon-ants-remove-trash"
            style={{ fontSize: '20px', color: `${THEME.token?.colorIcon}` }}
          />
        </WrapperIcon>
      </CommentPoint>
    </Draggable>
  );
};

CommentBox.defaultProps = {
  info: {
    id: 'random_id',
    top: 50,
    left: 50,
    index: 1,
    isSubmitted: false,
  },
  offset: 20,
  onChangeComment: () => {},
};
export { CommentBox };
