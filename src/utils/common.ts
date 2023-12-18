/* eslint-disable no-underscore-dangle */
// Libraries
import axios from 'axios'

// Constants
import { MESSAGES, PORTAL_KEYS } from 'minhquanle-ui/es/services/constants'

/**
 * Function to reorder list
 * @param {Object[]} list - list of item want to reorder
 * @param {number} startIndex - start item index want to replace position: ;
 * @param {number} endIndex - end item index want to replace position: ;
 * @returns {object[]}
 */
export const reorder = (
  list: Array<Record<string, unknown> | string | number>,
  startIndex: number,
  endIndex: number
): any[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)

  result.splice(endIndex, 0, removed)

  return result
}

export const safeParse = (val, defaultVal) => {
  if (
    typeof val === 'undefined' ||
    val === 'undefined' ||
    val === null ||
    val.length === 0 ||
    val === 'NaN'
  ) {
    return defaultVal
  }
  return val
}

export function getPortalId(config) {
  const portalId = safeParse(getSessionStorage('api_pid', config), 0)
  if (portalId === 0) {
    return getAppParamURL(window.location.pathname, false, config).portalId
  }
  return portalId
  // return safeParse(getAppSession('api_pid'), 0);
}

export const safeParseInt = (val, defaultVal) => {
  let tempt = safeParse(val, 0)
  if (tempt !== 0) {
    tempt = parseInt(tempt)
    if (Number.isNaN(tempt)) {
      return defaultVal
    }
  }
  return tempt
}

export function isUrlEmbedded() {
  return false
}

function getDataWithEmbeddedPublic(key, config) {
  const data = safeParse(config.embeddedData, {})
  return data[key]
}

export function getWindowParam(name, config) {
  return config[name]
}

export function getSessionStorage(key, config) {
  if (isUrlEmbedded()) {
    return getDataWithEmbeddedPublic(key, config)
  }
  const tempt = getWindowParam(key, config)
  if (tempt !== undefined) {
    return tempt
  }
  if (typeof Storage !== 'undefined') {
    return sessionStorage.getItem(key)
  }
  return ''
}

export function getMessageByCode(
  messageCode,
  def: undefined | string = undefined
) {
  if (def === undefined) {
    def = 'Error happened. Please try again.'
  }
  const tempt = MESSAGES[messageCode]
  if (tempt === undefined) {
    return def
  }
  return tempt
}

export function urlHasQueryString(url) {
  const arr = url.split('?')
  if (arr.length > 1 && arr[1] !== '') {
    return true
  }
  return false
}

export function isNumeric(num) {
  return !isNaN(num) && num !== ''
}

export function getUserLocaleLanguage(config) {
  return safeParse(getWindowParam(PORTAL_KEYS.USER_LANGUAGE, config), 'en')
}

export function getAppSession(key, config) {
  if (isUrlEmbedded()) {
    return getDataWithEmbeddedPublic(key, config)
  }
  let tempt = safeParse(getSessionStorage(key, config), '')

  if (tempt === '') {
    // console.error('------CAN"T NOT GET APP SESSION');
    tempt = getCookie(key, config)
  }
  return window.decodeURIComponent(tempt)
}

export function getAppParamURL(pathname, forceVersionV2 = false, config) {
  const output = {
    portalId: 0,
    accessUserId: 0,
  }
  const isV3 = pathname.indexOf('marketing-hub') > -1

  let portalId = 0
  let accessUserId = 0
  if (forceVersionV2 || !isV3) {
    try {
      // const arr = pathname.split('/');
      const arr = pathname.split('v2')

      if (arr.length >= 2) {
        const arrTmp = arr[1].split('/')
        // console.log('arrTmp', arrTmp);
        if (arrTmp.length >= 2) {
          // console.log('arr', arrTmp);
          portalId = safeParseInt(arrTmp[2], 0)
          if (portalId <= 0) {
            portalId = safeParseInt(arrTmp[1], 0)
          }
        }
      }
      if (portalId <= 0) {
        portalId = safeParseInt(getAppSession('api_pid', config), 0)
      }
    } catch (e) {
      // console.error(e);
    }
  }

  // V3 thêm param userid trên URL
  // http://localhost:5000/gen2/33167/marketing-hub/journeys/3/create
  // => http://localhost:5000/gen2/33167/1600082431/marketing-hub/journeys/3/create
  if (isV3) {
    try {
      // const arr = pathname.split('/');
      const arr = pathname.split('v2')

      if (arr.length >= 2) {
        const arrTmp = arr[1].split('/')
        if (arrTmp.length >= 2) {
          portalId = safeParseInt(arrTmp[1], 0)
          accessUserId = safeParseInt(arrTmp[2], 0)
          // if (portalId <= 0) {
          //   portalId = safeParseInt(arrTmp[1], 0);
          // }
        }
      }
      if (portalId <= 0) {
        portalId = safeParseInt(getAppSession('api_pid', config), 0)
      }
    } catch (e) {
      // console.error(e);
    }
  }

  output.portalId = portalId
  output.accessUserId = accessUserId
  return output
}

