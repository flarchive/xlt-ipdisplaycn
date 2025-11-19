# XLT IP

![extiverse](https://extiverse.com/extension/gbcl/userip/open-graph-image)感谢这位程序员的开源

> 在帖子下方显示发帖者的 IP 地址

## 截图

![ss](https://raw.githubusercontent.com/GBCLStudio/userip/main/screenshot.png)

## 安装

```sh
composer require xlt/ipdisplaycn:"*"
php flarum migrate
```

## 更新

```sh
composer update xlt/ipdisplaycn:"*"
php flarum cache:clear
php flarum migrate
```

## 卸载

```sh
composer remove xlt/ipdisplaycn
php flarum cache:clear
```

## 使用方法

您只需在管理面板中启用此扩展即可。:)

## 特性

- 支持使用 CDN 的网站
- 简洁、详细、易懂的风格
- 无 Bug（也许？）

## 扩展

您可以轻松扩展此扩展以支持不同的 API 提供商，只需按照以下步骤操作：

- 在您的新扩展中，将 `xlt/ipdisplaycn` 作为依赖项引入
- 定义一个实现 `GBCLStudio\GeoIp\Api\GeoIpInterface` 并继承 `GBCLStudio\GeoIp\Api\Service\BaseService` 的新服务
- 在您的新扩展的 extend.php 中注册服务：`new GBCLStudio\GeoIp\Extend\ApiProvider(MyNewService::class);`
- 在 `xlt-ipdisplaycn` 命名空间下提供所需的翻译，例如：`xlt-ipdisplaycn.admin.service.YOUR_NEW_EXTENSION.label`，具体翻译文本可在[此处](https://github.com/GBCLStudio/userip/blob/502fcd12dca2a07c29fc5b008026fb5b615dc246/resources/locale/en.yml#L9)找到

## 说明

内置 IP 域名 API 由 [ip.sb](https://ip.sb) 和 [IpInfo](https://ipinfo.io) 提供

参考了以下项目的代码：fof/geoip, fof/oauth

在 [afdian](http://afdian.com/a/GBCLStudio) 支持我的工作
