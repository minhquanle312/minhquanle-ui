import moment from 'moment';
import { Model } from './model';

export type TSavedImage = {
  image_id: string;
  network_id: string;
  image_name: string;
  properties: {
    url: string;
    size: number;
    image: {
      path: string;
    };
    extension: string;
    file_name: string;
    dimensions_file: {
      type: string;
      width: number;
      height: number;
      orientation: number;
    };
  };
  status: string;
  ctime: string;
};

export class SavedImage extends Model<TSavedImage> {
  get id() {
    return this.model.image_id || '';
  }

  get name() {
    return this.model.image_name || '';
  }

  get url() {
    return this.model.properties?.url || '';
  }

  get createdAt() {
    return moment(this.model.ctime, true).isValid() ? moment(this.model.ctime) : null;
  }

  get size() {
    return +(this.model.properties?.size || 0);
  }

  get sizeString() {
    const { properties } = this.model;
    const dimensionsFile = properties?.dimensions_file;

    return `${Math.round(10 * ((properties?.size || 0) / 1024)) / 10} KB, ${
      dimensionsFile?.width
    } x ${dimensionsFile?.height} `;
  }
}
