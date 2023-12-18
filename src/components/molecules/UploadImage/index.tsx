/* eslint-disable react-hooks/exhaustive-deps */
// Libraries
import React, { useEffect, useState, useRef } from 'react'
import Upload, { UploadProps as AntdUploadProps } from 'antd/lib/upload'

// Hooks
import { useDeepCompareEffect } from 'minhquanle-ui/es/hooks'

// Assets
import PlaceholderImage from 'minhquanle-ui/es/assets/images/placeholder-image.png'
import MediaIcon from './MediaIcon'

// Service
import {
  uploadFile,
  createSavedImage,
  deleteSavedImage,
  getListingSavedImage,
} from 'minhquanle-ui/es/services/MediaTemplateDesign/UploadFile'

// Atoms
import {
  Button,
  Icon,
  Text,
  message,
  Spin,
  Input,
  Space,
} from 'minhquanle-ui/es/components/atoms'

// Molecules
import {
  Modal,
  InputSearch,
  Select,
} from 'minhquanle-ui/es/components/molecules'

// Model
import { SavedImage } from 'minhquanle-ui/es/models/SavedImage'

// Styled
import {
  Boxed,
  ErrorMessage,
  Image,
  Overlay,
  Paragraph,
  TextStyled,
  UploadImageWrapper,
  WrapperBtn,
  WrapperIcon,
  WrapperInputMode,
  WrapperListImages,
} from './styled'

// Utils
import { handleError, safeParse } from 'minhquanle-ui/es/utils'

// Constants
import { THEME } from 'minhquanle-ui/es/constants'

interface UploadImageProps extends AntdUploadProps {
  labelHeadingModal?: string
  labelButtonSelect?: string
  searchPlaceholder?: string
  onRemoveImage?: Function
  onChangeImage?: Function
  selectedImage?: UploadImageObject
  isOpen?: boolean
  isInputMode?: boolean
  width?: any
  errors?: Array<any>
  extensions?: string[]
  maxSize?: number
  title?: string
  showImageURL?: boolean
  placeholder?: string
  domainMedia: string
  slug: string
  paramConfigs?: {
    token?: string
    userId?: string
    accountId: string
  }
  required?: boolean
  focused?: boolean
}

const flexStyleCenter = {
  display: 'flex',
  gap: '15px',
  justifyContent: 'center',
  alignItems: 'center',
}

const SORT_OPTIONS = {
  BY_UPLOAD_DATE: {
    value: 1,
    label: 'Sort by Upload Date',
  },
  BY_SIZE: {
    value: 2,
    label: 'Sort by Size',
  },
}

interface UploadImageObject {
  url: string
}

const PATH = 'minhquanle-ui/es/components/molecules/UploadImage/index.tsx'

