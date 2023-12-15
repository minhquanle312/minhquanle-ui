// Libraries
import React, { memo } from 'react'
import { ModalProps as AntdModalProps, ModalFuncProps } from 'antd'

// Atoms
import { Button, Icon, Spin } from 'minhquanle-ui/lib/components/atoms'

// Styled
import { StyledModal, WrapperSpin } from './styled'

export interface ModalProps extends AntdModalProps {
  header?: React.ReactNode
  headerStyle?: { [key: string]: any }
  rightFooter?: boolean
  loading?: boolean
}

export const OriginalModal: React.FC<ModalProps> = memo((props) => {
  // Props
  const { loading } = props

  return (
    <StyledModal
      {...{
        closeIcon: (
          <Icon disabled={loading} type="icon-ants-remove-slim" size={15} />
        ),
        footer: (
          <>
            <Button
              type="primary"
              onClick={props.onOk as any}
              {...props.okButtonProps}
            >
              {props.okText ? props.okText : 'OK'}
            </Button>
            <Button
              onClick={props.onCancel as any}
              {...props.cancelButtonProps}
            >
              {props.cancelText ? props.cancelText : 'Cancel'}
            </Button>
          </>
        ),
        modalRender: (node) =>
          loading ? (
            <WrapperSpin>
              <Spin spinning={loading}>{node}</Spin>
            </WrapperSpin>
          ) : (
            node
          ),
        ...props,
        maskClosable: loading ? false : props.maskClosable,
      }}
    >
      {props.header || null}
      {props.children || null}
    </StyledModal>
  )
})

OriginalModal.displayName = 'OriginalModal'

export const Modal = OriginalModal as typeof StyledModal & React.FC<ModalProps>

Modal.confirm = (props: ModalFuncProps) =>
  StyledModal.confirm({
    cancelText: 'Cancel',
    ...props,
  })
Modal.success = StyledModal.success
Modal.info = StyledModal.info
Modal.error = StyledModal.error
Modal.warning = StyledModal.warning

Modal.defaultProps = {
  loading: false,
}
