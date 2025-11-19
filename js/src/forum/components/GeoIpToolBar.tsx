/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import Component, { ComponentAttrs } from 'flarum/common/Component'
import { Data } from '../ProcessData'
import app from 'flarum/forum/app'

export interface GeoIpBarAttrs extends ComponentAttrs {
  elements: Data
}

export default class GeoIpToolBar<
  CustomAttrs extends GeoIpBarAttrs = GeoIpBarAttrs
> extends Component<CustomAttrs> {
  view() {
    const { elements } = this.attrs
    const region = String(elements["region"])
    const country = String(elements["code"])
    const originalCode = elements["originalCode"] ? String(elements["originalCode"]).toUpperCase() : ''
    const unknownNotice = app.translator.trans('xlt-ipdisplaycn.forum.unknownNotice')
    
    // 判断是否应该显示地区
    // 1. 如果是中国（CN），且地区不是"未知"，则显示地区
    // 2. 否则只显示国家
    const isChina = originalCode === 'CN' || country === '中国'
    const isUnknownRegion = region === String(unknownNotice) || region === '未知' || !region || region.trim() === ''
    
    // 决定显示的文本
    const locationText = (isChina && !isUnknownRegion) 
      ? `${region}，${country}` 
      : country
    
    return (
      <div className='userIp-container'>
        <div className='ip-locate' id='info-country'>
          {locationText}
        </div>
        <div className='ip-locate' id='info-isp'>
          {`${elements["isp"]}`}
        </div>
      </div>
    )
  }
}
