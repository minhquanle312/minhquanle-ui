import { Model } from './model';

type TUpload = {
  url: string;
  file: {
    path: string;
  };
  extension: string;
  dimensions_file: {
    height: number;
    orientation: number;
    width: number;
    type: string;
  };
  size: number;
  file_name: string;
};

export class Upload extends Model<TUpload> {
  get fileName() {
    return this.model.file_name;
  }

  get file() {
    return this.model.file;
  }

  get url() {
    return this.model.url || '';
  }

  get extension() {
    return this.model.extension || '';
  }

  get dimensionsFile() {
    return this.model.dimensions_file;
  }

  get size() {
    return +(this.model.size || 0);
  }
}
