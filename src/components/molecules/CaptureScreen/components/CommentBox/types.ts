import { CommentListProps } from '../../types';

export interface BoxDimensionProps {
  width: number;
  height: number;
}

export interface CommentBoxProps {
  className?: string;
  info: CommentListProps;
  offset: number;
  boxDimension: BoxDimensionProps;
  onChangeComment: Function;
}

export interface CommentPointProps
  extends Pick<CommentListProps, 'left' | 'top' | 'isSubmitted' | 'color'> {
  offset: number;
}
