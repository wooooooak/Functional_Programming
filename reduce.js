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
