/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

// 国家代码到中文国家名的映射
const countryCodeMap: Record<string, string> = {
  CN: '中国',
  US: '美国',
  JP: '日本',
  KR: '韩国',
  GB: '英国',
  FR: '法国',
  DE: '德国',
  IT: '意大利',
  ES: '西班牙',
  RU: '俄罗斯',
  CA: '加拿大',
  AU: '澳大利亚',
  BR: '巴西',
  IN: '印度',
  MX: '墨西哥',
  ID: '印度尼西亚',
  NL: '荷兰',
  TR: '土耳其',
  SA: '沙特阿拉伯',
  CH: '瑞士',
  TW: '台湾',
  HK: '香港',
  MO: '澳门',
  SG: '新加坡',
  MY: '马来西亚',
  TH: '泰国',
  VN: '越南',
  PH: '菲律宾',
  NZ: '新西兰',
  SE: '瑞典',
  NO: '挪威',
  DK: '丹麦',
  FI: '芬兰',
  PL: '波兰',
  BE: '比利时',
  AT: '奥地利',
  GR: '希腊',
  PT: '葡萄牙',
  IE: '爱尔兰',
  IL: '以色列',
  AE: '阿联酋',
  AR: '阿根廷',
  CL: '智利',
  CO: '哥伦比亚',
  PE: '秘鲁',
  ZA: '南非',
  EG: '埃及',
  NG: '尼日利亚',
  KE: '肯尼亚',
}

// 常见地区名称到中文的映射（主要针对中国省份和常见地区）
const regionMap: Record<string, string> = {
  // 中国省份
  'Jiangsu': '江苏',
  'Jiangxi': '江西',
  'Jilin': '吉林',
  'Liaoning': '辽宁',
  'Shandong': '山东',
  'Shanxi': '山西',
  'Shaanxi': '陕西',
  'Sichuan': '四川',
  'Yunnan': '云南',
  'Zhejiang': '浙江',
  'Anhui': '安徽',
  'Fujian': '福建',
  'Gansu': '甘肃',
  'Guangdong': '广东',
  'Guangxi': '广西',
  'Guizhou': '贵州',
  'Hainan': '海南',
  'Hebei': '河北',
  'Heilongjiang': '黑龙江',
  'Henan': '河南',
  'Hubei': '湖北',
  'Hunan': '湖南',
  'Inner Mongolia': '内蒙古',
  'Inner': '内蒙古',
  'Mongolia': '内蒙古',
  'Beijing': '北京',
  'Shanghai': '上海',
  'Tianjin': '天津',
  'Chongqing': '重庆',
  'Tibet': '西藏',
  'Xinjiang': '新疆',
  'Ningxia': '宁夏',
  'Qinghai': '青海',
  'Hong Kong': '香港',
  'Macau': '澳门',
  'Macao': '澳门',
  'Taiwan': '台湾',
  
  // 美国州名
  'California': '加利福尼亚',
  'New York': '纽约',
  'Texas': '德克萨斯',
  'Florida': '佛罗里达',
  'Illinois': '伊利诺伊',
  'Pennsylvania': '宾夕法尼亚',
  'Ohio': '俄亥俄',
  'Georgia': '佐治亚',
  'North Carolina': '北卡罗来纳',
  'Michigan': '密歇根',
  
  // 其他常见地区
  'Tokyo': '东京',
  'Osaka': '大阪',
  'Seoul': '首尔',
  'London': '伦敦',
  'Paris': '巴黎',
  'Berlin': '柏林',
  'Moscow': '莫斯科',
  'Sydney': '悉尼',
  'Melbourne': '墨尔本',
  'Toronto': '多伦多',
  'Vancouver': '温哥华',
}

