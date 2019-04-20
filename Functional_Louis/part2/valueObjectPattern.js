// 메서드를 일부만 호출자에 공개하고 _code, _location를 의사-프라이빗 변수처럼 다루는 객체 리터럴 인터페이스를 반환하는 식으로
// 자바스크립트 함수를 이용하면 우편번호 내부 상태 접근을 차단할 수 있다.
// 이런 변수는 클로저를 거쳐야만 객체 리터럴에 접근할 수 있다.

// 이렇게 반환되는 객체는 사실상 변이를 일으키는 메서드가 전혀 없는 기본형(int, double, string)처럼 작동한다.
// 따라서 toString 메서드는 순수함수가 아니지만 순수함수처럼 작동하면서
// 해당 객체를 순수한 문자열 형태로 나타낸다.

function zipCode(code, location) {
  let _code = code;
  let _location = location || "";

  return {
    code: function() {
      return _code;
    },
    location: function() {
      return _location;
    },
    fromString: function(str) {
      let parts = str.split("-");
      return zipCode(parts[0], parts[1]);
    },
    toString: function() {
      return _code + "-" + _location;
    }
  };
}

const printcetonZip = zipCode("08544", "3345");
printcetonZip.toString();

// 값을 변경하고 싶을 때, 속성을 변경하는게 아니라 새로운 객체를 반환하는 방법
// tranlsate함수 처럼 사본을 새로 만들어 반환하는 메서드 역시 불변성을 구현하는 수단.
function coordinate(lat, long) {
  let _lat = lat;
  let _long = long;

  return {
    latitude: function() {
      return _lat;
    },
    longitude: function() {
      return _long;
    },
    translate: function(dx, dy) {
      return coordinate(_lat + dx, _long + dy); // 반환된 좌표를 새 사본 객체로 반환한다.
    },
    toString: function() {
      return "(" + _lat + "," + _long + ")";
    }
  };
}

const greenwich = coordinate(51.123, 00015);
greenwich.toString();
greenwich.translate(10, 10).toString();

// 값 객체는 함수형 프로그래밍의 영향을 받은 객체지향 디자인 패턴으로
// 서로 다른 패러다임이 상호 보완적인 관계를 유지할 수 있음을 보여주는 또 다른 예이다.
// 값 객체는 이상적인 패턴이긴 하지만, 그래도 실세계의 문제를 전부 모형화하기엔 충분치 않다.
// 실무에서는 레거시 객체와 상호작용하거나 (Person, Student 같은) 계층적 데이터를 처리하는
// 코드가 필요할 때가 있기 때문이다.
// 다행히 자바스크립트에는 Object.freeze라는 멋진 방법이 있다.
