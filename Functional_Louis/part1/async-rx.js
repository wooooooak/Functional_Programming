//명령형
// 하려는 일은 단순한데 코드는 적잖이 복잡해 보이고,
// 비즈니스 로직이 모두 한 곳에 집중되어 있어 모듈성 결여.
// 무엇보다 이 함수는 외부 상태에 의존하는 탓에 재사용이 어려움.
let valid = false;
const elem = document.querySelector("#student-ssn");
elem.onkeyup = event => {
  let val = elem.nodeValue;
  if (val !== null && val.length !== 0) {
    val = val.replace(/^\s*|\s*$|\-s/g, "");
    if (val.length === 0) {
      console.log(`올바른 ssn: ${val}!`);
      valid = true;
    }
  } else {
    console.log(`잘못된 ssn: ${val}!`);
  }
};

// 함수형 프로그래밍에 기반을 둔 리액티브 프로그램은
// 순수함수를 이용하여 map, reduce 처럼 많이 쓰이는 연산으로 데이터를 처리할 수 있고
// 람다 표현식의 간결함을 누릴 수 있음

Rx.Observable.fromEvent(document.querySelector("#student-ssn"), "keyup")
  .pluck("srcElement", "value")
  .map(ssn => ssn.replace(/^\s*|\s*$|\-s/g, ""))
  .filter(ssn => ssn !== null && ssn.length === 9)
  .subscribe(validSsn => {
    console.log(`올바른 ssn ${validSsn}`);
  });

// 수행하는 모든 연산이 완전한 불변이고
// 비즈니스 로직은 모두 개별 함수로 나뉘었다. 매핑, 필터 등등..
