import { AxiosRequestConfig } from './types'

import xhr from './xhr'
import { buildURL } from './tools/url'
import { transfromRequest } from './tools/data'

function processConfig(config: AxiosRequestConfig): void {
  config.url = transfromURL(config)
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

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

export default axios
