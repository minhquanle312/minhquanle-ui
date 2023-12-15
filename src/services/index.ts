// Libraries
import axios, { AxiosResponse } from 'axios';
import qs from 'qs';

export const instance = axios.create();

const { CancelToken } = axios;

export const services = {
  mediaTemplateSavedImages: {
    getList: function getList(params, infos): any {
      if (typeof params.API_HOST !== 'undefined') {
        const { API_HOST } = params;
        const { userId, accountId, token } = infos;
        const cancelToken = params.cancelToken ? params.cancelToken : new CancelToken(() => {});
        const { signal } = params;

        delete params.API_HOST;
        delete params.cancelToken;
        delete params.signal;

        const snapParams = {
          ...params,
          _token: token,
          _user_id: userId,
          _account_id: accountId,
        };

        return instance.get(API_HOST, {
          params: snapParams,
          cancelToken,
          signal,
        });
      }
      return false;
    },
    create: function create(params, infos): Promise<AxiosResponse<any, any> | any> {
      if (params.API_HOST !== 'undefined') {
        const { API_HOST } = params;
        const { userId, accountId, token } = infos;
        const cancelToken = params.cancelToken ? params.cancelToken : new CancelToken(() => {});

        delete params.API_HOST;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        params.cancelToken && delete params.cancelToken;

        const paramsInfo = {
          _token: token,
          _user_id: userId,
          _account_id: accountId,
        };

        return instance.post(API_HOST, params, { cancelToken, params: paramsInfo });
      }
      return Promise.resolve(false);
    },
    upload: function upload(params, infos) {
      if (typeof params.API_HOST !== 'undefined') {
        const { API_HOST } = params;
        const { userId, accountId, token } = infos;

        delete params.API_HOST;

        const paramsInfo = {
          _token: token,
          _user_id: userId,
          _account_id: accountId,
        };

        const url = `${API_HOST}?${qs.stringify(params.params)}`;

        return instance.post(url, params.formData, {
          params: paramsInfo,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      return false;
    },
  },
};
