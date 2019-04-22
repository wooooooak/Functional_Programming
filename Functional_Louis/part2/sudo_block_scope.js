var arr = [1, 2, 3, 4];

function processArr() {
  function multipleBy10(val) {
    i = 10;
    console.log(i);
    return val * i;
  }

  for (var i = 0; i < arr.length; i++) {
    console.log(i);
    arr[i] = multipleBy10(arr[i]);
  }
  return arr;
}

console.log(processArr()); // [10,2,3,4]

// 루프 카운터 i는 processArr 함수의 최상단으로 이동하여 선언되고,
// multipleBy10 함수의 클로저에 포함된다.
// 즉 루프 카운터의 i는 processArr 최상단으로 호이스팅되어 선언만 먼저 되고(undefined)
// 루프가 시작되면 0 값이 할당된다.
// i가 0일때는 생각대로 잘 실행되지만, 0일때 mulipleBy10을 한 번 거치면서
// i는 10이 되어버린다.
// 따라서 루프는 범위에서 넘어가므로 돌아가지 않고, 이후의 2,3,4 배열은 그대로 리턴된다
