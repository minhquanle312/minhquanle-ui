/* eslint-disable no-promise-executor-return */
// Services
import { SavedImage } from 'src/models/SavedImage';
import { Upload } from 'src/models/Upload';
import { services } from 'src/services';

export const getListingSavedImage = async (domainUrl, slug, infos): Promise<SavedImage[]> => {
  try {
    const { data } = await services.mediaTemplateSavedImages.getList(
      {
        API_HOST: `${domainUrl}/${slug}/saved-image/index`,
      },
      infos,
    );

    let savedImages = data?.data || [];

    savedImages = savedImages.map(savedImage => new SavedImage(savedImage));

    return savedImages;
  } catch (error) {
    return new Promise((_, reject) => reject(error));
  }
};

export const createSavedImage = (domainUrl, slug, infos, data) => {
  try {
    return services.mediaTemplateSavedImages.create(
      {
        API_HOST: `${domainUrl}/${slug}/saved-image/index`,
        ...data,
      },
      infos,
    );
  } catch (error) {
    return new Promise((_, reject) => reject(error));
  }
};

export const deleteSavedImage = (domainUrl, slug, infos, id) => {
  try {
    return services.mediaTemplateSavedImages.create(
      {
        API_HOST: `${domainUrl}/${slug}/saved-image/index/update-status`,
        image_id: [id],
        status: 80,
      },
      infos,
    );
  } catch (error) {
    return new Promise((_, reject) => reject(error));
  }
};

export const uploadFile = async (domainUrl, slug, infos, files): Promise<Upload[]> => {
  try {
    const formData = new FormData();

    files.forEach(file => {
      formData.append('files', file);
    });

    const result = await services.mediaTemplateSavedImages.upload(
      {
        API_HOST: `${domainUrl}/${slug}/file-upload/file`,
        formData,
      },
      infos,
    );

    const uploadData = result ? result.data?.data : null;

    return uploadData?.length
      ? uploadData.map(
          file =>
            new Upload({
              url: file.url,
              file: file.file,
              extension: file.extension,
              dimensions_file: file.dimensions_file,
              size: file.size,
              file_name: file.file_name,
            }),
        )
      : [];
  } catch (error) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((_, reject) => reject(error));
  }
};
