/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { NestedStringArray } from '@askvortsov/rich-icu-message-formatter'
import ipinfo from './Model/IPInfo'
import { translateCountryCode, translateRegion, translateIsp } from '../utils/translateIpInfo'

export type Data = {
  code: NestedStringArray
  region: NestedStringArray
  isp: NestedStringArray
  originalCode?: NestedStringArray // 原始国家代码，用于判断
} & Record<string, NestedStringArray>

export default class ProcessData {
  private readonly data: Data

  constructor(ipInfo: ipinfo) {
    this.data = {
      region: ipInfo.region(),
      code: ipInfo.countryCode(),
      isp: ipInfo.isp()
    }
  }

  process(errorNotice: NestedStringArray) {
    const elements = {} as Data
    let errorCount = 0
    
    // 处理并翻译每个字段
    const regionValue = this.data.region
    const codeValue = this.data.code
    const ispValue = this.data.isp
    
    // 翻译地区名称
    if (regionValue) {
      const regionStr = String(regionValue)
      elements.region = translateRegion(regionStr) as NestedStringArray
    } else {
      errorCount++
      elements.region = errorNotice
    }
    
    // 翻译国家代码
    if (codeValue) {
      const codeStr = String(codeValue)
      elements.originalCode = codeStr as NestedStringArray // 保留原始国家代码
      elements.code = translateCountryCode(codeStr) as NestedStringArray
    } else {
      errorCount++
      elements.code = errorNotice
      elements.originalCode = '' as NestedStringArray
    }
    
    // 翻译ISP名称
    if (ispValue) {
      const ispStr = String(ispValue)
      elements.isp = translateIsp(ispStr) as NestedStringArray
    } else {
      errorCount++
      elements.isp = errorNotice
    }
    
    if (errorCount > 2) return false

    return elements
  }
}
