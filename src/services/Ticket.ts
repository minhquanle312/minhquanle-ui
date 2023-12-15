import { callApiWithAuth, getData, getEntriesV2 } from '../utils/common';

const API = {
  lookupInfo: {
    callApi: {
      c_user_id: (params, domain, token, config, userId) =>
        callApiWithAuth(
          `hub/toolkit/v2.0/selector/users/listing`,
          'GET',
          null,
          domain,
          config,
          token,
          userId,
        ).then(res => {
          const data = getEntriesV2(res, 0);
          // dataBackup[params.objectName] = data;
          return data;
        }),
    },
  },
  getAppInfo: {
    getAll: (params, domain, config, token, userId) =>
      callApiWithAuth(
        `api/privilege/index`,
        'GET',
        { ...params },
        domain,
        config,
        token,
        userId,
        true,
        'list-app',
        false,
        false,
      ).then(res => {
        const data = getData(res, []);
        return data;
      }),
  },
  tickets: {
    callApi: {
      createTicket: (params, domain, token, config, userId) =>
        callApiWithAuth(
          `api/ticket/index`,
          'POST',
          { ...params },
          domain,
          config,
          token,
          userId,
          true,
        ).then(res => {
          const data = getEntriesV2(res, 0);
          // dataBackup[params.objectName] = data;
          return data;
        }),
      getCustomFields: (params, domain, token, config, userId, type) =>
        callApiWithAuth(
          `api/ticket/index`,
          'get',
          { ...params },
          domain,
          config,
          token,
          userId,
          true,
          type,
        ).then(
          res =>
            // const data = getEntriesV2(res, 0);
            // dataBackup[params.objectName] = data;
            res?.data,
        ),
      getDetailsTicket: (params, domain, token, config, userId, ticketId, type) =>
        callApiWithAuth(
          `api/ticket/index/${ticketId}`,
          'get',
          { ...params },
          domain,
          config,
          token,
          userId,
          true,
          type,
        ).then(
          res =>
            // const data = getEntriesV2(res, 0);
            // dataBackup[params.objectName] = data;
            res?.data,
        ),
      getListComment: (params, domain, token, config, userId, type, ticketId) =>
        callApiWithAuth(
          `api/ticket/index/${ticketId}`,
          'get',
          { ...params },
          domain,
          config,
          token,
          userId,
          true,
          type,
        ).then(
          res =>
            // const data = getEntriesV2(res, 0);
            // dataBackup[params.objectName] = data;
            res?.data,
        ),
      updateComment: (params, domain, token, config, userId, type, ticketId) =>
        callApiWithAuth(
          `api/ticket/index/${ticketId}`,
          'put',
          { ...params },
          domain,
          config,
          token,
          userId,
          true,
          type,
        ).then(
          res =>
            // const data = getEntriesV2(res, 0);
            // dataBackup[params.objectName] = data;
            res?.data,
        ),
      updateFollowers: (params, domain, token, config, userId, ticketId) =>
        callApiWithAuth(
          `api/ticket/index/${ticketId}`,
          'put',
          { ...params },
          domain,
          config,
          token,
          userId,
          true,
        ).then(
          res =>
            // const data = getEntriesV2(res, 0);
            // dataBackup[params.objectName] = data;
            res?.data,
        ),
      upload: (params, domain, token, config, userId, type) =>
        callApiWithAuth(
          `api/upload/index`,
          'post',
          params.data,
          domain,
          config,
          token,
          userId,
          true,
          type,
        ).then(
          res =>
            // const data = getEntriesV2(res, 0);
            // dataBackup[params.objectName] = data;
            res?.data,
        ),
    },
  },
  accounts: {
    callApi: {
      getAccountManage: (params, domain, token, config, userId, type) =>
        callApiWithAuth(
          `api/network/index/${config.api_pid}`,
          'GET',
          { ...params },
          domain,
          config,
          token,
          userId,
          false,
          type,
          true,
        ).then(res => res?.data),
    },
  },
  permission: {
    callApi: {
      getList: (params, domain, token, config, userId, type, ownerId) =>
        // console.log({params, domain, token, config,userId, type})
        callApiWithAuth(
          `api/privilege/index`,
          'GET',
          { ...params, ownerId },
          domain,
          config,
          token,
          userId,
          false,
          type,
          false,
          true,
        ).then(res => res?.data),
    },
  },
  help: {
    callApi: {
      getList: (params, domain, token, config, userId) =>
        callApiWithAuth(
          `api/app/index?appCode=${params.appCode}&type=getListHelpApps&role=1`,
          'GET',
          { ...params },
          domain,
          config,
          token,
          userId,
          true,
        ).then(
          res =>
            // console.log(res);
            // const data = res;
            // dataBackup[params.objectName] = data;
            res,
        ),
    },
  },
};

export default API;
