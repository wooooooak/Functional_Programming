let counter = 0;

// 순수하지 않은 함수
function increment() {
    return ++counter
}

// 순수한 함수
const pureIncrement = counter => counter +1;
 // 이제 같은 입력에 같은 결과를 반환하는 안전한 함수다.
 // 테스트하기 쉬워졌고, 전체 로직을 파악하는 것도 쉬워진다.

 increment();
 increment();
console.log(counter); // 이게 무슨 값일까? 중간에 값이 언제 어떻게 바뀌었을지 모르므로 반환갑을 예측하기 어렵다.

// 함수형
const plus2 = run(increment, increment)
console.log(plus2(0));

// 학생들 평균 점수를 계산하는 간단한 예제
const input = [80, 90, 100]

const sum = (total, current) => total + current;
const total = arr => arr.length;
const divide = (a,b) => a / b;
const average = (arr) => divide(total(arr), size(arr)); // 선언적 프로그래밍이라서 책읽듯이 읽힌다.
average(input); // -> 90
