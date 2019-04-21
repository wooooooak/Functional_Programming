function applyOperation(a, b, opt) {
  return opt(a, b);
}

const multiplier = (a, b) => a * b;

applyOperation(2, 3, multiplier);

// 또다른 함수를 반환하는 함수
function add(a) {
  return function(b) {
    return a + b;
  };
}
add(3)(3); // 6
// 자바스크립트 함수는 일급 + 고계여서 여느 값이나 다름없다.
// 자신이 받은 입력값을 기반으로 정의된 언제가는 실행될 값에 지나지 않는다.

// 명령형으로 미국 거주자 명단을 출력하는 방법
function printPeopleInTheUs(poeple) {
  for (let i = 0; i < poeple.length; i++) {
    const thisPerson = person[i];
    if (thisPerson.address.country === "US") {
      console.log(thisPerson);
    }
  }
}
printPeopleInTheUs([p1, p2, p3]);

// 만약 다른 나라 거주자도 보여달라고 하면?
// 고계함수를 이용하여 각 사람마다 수행할 작업을 추상화하자.
// 원하는 로직을 담아 고계함수 printPeople에 보내기만 하면 되게끔.
function printPeople(people, selector, printer) {
  people.forEach(person => {
    if (selector(person)) {
      printer(person);
    }
  });
}

const inUs = person => person.address.country === "US";

// function action(person) {
//   if (person.address.country === "US") {
//     console.log(person);
//   }
// }

printPeople(people, inUs, console.log);
// 고계함수를 쓰면 선언적 패턴이 점점 늘어나기 시작해서
// 표현식만 봐도 프로그램이 하는 일을 파악할 수 있다.

// 데이터를 고르는 기준을 재빨리 변경(구성)할 수 있고, 출력 대상을 바꾸는 일도 자유롭다.
