/*
 * This file is part of GBCLStudio Project.
 *
 * Copyright (c) 2023 GBCLStudio PHP Project Team.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/admin/app'
import GeoipSettingsPage from './components/ExtensionSettingsPage'

app.initializers.add('xlt/ipdisplaycn', () => {
  app.extensionData
    .for('xlt-ipdisplaycn')
    .registerPage(GeoipSettingsPage)
    .registerPermission(
      {
        icon: 'fas fa-map-marked-alt',
        label: app.translator.trans(
          'xlt-ipdisplaycn.admin.permissions.view_ip_info_label'
        ),
        permission: 'discussion.viewIpInfo',
        allowGuest: true,
      },
      'view'
    )
})
