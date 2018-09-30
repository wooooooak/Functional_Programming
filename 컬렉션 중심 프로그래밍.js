const { _map } = require("./_");

// 컬렉션 중심 프로그래밍의 4가지 유형과 함수

// 1. 수집하기 - map, values, pluck 등
// 2. 거르기 - filter, reject, compact, without 등
// 3. 찾아내기 - find, some, every 등
// 4. 접기 - reduce, min, max, group_by, count_by

const users = [
  { id: 1, name: "ID", age: 36 },
  { id: 2, name: "BJ", age: 32 },
  { id: 3, name: "JM", age: 32 },
  { id: 4, name: "PJ", age: 27 },
  { id: 5, name: "HA", age: 25 },
  { id: 6, name: "JE", age: 26 },
  { id: 7, name: "JI", age: 31 },
  { id: 8, name: "MP", age: 23 }
];

console.log(_map(users, (user) => user.name));

//  1. values
function _values (data) {
  return _map(data, _identity);
}

const _values = _map(_identity);

function _identity (val) {
  return val;
}

// 2. pluck
// function _pluck (data, key) {
//   return _map(data, (obj) => obj[key]);
// }
function _pluck (data, key) {
  return _map(data, _get(key));
}

_pluck(users, "age");
// [33, 22, 11,  ...]
