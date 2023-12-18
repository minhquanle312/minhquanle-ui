// Libraries
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider as AntdConfigProvider } from 'antd'
import { ConfigProviderProps as AntdConfigProviderProps } from 'antd/es/config-provider'
import React, { ReactNode, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// Constants
import { THEME } from 'minhquanle-ui/es/constants'

// Style
import { GlobalStyle } from './GlobalStyle'

// Types
import { TLocale } from 'minhquanle-ui/es/types'

// Initialize languages
import 'minhquanle-ui/es/locales/i18n'

interface ConfigProviderProps extends Omit<AntdConfigProviderProps, 'locale'> {
  children?: ReactNode
  locale?: TLocale
}

const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  // Props
  const { children, locale, ...restOfProps } = props

  // I18next
  const { i18n } = useTranslation()

  // Effects
  useEffect(() => {
    if (locale) {
      i18n.changeLanguage(locale)
    }
  }, [i18n, locale])

  return (
    <AntdConfigProvider {...restOfProps}>
      <GlobalStyle />
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </AntdConfigProvider>
  )
}

ConfigProvider.defaultProps = {
  theme: THEME,
  prefixCls: 'antsomi',
  locale: 'en',
}

export default ConfigProvider
