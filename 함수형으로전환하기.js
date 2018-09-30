const { _map } = require("./_");

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

// 1. 명령형 코드
// 1. 30세 이상인 users를 거른다.
let temp_users = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);
// 2. 30세 이상인 users의 names를 수집한다.
let names = [];
for (let i = 0; i < temp_users.length; i++) {
  names.push(temp_users[i].name);
}
console.log(names);
// 3. 30세 미만인 users를 거른다.
let temp_users = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);
// 4. 30세 미만인 users의 ages를 수집한다.
let ages = [];
for (let i = 0; i < temp_users.length; i++) {
  ages.push(temp_users[i].age);
}
console.log(ages);

//  _filter, _map으로 리팩토링
const _filter = (users, predi) => {
  let new_list = [];
  for (let i = 0; i < users.length; i++) {
    if (predi(users[i])) {
      new_list.push(users[i]);
    }
  }
  return new_list;
};

// call은 바로 호출하는 것이고 bind는 호출 하지 않고 this만 새로 지정한 함수를 반환
function _rest (list, num = 1) {
  return Array.prototype.slice.call(list, num);
}

function _reduce (list, iterFunc, memo) {
  if (arguments.length == 2) {
    memo = list[0];
    list = _rest(list);
  }
  _each(list, (val) => {
    memo = iterFunc(memo, val);
  });
  return memo;
}

_reduce([ 1, 2, 3 ], (a, b) => {
  return a + b;
});

_reduce(
  [ 1, 2, 3, 4 ],
  (a, b) => {
    return a + b;
  },
  0
);

// 파이프 라인 만들기

function _pipe () {
  let fns = arguments;
  return function (arg) {
    return _reduce(
      fns,
      (arg, fn) => {
        return fn(arg);
      },
      arg
    );
  };
}

const f1 = _pipe(
  function (a) {
    return a + 1;
  }, //1 + 1
  function (a) {
    return a * 2;
  } // 2 * 2
);

f1(1);

// _go  즉시 실행되는 pipe 함수

const _go = () => {
  let fns = _rest(arguments);
  return _pipe.apply(null, fns)(arg);
};

_go(
  1,
  function (a) {
    return a + 1;
  }, //1 + 1
  function (a) {
    return a * 2;
  }, // 2 * 2
  console.log
);

// filter와 map을 curryr을 적용해 만든다면 아래와 같이도 가능하다.
// filter와 map의 인자로 함수만 주게 되면, 두번째 인자로 배열이 들어와야 하는데,
// _go의 첫번째 인자인 users가 차례대로 들어가기 때문에 가능하다
_go(users, _filter((user) => user.age >= 30), _map(_get("name")), console.log);

// _each의 외부 다형성 높이기
//   1. _each에 null 넣어도 에러 안나게
_each(null, console.log);
_map(null, (v) => v);

//   2. _keys 만들기
//   3. _keys에서도 _is_object인지 검사하여 null 에러 안나게
console.log(Object.keys({ name: "id", age: "33" }));
console.log(Object.keys(null)); // error

function _is_object (obj) {
  return typeof obj == "object" && !!obj;
}

function _keys (obj) {
  return _is_object(obj) ? Object.keys(obj) : [];
}

_each(
  {
    13: "Id",
    19: "ead",
    29: "yd"
  },
  (name) => {
    console.log(name);
  }
);
