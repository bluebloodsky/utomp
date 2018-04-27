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
    name_cn: '电力电缆监测',
    icon: 'icon-tailor',
    url: 'cable-monitor',
  }, {
    name_cn: 'GIL监测',
    icon: 'icon-accessory',
    url: 'gil-monitor',
  }, {
    name_cn: '配电监测',
    icon: 'icon-commodity',
    url: 'cable-monitor',
  }, {
    name_cn: '雨污仓数据监测',
    icon: 'icon-integral',
    url: 'rain-monitor'
  }, {
    name_cn: '安防监控',
    icon: 'icon-live',
    url: 'safe-monitor'
  }, {
    name_cn: '预警控制',
    icon: 'icon-clock',
    url: 'safe-monitor'
  }, {
    name_cn: '通信系统',
    icon: 'icon-command',
    url: 'safe-'
  }]
}, {
  name_cn: '日常值守',
  icon: 'icon-group',
  url: 'subnav',
  sub_menus: [{
    name_cn: 'GIS',
    icon: 'icon-coordinates',
    url: 'event-gis',
  }, {
    name_cn: '事件处置',
    icon: 'icon-questions',
    url: 'event-handle',
  }, {
    name_cn: '运检监控',
    icon: 'icon-live',
    url: 'oper-monitor',
  }, {
    name_cn: '入廊作业',
    icon: 'icon-task',
    url: 'tunnel-work',
  }, {
    name_cn: '视频监控',
    icon: 'icon-video',
    url: 'vedio-monitor',
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
    name_cn: '巡检数据',
    icon: 'icon-label',
    url: 'inspect-data'
  }, {
    name_cn: '隐患管理',
    icon: 'icon-warning',
    url: 'inspect-log'
  }, {
    name_cn: '配置管理',
    icon: 'icon-setup',
    url: 'setting-manage'
  }]
}, {
  name_cn: '应急指挥',
  icon: 'icon-remind',
  url: 'subnav',
  // sub_menus: [{
  //   name_cn: '风险分析',
  //   icon: 'icon-flip',
  //   url: 'unknown',
  // }, {
  //   name_cn: '火灾应急动画',
  //   icon: 'icon-live',
  //   url: 'unknown',
  // }, {
  //   name_cn: '火灾预案',
  //   icon: 'icon-fire',
  //   url: 'fire-handle',
  // }, {
  //   name_cn: '入侵应急动画',
  //   icon: 'icon-video',
  //   url: 'unknown',
  // }, {
  //   name_cn: '入侵预案',
  //   icon: 'icon-login-variant',
  //   url: 'unknown',
  // }],
  sub_menus: [{   
    name_cn: '管外应急指挥',
    icon: 'icon-fire',
    url: 'fire-handle',
  }, {
    name_cn: '管内应急指挥',
    icon: 'icon-login-variant',
    url: 'in-command',
  }]

}, {
  name_cn: '辅助决策',
  icon: 'icon-offline',
  url: 'subnav',
  sub_menus: [{
    name_cn: '监测数据分析',
    icon: 'icon-dynamic',
    url: 'unknown',
  }, {
    name_cn: '综合评价',
    icon: 'icon-select',
    url: 'unknown',
  }, {
    name_cn: '检修方案',
    icon: 'icon-shielding',
    url: 'unknown',
  }, {
    name_cn: '更换策略',
    icon: 'icon-coupons',
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