// 常见ISP名称到中文的映射
const ispMap: Record<string, string> = {
  'China Mobile': '中国移动',
  'China Unicom': '中国联通',
  'China Telecom': '中国电信',
  'China Mobile Communications': '中国移动',
  'China Unicom Beijing': '中国联通',
  'China Telecom Beijing': '中国电信',
  'China Netcom': '中国网通',
  'China Education and Research Network': '中国教育和科研计算机网',
  'China Internet Network Information Center': '中国互联网络信息中心',
  'Alibaba': '阿里巴巴',
  'Tencent': '腾讯',
  'Baidu': '百度',
  'Huawei': '华为',
  'ZTE': '中兴',
  'China Tower': '中国铁塔',
  'China Tietong': '中国铁通',
  'China Railcom': '中国铁通',
  'China Satcom': '中国卫通',
  'China Broadcasting Network': '中国广电',
  'Amazon': '亚马逊',
  'Google': '谷歌',
  'Microsoft': '微软',
  'Apple': '苹果',
  'Facebook': '脸书',
  'Twitter': '推特',
  'Cloudflare': 'Cloudflare',
  'Akamai': 'Akamai',
  'Fastly': 'Fastly',
  'DigitalOcean': 'DigitalOcean',
  'Linode': 'Linode',
  'Vultr': 'Vultr',
  'Hetzner': 'Hetzner',
  'OVH': 'OVH',
  'Alibaba Cloud': '阿里云',
  'Tencent Cloud': '腾讯云',
  'Baidu Cloud': '百度云',
  'Huawei Cloud': '华为云',
  'UCloud': 'UCloud',
  'QingCloud': '青云',
  'JD Cloud': '京东云',
  'Kingsoft Cloud': '金山云',
}

/**
 * 翻译国家代码为中文
 */
export function translateCountryCode(code: string | null | undefined): string {
  if (!code) return code || ''
  const upperCode = code.toUpperCase()
  return countryCodeMap[upperCode] || code
}

/**
 * 翻译地区名称为中文
 */
export function translateRegion(region: string | null | undefined): string {
  if (!region) return region || ''
  
  const trimmedRegion = region.trim()
  
  // 直接匹配（大小写敏感）
  if (regionMap[trimmedRegion]) {
    return regionMap[trimmedRegion]
  }
  
  // 尝试匹配包含该地区的字符串（如 "Jiangsu Province" -> "江苏"）
  // 按长度从长到短排序，优先匹配更长的键
  const sortedKeys = Object.keys(regionMap).sort((a, b) => b.length - a.length)
  for (const key of sortedKeys) {
    if (trimmedRegion.includes(key)) {
      return regionMap[key]
    }
  }
  
  // 如果包含逗号，尝试翻译第一部分
  if (trimmedRegion.includes(',')) {
    const parts = trimmedRegion.split(',').map(p => p.trim())
    const translatedParts = parts.map(part => {
      if (regionMap[part]) {
        return regionMap[part]
      }
      // 尝试匹配包含该部分的字符串
      for (const key of sortedKeys) {
        if (part.includes(key)) {
          return regionMap[key]
        }
      }
      return part
    })
    return translatedParts.join('，')
  }
  
  return trimmedRegion
}

/**
 * 翻译ISP名称为中文
 */
export function translateIsp(isp: string | null | undefined): string {
  if (!isp) return isp || ''
  
  const trimmedIsp = isp.trim()
  
  // 特殊处理：如果ISP以 "AS" 开头（ASN号码），保留原样
  if (trimmedIsp.startsWith('AS') && /^AS\d+/.test(trimmedIsp)) {
    return trimmedIsp
  }
  
  // 直接匹配
  if (ispMap[trimmedIsp]) {
    return ispMap[trimmedIsp]
  }
  
  // 尝试匹配包含该ISP的字符串
  // 按长度从长到短排序，优先匹配更长的键
  const sortedKeys = Object.keys(ispMap).sort((a, b) => b.length - a.length)
  for (const key of sortedKeys) {
    if (trimmedIsp.includes(key)) {
      return ispMap[key]
    }
  }
  
  return trimmedIsp
}

