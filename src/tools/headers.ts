import { isPlainObject } from './utils'
import { head } from 'shelljs'

// 属性/值：格式化统一大写
function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      // 删除小写的属性/值
      delete headers[name]
    }
  })
}

// headers 头信息处理
export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=UTF-8'
    }
  }
  return headers
}

// 将返回的 hearders 信息 格式化为对象形式返回
export function parseHeaders(headers: string): any {
  const parsed = Object.create(null)
  if (!headers) {
    return parsed
  }
  // 分割返回的 headers 字符串, 它是以回车换行结尾的 \r\n
  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })
  return parsed
}