export function callApiWithAuth(
  endpoint,
  method = 'GET',
  body,
  domain = '',
  config = {},
  token = '',
  userId = '',
  isTicket = false,
  type = '',
  isAccount = false,
  isPermission = false,
  others: any = {}
) {
  console.log(token)
  const apiPid = getPortalId(config)
  const apiToken = token
  const _user_id = userId
  let _owner_id = userId
  // get from other params
  if (isTicket) {
    const params: any = {
      _token: apiToken,
      _account_id: _owner_id,
      _user_id,
    }
    // endpoint += `${apiToken}&_account_id=${_owner_id}&_user_id=${_user_id}`;
    if (type) {
      params.type = type
      // endpoint += `&type=${type}`
    }
    if (body.isGetAllAppInfo) {
      params.hasChild = body.hasChild
      params.from = body.from
    }
    return axios({
      method,
      url: `${domain}/${endpoint}`,
      params,
      data: body,
    }).catch((err) => {
      console.log(err)
    })
  }
  if (isAccount) {
    const params = {
      _token: apiToken,
      _account_id: _owner_id,
      _user_id,
      account_type: type,
    }

    return axios({
      method,
      url: `${domain}/${endpoint}`,
      params,
      data: body,
    }).catch((err) => {
      console.log(err)
    })
  }
  if (isPermission) {
    const params = {
      type,
      appCode: body.appCode,
      menuCode: body.menuCode,
      fullParent: body.fullParent,
      _token: apiToken,
      _user_id: body.ownerId || _user_id,
      _account_id: _user_id,
    }

    return axios({
      method,
      url: `${domain}/${endpoint}`,
      params,
      data: body,
    }).catch((err) => {
      console.log(err)
    })
  }
  if (Object.prototype.hasOwnProperty.call(others, '_owner_id')) {
    _owner_id = safeParse(others._owner_id, '')
  }

  const isJourney = window.location.href.includes('marketing-hub/journeys')
  if (_owner_id === 'all' && !isJourney) {
    _owner_id = _user_id
  }

  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    token: apiToken,
  }

  if (urlHasQueryString(endpoint)) {
    endpoint += `&portalId=${apiPid}&languageCode=${getUserLocaleLanguage(
      config
    )}&_user_id=${_user_id}`
  } else {
    endpoint += `?portalId=${apiPid}&languageCode=${getUserLocaleLanguage(
      config
    )}&_user_id=${_user_id}`
  }

  if (isNumeric(_owner_id)) {
    endpoint += `&_owner_id=${_owner_id}`
  }

  if (endpoint.includes('journey-histories')) {
    endpoint += `&token=${apiToken}`
  }
  return axios({
    method,
    url: `${domain}/${endpoint}`,
    data: body,
    headers,
  }).catch((err) =>
    // console.log(err);
    {
      console.log(err)
    }
  )
}

export function getData(res, def) {
  if (typeof res !== 'undefined') {
    const code = parseInt(safeParse(res.data.code, 500))
    const message = safeParse(res.data.message, '')

    // if (code === 200) {
    const data = safeParse(res.data.data, def)
    return {
      code,
      message,
      data,
    }
  }
  return {
    code: 500,
    codeMessage: 'INTERNAL_SERVER_ERROR',
    message: getMessageByCode('INTERNAL_SERVER_ERROR'),
    data: def,
  }
}

export function getEntriesV2(res, def) {
  if (typeof res !== 'undefined') {
    const code = parseInt(safeParse(res.data.code, 500))
    const message = safeParse(res.data.message, '')
    // validateRedirect(code, message);
    let codeMessage = safeParse(res.data.codeMessage, 'INTERNAL_SERVER_ERROR')
    let entries = def
    if (code === 200) {
      const data = safeParse(res.data.data, {})
      entries = safeParse(data.entries, [])
      codeMessage = 'SUCCESS'
    } else {
      const data = safeParse(res.data.data, {})
      entries = safeParse(data.entries, def)
    }
    return {
      code,
      codeMessage,
      // message: getMessageByCode(codeMessage),
      messageAPI: message,
      data: entries,
    }
  }
  return {
    code: 500,
    codeMessage: 'INTERNAL_SERVER_ERROR',
    // message: getMessageByCode('INTERNAL_SERVER_ERROR'),
    data: def,
  }
}
function getCookie(key: any, config: any): any {
  throw new Error('Function not implemented.')
}

export const getNumberFromString = (str: string) => {
  try {
    return +(str.match(/^-?\d+/) || []).flat()[0]
  } catch (error) {
    return 0
  }
}
