import { isDate, isObject } from './utils'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
  // replace 特殊字符的替换
}

// url 参数拼接格式处理
export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }
  const parts: string[] = []
  Object.keys(params).forEach(key => {
    const val = params[key]
    if (val === null || typeof val === 'undefined') {
      return
    }
    let values = []
    // 参数params是数组时， foo: ['bar', 'baz']
    if (Array.isArray(val)) {
      values = val
      // url 参数键值格式 /base/get?foo[]=bar&foo[]=baz
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(val => {
      // 判断值的类型是日期、对象或是其他
      if (isDate(val)) {
        // 日期类型
        val = val.toISOString()
      } else {
        // object对象类型
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
  let serializedParams = parts.join('&')
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }
  return url
}
