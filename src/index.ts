import { AxiosRequestConfig } from './types'

import xhr from './xhr'
import { buildURL } from './tools/url'

function processConfig(config: AxiosRequestConfig): void {
  config.url = transfromURL(config)
}

function transfromURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

export default axios
