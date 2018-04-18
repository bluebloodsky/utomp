export const NAV_MENUS = [{
  name_cn: '首页',
  icon: 'icon-homepage',
  url: 'desktop'
}, {
  name_cn: '综合监控',
  icon: 'icon-camera',
  url: 'subnav',
  sub_menus: [{
    name_cn: '管廊本体监测',
    icon: 'icon-computer',
    url: 'body-monitor',
  }, {
    name_cn: 'GIL监测',
    icon: 'icon-tailor',
    url: 'gil-monitor',
  }, {
    name_cn: '电力电缆监测',
    icon: 'icon-tailor',
    url: 'cable-monitor',
  }, {
    name_cn: '配电监测',
    icon: 'icon-tailor',
    url: 'cable-monitor',
  }, {
    name_cn: '雨污仓数据监测',
    icon: 'icon-integral',
    url: 'rain-monitor'
  }, {
    name_cn: '安防监控',
    icon: 'icon-clock',
    url: 'safe-monitor'
  }, {
    name_cn: '预警控制',
    icon: 'icon-clock',
    url: 'safe-monitor'
  }, {
    name_cn: '通信系统',
    icon: 'icon-clock',
    url: 'safe-monitor'
  }]
}, {
  name_cn: '日常值守',
  icon: 'icon-group',
  url: 'subnav',
  sub_menus: [{
    name_cn: '事件处置',
    icon: 'icon-questions',
    url: 'event-handle',
  }, {
  //   name_cn: '巡检监控',
  //   icon: 'icon-tasklist',
  //   url: 'wire-manage',
  // }, {
    name_cn: '入廊作业',
    icon: 'icon-barrage',
    url: 'wire-manage',
  }]
}, {
  name_cn: '巡检维护',
  icon: 'icon-workbench',
  url: 'subnav',
  sub_menus: [{
    name_cn: '巡检总览',
    icon: 'icon-browse',
    url: 'inspect-view',
  }, {
    name_cn: '任务管理',
    icon: 'icon-tasklist',
    url: 'task-manage',
  }, {
    name_cn: '巡检统计',
    icon: 'icon-dynamic',
    url: 'inspect-statistics'
  }, {
    name_cn: '巡检日志',
    icon: 'icon-order',
    url: 'inspect-log'
  }, {
    name_cn: '配置管理',
    icon: 'icon-setup',
    url: 'setting-manage'
  }]
}
/*
, {
  name_cn: '入廊作业',
  icon: 'icon-createtask',
  url: 'subnav',
  sub_menus: [{
    name_cn: '管线基本信息管理',
    icon: 'icon-barrage',
    url: 'wire-manage',
  }, {
    name_cn: '人员及权限管理',
    icon: 'icon-group',
    url: 'org-manage',
  }, {
    name_cn: '监测设备管理',
    icon: 'icon-mobilephone',
    url: 'sensor-manage'
  }]
}
*/
, {
  name_cn: '应急指挥',
  icon: 'icon-remind',
  url: 'subnav',
  sub_menus: [{
    name_cn: '待定',
    icon: 'icon-lock',
    url: 'unknown',
  }]
}, {
  name_cn: '辅助决策',
  icon: 'icon-offline',
  url: 'subnav',
  sub_menus: [{
    name_cn: '待定',
    icon: 'icon-lock',
    url: 'unknown',
  }]
}, {
  name_cn: '行政管理',
  icon: 'icon-manage',
  url: 'subnav',
  sub_menus: [{
    name_cn: '待定',
    icon: 'icon-lock',
    url: 'unknown',
  }]
}]
