/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import '@antscorp/icons/main.css';

import {
  ColorSetting,
  ConfigProvider,
  DatePicker,
  EdgeSetting,
  // ChatBox
  Help,
  IconSelection,
  PositionSetting,
  RadioGroup,
  SettingWrapper,
  SliderWithInputNumber,
  Space,
  UploadImage,
} from './components';

// Constants
import { THEME } from './constants';

export const BACKGROUND_COLOR_STYLE = {
  SOLID: {
    value: 'color',
    label: 'Solid',
  },
  GRADIENT: {
    value: 'gradient',
    label: 'Gradient',
  },
};

export const customColors = [
  '#f7da64',
  '#8912dd',
  '#ed1515',
  '#230439',
  '#d11a66',
  '#ffbd64',
  '#f1ab96',
  '#824ccd',
  '#5858e9',
  '#57b8c2',
];

type MarginProps = number | 'auto';
type ValueProps = [MarginProps, MarginProps, MarginProps, MarginProps];

export const App = () => {
  const [state, setState] = useState<{
    date: string;
    option: any;
    format: string;
  }>({
    option: {
      dateType: 'today',
      calculationDate: 'years',
      calculationType: 'minus',
      value: 1,
    },
    date: '',
    format: 'YYYYMMDD',
  });

  const [colorSettingState, setColorSettingState] = useState<{
    color: string;
    customColors: Array<string>;
  }>({
    color: 'green',
    customColors,
  });

  const [radioValue, setRadioValue] = useState('color');
  const [sliderValue, setSliderValue] = useState(10);
  const [edge, setEdge] = useState<ValueProps>(['auto', 'auto', 700, 700]);
  const [icon, setIcon] = useState('');

  const callbackColorSetting = (key: 'ON_ADD_NEW_PRESET' | 'ON_EDIT_CLICKED', dataIn: any) => {
    switch (key) {
      case 'ON_ADD_NEW_PRESET':
        // eslint-disable-next-line no-case-declarations
        const { customColors = [] } = dataIn;

        setColorSettingState(prev => ({
          ...prev,
          customColors,
        }));
        break;
      case 'ON_EDIT_CLICKED': {
        // eslint-disable-next-line no-console
        console.log('insideee.dev - clicked edit preset :>');
        break;
      }

      default:
        break;
    }
  };

  const handleChangeColorSetting = (colorOut: string) => {
    setColorSettingState(prev => ({
      ...prev,
      color: colorOut,
    }));
  };

  const handleChangeRadio = e => {
    const { value = '' } = e.target;
    setRadioValue(value);
  };

  const handleChangeSlider = value => {
    setSliderValue(value);
  };

  const handleSetIcon = value => {
    setIcon(value);
  };

  // ----------------------------  Test Helps Start ------------------------------
  // return (
  //   <div style={{ display: 'flex', justifyContent: 'center', width: '100vw', height: '100vh' }}>
  //     <Help />
  //   </div>
  // );
  // ----------------------------  Test Helps End ------------------------------

  // ------------------------ Media template components test start -------------------------
  return (
    <ConfigProvider>
      <div
        style={{
          width: 500,
          height: 1000,
          border: '1px solid black',
          margin: '0 auto',
          padding: 12,
          borderRadius: '10px',
          marginTop: 12,
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Test component of media template</h2>
        <Space size={20} direction="vertical">
          <SettingWrapper vertical label="Color Setting">
            <ColorSetting
              label="Background Color"
              labelStyling={{ color: THEME.token?.colorIcon }}
              color={colorSettingState.color}
              customColors={colorSettingState.customColors}
              callback={callbackColorSetting}
              onChange={handleChangeColorSetting}
            />
          </SettingWrapper>
          <SettingWrapper label="Radio Group">
            <RadioGroup
              options={Object.values(BACKGROUND_COLOR_STYLE)}
              value={radioValue}
              onChange={e => handleChangeRadio(e)}
            />
          </SettingWrapper>
          <SliderWithInputNumber
            label="Size (px)"
            labelStyling={{ marginTop: 10 }}
            min={0}
            max={100}
            value={sliderValue}
            onAfterChange={handleChangeSlider}
          />
          <EdgeSetting
            label="Notification Spacing"
            unit="px"
            linked={false}
            values={edge}
            // edgeLabels={[t(translations.column.title), t(translations.row.title)]}
            onChange={({ values, linked, unit }) => {
              setEdge(values);
              // onUpdateSettings({
              //   gapX: values[0] + unit,
              //   gapY: values[1] + unit,
              //   gapSuffix: unit,
              //   linkedGapInput: linked,
              // });
            }}
          />
          <PositionSetting
            settings={{ linkedPositionInput: false, positionSuffix: 'px' }}
            styles={{ top: '10px', right: '20px', bottom: '30', left: '40' }}
            onChange={() => {}}
          />
        </Space>
        <Space size={10} direction="vertical">
          <SettingWrapper vertical label="Background Image" containerStyle={{ gap: '20px' }}>
            <UploadImage
              domainMedia="https://sandbox-media-template.antsomi.com"
              slug="cdp/api/v1"
              labelButtonSelect="Select Toggle from Computor"
              labelHeadingModal="Toggle Selection"
              searchPlaceholder="Search toggle"
              paramConfigs={{
                token: '5474r2x214z294b423a4y474d4j5q274p4g494f4k5p5',
                userId: '1600084695',
                accountId: '1600084695',
              }}
              // title="Background Image"
              selectedImage={{
                url: 'https://th.bing.com/th?id=OSK.8664d1b5838c79a3d74a3e97739978b5&w=148&h=148&c=7&o=6&dpr=2&pid=SANGAM',
              }}
              onChangeImage={image =>
                // onChangeSettings('backgroundImageObj', {
                //   name: image.name,
                //   previewUrl: image.url,
                // })
                {}
              }
              onRemoveImage={() => {
                // onChangeSettings('backgroundImageObj', {
                //   name: '',
                //   previewUrl: '',
                // });
              }}
            />
          </SettingWrapper>
          <SettingWrapper vertical label="Icon">
            <IconSelection
              isOpen={false}
              labelHeadingModal="Toggle Selection"
              searchPlaceholder="Search for toggle..."
              icon={icon}
              onChange={handleSetIcon}
              iconTypes={['cus', 'font-awesome']}
              onChangeSvg={value => {
                console.log('onChangeSvg', value);
              }}
            />
          </SettingWrapper>
        </Space>
      </div>
    </ConfigProvider>
  );
  // ------------------------ Media template components test end -------------------------

  // return (
  //   <DatePicker.AdvancedRangePicker
  //     disabled
  //     showTime={false}
  //     timeRange={{
  //       startDate: {
  //         date: '',
  //         calculationDate: 'years',
  //         value: 1,
  //         calculationType: 'minus',
  //         dateType: 'today',
  //       },
  //       endDate: {
  //         date: '',
  //         calculationDate: 'days',
  //         value: 1,
  //         calculationType: 'minus',
  //         dateType: 'today',
  //       },
  //     }}
  //   />
  // );
};

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale="vi">
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
