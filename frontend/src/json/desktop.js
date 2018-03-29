const getRandomInt = (start, end) => {
  return start + Math.floor(Math.random() * (end - start))
}
const getRandomFloat = (start, end, fixed = 2) => {
  return (start + Math.random() * (end - start)).toFixed(fixed)
}
export const BASE_INFOS = [{
  name_cn: '光谷一路',
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
  }]
}, {
  name_cn: '光谷二路',
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
  }]
}, {
  name_cn: '光谷三路',
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
  }]
}, {
  name_cn: '光谷四路',
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
  }]
}, {
  name_cn: '高新大道',
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
  }]
}]
