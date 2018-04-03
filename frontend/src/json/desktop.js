const getRandomInt = (start, end) => {
  return start + Math.floor(Math.random() * (end - start))
}
const getRandomFloat = (start, end, fixed = 2) => {
  return (start + Math.random() * (end - start)).toFixed(fixed)
}

const EVENTS_ENUMS = ['', '', '']
const now = new Date().getTime()

export const BASE_INFOS = [{
  name_cn: '光谷一路',
  gis: [
    [114.447561, 30.512324],
    [114.452961, 30.504515],
    [114.447257, 30.496942],
    [114.450266, 30.445063],
    [114.450266, 30.445063]
  ],
  manager: '李明浩',
  tot_len: getRandomFloat(0.5, 30),
  used_day: getRandomInt(1, 200),
  tunnel_wire: [{
    name: '电力',
    value: getRandomInt(1, 20)
  }, {
    name: '综合',
    value: getRandomInt(1, 20)
  }, {
    name: '雨污',
    value: getRandomInt(1, 20)
  }, {
    name: '天然气',
    value: getRandomInt(1, 20)
  }],
  events: [{
    event_time: new Date(now - getRandomInt(1, 86400)),
    event_desc: '作业人员刷卡进入',
    event_level: 'info'
  }, {
    event_time: new Date(now - getRandomInt(1, 86400)),
    event_desc: '天然气泄漏',
    event_level: 'alarm'
  }]
}, {
  name_cn: '光谷二路',
  gis: [
    [114.45737, 30.472604],
    [114.466126, 30.450016],
    [114.461206, 30.420838],
    [114.46082, 30.415316]
  ],
  manager: '张光北',
  tot_len: getRandomFloat(0.5, 30),
  used_day: getRandomInt(1, 200),
  tunnel_wire: [{
    name: '电力',
    value: getRandomInt(1, 20)
  }, {
    name: '综合',
    value: getRandomInt(1, 20)
  }, {
    name: '雨污',
    value: getRandomInt(1, 20)
  }, {
    name: '天然气',
    value: getRandomInt(1, 20)
  }],
  events: [{
    event_time: new Date(now - getRandomInt(1, 86400)),
    event_desc: '作业人员刷卡进入',
    event_level: 'info'
  }, {
    event_time: new Date(now - getRandomInt(1, 86400)),
    event_desc: '天然气泄漏',
    event_level: 'alarm'
  }]
}, {
  name_cn: '光谷三路',
  gis: [
    [114.476106, 30.514678],
    [114.487287, 30.492989],
    [114.486999, 30.437208],
    [114.494473, 30.42525]
  ],
  manager: '程鑫',
  tot_len: getRandomFloat(0.5, 30),
  used_day: getRandomInt(1, 200),
  tunnel_wire: [{
    name: '电力',
    value: getRandomInt(1, 20)
  }, {
    name: '综合',
    value: getRandomInt(1, 20)
  }, {
    name: '雨污',
    value: getRandomInt(1, 20)
  }, {
    name: '天然气',
    value: getRandomInt(1, 20)
  }],
  events: [{
    event_time: new Date(now - getRandomInt(1, 86400)),
    event_desc: '作业人员刷卡进入',
    event_level: 'info'
  }, {
    event_time: new Date(now - getRandomInt(1, 86400)),
    event_desc: '天然气泄漏',
    event_level: 'alarm'
  }]
}, {
  name_cn: '光谷四路',
  gis: [
    [114.491011, 30.512467],
    [114.491011, 30.512467],
    [114.498844, 30.493797],
    [114.500929, 30.482718],
    [114.500929, 30.482718]
  ],
  manager: '罗大力',
  tot_len: getRandomFloat(0.5, 30),
  used_day: getRandomInt(1, 200),
  tunnel_wire: [{
    name: '电力',
    value: getRandomInt(1, 20)
  }, {
    name: '综合',
    value: getRandomInt(1, 20)
  }, {
    name: '雨污',
    value: getRandomInt(1, 20)
  }, {
    name: '天然气',
    value: getRandomInt(1, 20)
  }],
  events: [{
    event_time: new Date(now - getRandomInt(1, 86400)),
    event_desc: '作业人员刷卡进入',
    event_level: 'info'
  }, {
    event_time: new Date(now - getRandomInt(1, 86400)),
    event_desc: '天然气泄漏',
    event_level: 'alarm'
  }]
}, {
  name_cn: '高新大道',
  gis: [
    [114.429005, 30.500915],
    [114.440666, 30.496516],
    [114.451076, 30.494763],
    [114.465647, 30.491501],
    [114.49928, 30.495734],
    [114.559933, 30.494613],
    [114.59874, 30.490008],
    [114.59874, 30.490008],
    [114.691589, 30.495609]
  ],
  manager: '程伟',
  tot_len: getRandomFloat(0.5, 30),
  used_day: getRandomInt(1, 200),
  tunnel_wire: [{
    name: '电力',
    value: getRandomInt(1, 20)
  }, {
    name: '综合',
    value: getRandomInt(1, 20)
  }, {
    name: '雨污',
    value: getRandomInt(1, 20)
  }, {
    name: '天然气',
    value: getRandomInt(1, 20)
  }],
  events: [{
    event_time: new Date(now - getRandomInt(1, 86400)),
    event_desc: '作业人员刷卡进入',
    event_level: 'info'
  }, {
    event_time: new Date(now - getRandomInt(1, 86400)),
    event_desc: '天然气泄漏',
    event_level: 'alarm'
  }]
}]
