import { AxiosRequestConfig, AxiosPromise, AxiosResonse } from './types'

import xhr from './xhr'
import { buildURL } from './tools/url'
import { transfromRequest, transfromResponse } from './tools/data'
import { processHeaders } from './tools/headers'

function processConfig(config: AxiosRequestConfig): void {
  config.url = transfromURL(config)
  // 顺序必须先处理headers
  config.headers = transfromHeaders(config)
  config.data = transfromRequestData(config)
}

// URL 参数解析
function transfromURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

// Body 参数解析
function transfromRequestData(config: AxiosRequestConfig): any {
  return transfromRequest(config.data)
}

// 请求头解析
function transfromHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

// 响应信息解析
function transfromResponseData(res: AxiosResonse): AxiosResonse {
  res.data = transfromResponse(res.data)
  return res
}

// 访问的入口
function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transfromResponseData(res)
  })
}

export default axios
