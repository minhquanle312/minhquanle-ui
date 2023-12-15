/* eslint-disable react/destructuring-assignment */
// Libraries
import React, { useState, useEffect, useCallback, useRef } from 'react'

// Hooks
import { useDeepCompareEffect } from 'minhquanle-ui/lib/hooks'

// Atoms
import { Button, Icon, ScrollBox } from 'minhquanle-ui/lib/components/atoms'

// Molecules
import { Modal, InputSearch } from 'minhquanle-ui/lib/components/molecules'

// Components
import { IconSelectionRenderer } from './components/Icon'

// Constants
import {
  DEFAULT_UI_ICON_STYLES,
  LIMIT_ICONS_SHOW,
  LIST_ICON_BY_TYPE,
} from './constants'
import { THEME } from 'minhquanle-ui/lib/constants'

// Styled
import {
  CustomButton,
  IconSelectionWrapper,
  Overlay,
  WrapperListItemRender,
  WrapperListRender,
} from './styled'

// Types
import { IconSelectionProps, isIconType } from './types'

// Utils
import { serializeIcon } from './utils'
import clsx from 'clsx'

export const IconSelection: React.FC<IconSelectionProps> = (props) => {
  const {
    labelHeadingModal = 'Icon Selection',
    searchPlaceholder = 'Search for icon...',
    wrapperClassName = '',
    className = '',
    style = {},
    isOpen = false,
    limitShowIcon = LIMIT_ICONS_SHOW,
    iconTypes = ['font-awesome'],
    onChange,
    onRemoveIcon,
    onChangeSvg,
  } = props

  const [listIconsOriginal, setListIconsOriginal] = useState<string[]>([])
  const [listIcons, setListIcons] = useState<string[]>([])
  const [selectedIcon, setSelectedIcon] = useState(props.icon || '')
  const [isOpenModal, setIsOpenModal] = useState<boolean>(isOpen)
  const [activeIcon, setActiveIcon] = useState('')

  useDeepCompareEffect(() => {
    const temp = Object.entries(LIST_ICON_BY_TYPE).reduce<string[]>(
      (acc, current) => {
        const [iconType, icons] = current

        if (isIconType(iconType) && iconTypes.includes(iconType)) {
          acc.push(...icons.map((icon) => `${iconType} ${icon}`))
        }

        return acc
      },
      []
    )

    setListIconsOriginal(temp)
    setListIcons(temp.slice(0, limitShowIcon))
  }, [iconTypes, limitShowIcon])

  const iconRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    setSelectedIcon(props.icon || '')
  }, [props.icon])

  const showModal = () => {
    setIsOpenModal(true)
  }

  const handleCancel = () => {
    setIsOpenModal(false)
    setListIcons(listIconsOriginal.slice(0, limitShowIcon))
  }

  const handleSelectIcon = (icon: string) => {
    if (onChange) {
      onChange(icon)
    }
    if (typeof onChangeSvg === 'function') {
      onChangeSvg(iconRef?.current?.outerHTML)
    }
    setSelectedIcon(icon)
    handleCancel()
  }

  const renderListIcons = (listIconsRender: string[]) =>
    listIconsRender.map((icon) => {
      const serializeResult = serializeIcon(icon)

      if (serializeResult === null) {
        return null
      }

      const { iconType, iconName } = serializeResult

      return (
        <WrapperListRender className="ants-group" key={icon}>
          <WrapperListItemRender className="ants-hover">
            <IconSelectionRenderer
              ref={activeIcon === iconName ? iconRef : undefined}
              iconType={iconType}
              iconName={iconName}
              {...DEFAULT_UI_ICON_STYLES.LISTING[iconType]}
            />

            <CustomButton
              onClick={() => handleSelectIcon(icon)}
              onMouseEnter={
                onChangeSvg ? () => setActiveIcon(iconName) : undefined
              }
              className="group-hover"
            >
              USE
            </CustomButton>

            <Overlay className="group-hover" />
          </WrapperListItemRender>

          <span
            style={{
              display: 'inline-block',
              marginTop: 5,
              width: '100%',
              fontSize: `${THEME.token?.fontSize}px`,
            }}
          >
            {iconName}
          </span>
        </WrapperListRender>
      )
    })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSeachIcons = useCallback(
    (value: string) => {
      if (value && value.trim()) {
        setListIcons(
          listIconsOriginal
            .filter((icon) => {
              const serializeResult = serializeIcon(icon)

              return (
                serializeResult &&
                serializeResult.iconName
                  .toLocaleLowerCase()
                  .includes(value.trim().toLocaleLowerCase())
              )
            })
            .slice(0, limitShowIcon)
        )
      } else {
        setListIcons(listIconsOriginal.slice(0, limitShowIcon))
      }
    },
    [listIconsOriginal, limitShowIcon]
  )

  const handleRemoveIcon = () => {
    if (onRemoveIcon) {
      onRemoveIcon()
    }
    if (typeof onChange === 'function') {
      onChange('')
    }
    setSelectedIcon('')
  }

  const serializeSelectedIcon = serializeIcon(selectedIcon)

  const renderSelectedIcon = () => {
    if (serializeSelectedIcon) {
      const { iconType, iconName } = serializeSelectedIcon

      return (
        <IconSelectionRenderer
          iconType={iconType}
          iconName={iconName}
          {...DEFAULT_UI_ICON_STYLES.SELECTED[iconType]}
        />
      )
    }

    return null
  }

  return (
    <IconSelectionWrapper
      style={style}
      className={clsx(wrapperClassName, className)}
    >
      <div className="transparent-wrapper">
        <div style={{ position: 'absolute', zIndex: 0 }}>
          {renderSelectedIcon()}
        </div>

        {serializeSelectedIcon ? (
          <>
            <Button onClick={showModal} style={{ backgroundColor: '#ffffff' }}>
              Change
            </Button>
            <Button
              onClick={handleRemoveIcon}
              style={{ backgroundColor: '#ffffff' }}
            >
              <Icon
                type="icon-ants-remove-trash"
                size={15}
                style={{ color: THEME.token?.colorPrimary }}
              />
            </Button>
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'center',
              color: THEME.token?.colorIcon,
            }}
          >
            <Icon type="icon-ants-star" size={30} />
            <Button onClick={showModal} style={{ backgroundColor: '#ffffff' }}>
              Select an icon
            </Button>
          </div>
        )}
      </div>

      <Modal
        wrapClassName="icons-selection-modal"
        title={
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Icon type="icon-ants-emoji" size={20} />
            {labelHeadingModal}
          </div>
        }
        headerStyle={{
          padding: '20px 20px 0',
          border: 'none',
        }}
        bodyStyle={{
          padding: '17px 20px 20px',
          width: 'fit-content',
        }}
        width="fit-content"
        footer={null}
        destroyOnClose
        open={isOpenModal}
        onCancel={handleCancel}
      >
        <InputSearch
          style={{ width: 232 }}
          onAfterChange={handleSeachIcons}
          placeholder={searchPlaceholder}
        />

        <div style={{ paddingTop: 28, width: 650 }}>
          <ScrollBox
            height={460}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '35px' }}
          >
            {renderListIcons(listIcons)}
          </ScrollBox>
        </div>
      </Modal>
    </IconSelectionWrapper>
  )
}