export const UploadImage: React.FC<UploadImageProps> = (props) => {
  const {
    labelHeadingModal,
    labelButtonSelect,
    searchPlaceholder,
    onRemoveImage,
    onChangeImage,
    isOpen,
    isInputMode,
    width,
    placeholder,
    extensions,
    maxSize,
    title,
    showImageURL,
    required,
    focused,
    domainMedia,
    slug,
    paramConfigs,
    errors,
  } = props

  const { Dragger } = Upload

  const [storeSavedImages, setStoreSavedImages] = useState<
    SavedImage[] | undefined
  >([])
  const [selectedImage, setSelectedImage] = useState<UploadImageObject>(
    props.selectedImage || { url: '' }
  )
  const [isModalVisible, setIsModalVisible] = useState(isOpen)
  const [listImages, setListImages] = useState<SavedImage[] | undefined>(
    storeSavedImages || []
  )
  const [sortOption, setSortOption] = useState(
    SORT_OPTIONS.BY_UPLOAD_DATE.value
  )
  const [loading, setLoading] = useState(false)
  const [isOpenConfirmDelete, setOpenConfirmDelete] = useState(false)
  const [triggerRefresh, setTriggerRefresh] = useState<number>(1)

  const uploadFilesRef = useRef<File[]>([])
  const uploadFilesTimeoutRef = useRef<NodeJS.Timeout>()
  const deleteImageRef = useRef<SavedImage | undefined>()

  const isError = safeParse(errors, []).length > 0

  useDeepCompareEffect(() => {
    setListImages(storeSavedImages || [])
    setLoading(false)
  }, [storeSavedImages])

  // When selectedImage onChange
  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setSelectedImage(props.selectedImage || { url: '' })
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.selectedImage])

  useEffect(() => {
    if (sortOption === SORT_OPTIONS.BY_SIZE.value) {
      setListImages(
        listImages
          ? [...listImages].sort((image1, image2) => image1.size - image2.size)
          : []
      )
    } else {
      setListImages(
        listImages
          ? [...listImages].sort((image1, image2) =>
              image1.createdAt && image2.createdAt
                ? image1.createdAt.isAfter(image2.createdAt)
                  ? -1
                  : 1
                : 0
            )
          : []
      )
    }
  }, [sortOption])

  const handleGetStoreSavedImages = async (domain, slug, paramConfigs) => {
    try {
      setLoading(true)
      const result = await getListingSavedImage(domain, slug, paramConfigs)

      if (result) {
        setStoreSavedImages(result || [])
      }
    } catch (error) {
      handleError(error, {
        path: PATH,
        name: 'handleGetStoreSavedImages',
        args: {
          error,
        },
      })
      // eslint-disable-next-line no-console
      console.log('error :>', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleGetStoreSavedImages(domainMedia, slug, paramConfigs)
  }, [triggerRefresh])

  const showModal = (e: any) => {
    e.stopPropagation()
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleSelectImage = (image) => {
    if (typeof onChangeImage === 'function') {
      onChangeImage(image)
    }
    setSelectedImage(image)
    handleCancel()
  }

  const onChangeSort = (option) => {
    setSortOption(option)
  }

  const renderListImages = (listImagesRender) =>
    listImagesRender.map((image, idx) => (
      <WrapperListImages className="ants-group" key={idx}>
        <Boxed>
          <Image src={image.url} alt="img" />

          <WrapperBtn className="group-hover">
            <Button
              onClick={() => handleSelectImage(image)}
              style={{ backgroundColor: 'rgb(255,255,255)' }}
            >
              USE
            </Button>
            <Button
              onClick={() => handleRemoveUploadedImage(image)}
              style={{ backgroundColor: 'rgb(255,255,255)' }}
            >
              <Icon
                type="icon-ants-remove-trash"
                size={15}
                style={{ color: THEME.token?.colorPrimary }}
              />
            </Button>
          </WrapperBtn>

          <Overlay className="group-hover" />
        </Boxed>
        <Paragraph
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
          title={image.name}
        >
          {image.name}
        </Paragraph>
        <Paragraph>
          Uploaded: {image.createdAt.format('DD/MM/YYYY')} at{' '}
          {image.createdAt.format('hh:mm:ss A')}
        </Paragraph>
        <Paragraph>Size: {image.sizeString}</Paragraph>
      </WrapperListImages>
    ))

  const onChangeSearchImage = (e) => {
    const { value } = e.target

    if (value && value.trim()) {
      setListImages(
        storeSavedImages
          ? storeSavedImages
              .filter((item) =>
                item.name
                  .toLocaleLowerCase()
                  .includes(value.trim().toLocaleLowerCase())
              )
              .slice(0, 15)
          : []
      )
    } else {
      setListImages(storeSavedImages)
    }
  }

  const handleRemoveImage = () => {
    if (onRemoveImage) {
      onRemoveImage()
    }
    setSelectedImage({ url: '' })
  }

  const handleRemoveUploadedImage = async (
    image: SavedImage | undefined,
    isConfirm = true
  ) => {
    if (isConfirm) {
      deleteImageRef.current = image
      setOpenConfirmDelete(true)
    } else if (image) {
      const res = await deleteSavedImage(
        domainMedia,
        slug,
        paramConfigs,
        +image.id
      )

      if (res && res.data && res.data.code === 200 && res.data.data) {
        const { success_image = [] } = res.data.data

        if (Array.isArray(success_image) && success_image.length) {
          setTriggerRefresh(triggerRefresh + 1)
        }
      }

      setOpenConfirmDelete(false)
      deleteImageRef.current = undefined
    }
  }

  const renderSelectedImage = () =>
    selectedImage && selectedImage.url ? (
      <Image
        src={selectedImage.url}
        alt=""
        style={{ position: 'absolute' }}
        onError={(e: any) => {
          e.target.src = PlaceholderImage
        }}
      />
    ) : null

  const customRequestUpload = async (options) => {
    try {
      const {
        // onSuccess,
        //  onError,
        file,
        //  onProgress
      } = options

      uploadFilesRef.current.push(file)
      if (uploadFilesTimeoutRef.current) {
        clearTimeout(uploadFilesTimeoutRef.current)
      }

      uploadFilesTimeoutRef.current = setTimeout(async () => {
        if (!uploadFilesRef.current.length) {
          uploadFilesRef.current = []
          return
        }

        if (uploadFilesRef.current.length > 10) {
          message.error('Maximum number of file to upload is 10!')
          uploadFilesRef.current = []
          return false
        }

        for (const file of uploadFilesRef.current) {
          if (
            !extensions
              ?.map((extension) => extension.replace('.', 'image/'))
              .includes(file.type)
          ) {
            message.error('Invalid file extension')
            uploadFilesRef.current = []
            return false
          }

          if (maxSize && maxSize > 0 && file.size > maxSize * 1024 * 1024) {
            message.error('File size too big')
            uploadFilesRef.current = []
            return false
          }
        }

        setLoading(true)

        const result = await uploadFile(
          domainMedia,
          slug,
          paramConfigs,
          uploadFilesRef.current
        ).finally(() => {
          uploadFilesRef.current = []
        })

        if (result?.length) {
          const arrPromise: Promise<any>[] = []

          result.forEach((data) =>
            arrPromise.push(
              createSavedImage(domainMedia, slug, paramConfigs, {
                image_name: data.fileName,
                properties: {
                  url: data.url,
                  image: data.file,
                  extension: data.extension,
                  dimensions_file: data.dimensionsFile,
                  size: data.size,
                  file_name: data.fileName,
                },
              })
            )
          )

          await Promise.all(arrPromise)
          setLoading(false)
          setTriggerRefresh(triggerRefresh + 1)
        } else {
          setLoading(false)
          message.error('Cannot upload image!')
        }
      }, 300)
    } catch (e) {
      uploadFilesRef.current = []
      setLoading(false)
      message.error('Cannot upload image!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {isInputMode ? (
        <WrapperInputMode width={width}>
          <Input
            required={required}
            status={errors && errors?.length > 0 ? 'error' : ''}
            placeholder={placeholder}
            value={selectedImage.url ? selectedImage.url : ''}
            focused={focused}
            style={{ paddingRight: 40 }}
            onAfterChange={(value) =>
              handleSelectImage({
                url: value,
              })
            }
          />
          <WrapperIcon onClick={showModal}>
            <MediaIcon />
          </WrapperIcon>
          {isError && (
            <ErrorMessage>
              {errors && errors?.length > 0 ? errors[0] : ''}
            </ErrorMessage>
          )}
        </WrapperInputMode>
      ) : (
        <UploadImageWrapper>
          {title ? <Text style={{ marginTop: 10 }}>{title}</Text> : null}

          <div
            className={`image-upload-content ${
              selectedImage && selectedImage.url ? 'uploaded' : ''
            }`}
          >
            {renderSelectedImage()}
            {!selectedImage || !selectedImage.url ? (
              <Icon
                type="icon-ants-image-3"
                size={36}
                style={{
                  zIndex: 1,
                  marginLeft: 25,
                  color: THEME.token?.colorIcon,
                }}
              />
            ) : null}

            <div style={flexStyleCenter}>
              <Button
                onClick={showModal}
                style={{ backgroundColor: '#ffffff' }}
              >
                Browse Image
              </Button>
              {selectedImage && selectedImage.url ? (
                <Button
                  onClick={handleRemoveImage}
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <Icon
                    type="icon-ants-remove-trash"
                    size={15}
                    style={{ color: THEME.token?.colorPrimary }}
                  />
                </Button>
              ) : null}
            </div>
          </div>

          <div className="upload-file-info" style={{ marginTop: 12 }}>
            <Text>File type: {extensions?.join(', ')}</Text>
            <Text>File size: under {maxSize}MB</Text>
          </div>

          {showImageURL && (
            <Space size={5} direction="vertical" style={{ marginTop: 12 }}>
              <Input
                label="Image URL"
                required={required}
                placeholder={placeholder}
                value={selectedImage.url ? selectedImage.url : ''}
                focused={focused}
                onAfterChange={(value) =>
                  handleSelectImage({
                    url: value,
                  })
                }
              />
            </Space>
          )}
        </UploadImageWrapper>
      )}
      <Modal
        title="Delete Image"
        visible={isOpenConfirmDelete}
        onOk={() => handleRemoveUploadedImage(deleteImageRef.current, false)}
        onCancel={() => setOpenConfirmDelete((prev) => !prev)}
        okText="OK"
        cancelText="Cancel"
      >
        <p>
          Are you sure you want to delete the image{' '}
          {deleteImageRef.current?.name}?
        </p>
      </Modal>
      <Modal
        wrapClassName="icons-selection-modal"
        title={
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Icon type="icon-ants-image-3" size={20} />
            {labelHeadingModal}
          </div>
        }
        centered
        headerStyle={{
          padding: '20px 20px 0',
          border: 'none',
        }}
        bodyStyle={{
          padding: 20,
          maxHeight: '90vh',
          width: '100%',
          overflow: 'auto',
        }}
        width={1155}
        footer={null}
        visible={isModalVisible}
        destroyOnClose
        onCancel={handleCancel}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <InputSearch
            style={{ width: 232 }}
            onChange={onChangeSearchImage}
            placeholder={searchPlaceholder}
          />
          <Select
            defaultValue={SORT_OPTIONS.BY_UPLOAD_DATE.value}
            value={sortOption}
            options={Object.values(SORT_OPTIONS)}
            style={{ width: 232 }}
            onChange={onChangeSort}
          />
        </div>

        <Spin spinning={loading}>
          <Dragger
            {...props}
            accept={extensions?.join(',')}
            // action={`${APP_CONFIG.API_URL}/file-upload/file?&_token=${userInfo?.token}&_user_id=${userInfo?.user_id}&_account_id=${userInfo?.account_id}`}
            // beforeUpload={handleBeforeUploadFile}
            // onChange={onChangeFileUpload}
            showUploadList={false}
            multiple
            customRequest={customRequestUpload}
          >
            <div
              style={{
                ...flexStyleCenter,
                height: 80,
              }}
            >
              {/* {renderSelectedImage()} */}
              <Icon
                type="icon-ants-image-3"
                size={36}
                style={{ color: THEME.token?.colorIcon }}
              />
              <div style={{ ...flexStyleCenter, justifyContent: 'flex-start' }}>
                <TextStyled className="ant-upload-text">
                  Drag & Drop file here
                </TextStyled>
                <span>or</span>
                <Button style={{ backgroundColor: '#ffffff' }}>
                  {labelButtonSelect}
                </Button>
                <Button
                  onClick={handleRemoveImage}
                  style={{
                    display: 'none !important',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <Icon
                    type="icon-ants-remove-trash"
                    size={15}
                    style={{ color: THEME.token?.colorPrimary }}
                  />
                </Button>
              </div>
            </div>
          </Dragger>
        </Spin>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '35px',
            paddingTop: 20,
            width: '100%',
          }}
        >
          {renderListImages(listImages)}
        </div>
      </Modal>
    </>
  )
}

UploadImage.defaultProps = {
  isOpen: false,
  labelHeadingModal: 'Image Selection',
  labelButtonSelect: 'Select Image from computer',
  searchPlaceholder: 'Search image...',
  domainMedia: 'https://sandbox-media-template.antsomi.com/cdp',
  slug: 'api/v1',
  isInputMode: true,
  width: '100%',
  errors: [],
  placeholder: 'Enter image URL',
  paramConfigs: {
    accountId: '',
    token: '',
    userId: '',
  },
  extensions: ['.jpg', '.png', '.jfif', '.jpeg', '.gif', '.webp'],
  maxSize: 10,
  showImageURL: true,
}
