// Types
import { theme, ThemeConfig } from 'antd';

// Variables
const { defaultAlgorithm, defaultSeed } = theme;
const mapToken = defaultAlgorithm(defaultSeed);
const { gold1, gold6 } = mapToken;

type TTheme = {
  token?: ThemeConfig['token'] & { [key: string]: any };
  components?: ThemeConfig['components'];
  algorithm?: ThemeConfig['algorithm'];
  hashed?: ThemeConfig['hashed'];
  inherit?: ThemeConfig['inherit'];
};

export const THEME: TTheme = {
  token: {
    colorText: '#000000',
    colorTextBase: '#222222',
    colorTextDark: '#333333',
    colorTextPlaceholder: '#BEBEBE',
    colorTextDisabled: '#999999',
    colorError: '#CF1825',
    colorWarning: '#faad14',
    colorPrimary: '#005fb8',
    colorTextHover: '#3a72b6',
    colorLink: '#005fb8',
    colorLinkHover: '#1B76CD',
    colorTextActive: '#e0ebf7',
    colorIcon: '#666666',
    borderRadius: 3,
    fontFamily: 'Roboto',
    fontSize: 12,
    fontSizeMd: 14,
    fontSizeLg: 16,
    controlHeight: 30,
    bgLightTransparent: 'rgba(0, 0, 0, 0.3)',
    blue: '#F2F9FF',
    blue0: '#f5f9fc',
    blue1_1: '#DEEFFE',
    blue1: '#B8CFE6',
    blue2: '#CAE5FE',
    blue3: '#81BCF4',
    blue4: '#5DA6EB',
    blue5: '#3B8FDE',
    blue6: '#1B76CD',
    blue7: '#005EB8',
    blue8: '#004F9B',
    blue9: '#003F7B',
    blue10: '#002E59',
    red: '#FFF2F3',
    red2: '#FFB8BE',
    red3: '#FF989F',
    red6: '#EF3340',
    red7: '#CF1825',
    red8: '#FF0000',
    bw0: '#FFFFFF',
    bw1_1: '#f8f8fc',
    bw1: '#f0f6fa',
    bw2: '#F0F0F0',
    bw3: '#E5E5E5',
    bw3_5: '#E6E6E6',
    bw4: '#D4D4D4',
    bw5: '#BEBEBE',
    bw6: '#A2A2A2',
    bw7: '#7F7F7F',
    bw8: '#595959',
    bw9: '#2D2D2D',
    bw10: '#000000',
    accent: '#f5f5f5',
    accent1: '#e0e0e0',
    accent2: '#dddddd',
    accent3: '#d2d2d2',
    accent5: '#999999',
    gold1,
    gold6,
  },
};

THEME.components = {
  Button: {
    paddingContentHorizontal: 10,
    colorBorder: THEME.token?.blue1,
    colorText: THEME.token?.colorPrimary,
    colorBgTextHover: THEME.token?.blue,
    colorBgContainerDisabled: THEME.token?.bw6,
    colorTextDisabled: THEME.token?.bw0,
  },
  Input: {
    controlHeight: 32,
    colorBgContainerDisabled: THEME.token?.bw2,
    colorTextDisabled: THEME.token?.bw10,
    colorBorder: THEME.token?.blue1,
    colorTextPlaceholder: THEME.token?.bw6,
    borderRadius: 0,
    borderRadiusLG: 0,
    borderRadiusSM: 0,
    borderRadiusOuter: 0,
    borderRadiusXS: 0,
  },
  Select: {
    borderRadius: 0,
    borderRadiusLG: 0,
    borderRadiusSM: 0,
    borderRadiusOuter: 0,
    borderRadiusXS: 0,
    colorBorder: THEME.token?.blue1,
    controlItemBgActive: '#E0EBF7',
    colorBgContainerDisabled: THEME.token?.bw2,
    fontSizeIcon: 14,
  },
  Tag: {
    colorBgContainer: 'red',
  },
  InputNumber: {
    borderRadius: 0,
    borderRadiusLG: 0,
    borderRadiusSM: 0,
    borderRadiusOuter: 0,
    borderRadiusXS: 0,
    colorBorder: THEME.token?.blue1,
    controlItemBgActive: '#E0EBF7',
    colorBgContainerDisabled: THEME.token?.bw2,
    // fontSizeIcon: 14,
  },
  DatePicker: {
    borderRadius: 0,
    borderRadiusLG: 0,
    borderRadiusSM: 0,
    borderRadiusOuter: 0,
    borderRadiusXS: 0,
    colorBorder: THEME.token?.blue1,
    controlItemBgActive: '#E0EBF7',
    colorBgContainerDisabled: THEME.token?.bw2,
    fontSizeIcon: 14,
    controlHeight: 31,
  },
  Divider: {
    marginLG: 10,
  },
  Checkbox: {
    controlInteractiveSize: 18,
  },
  Modal: {
    borderRadiusSM: 3,
    paddingContentHorizontalLG: 0,
    paddingLG: 0,
    paddingMD: 0,
  },
  Tabs: {
    colorPrimary: '#1F5FAC',
    margin: 20,
  },
};
