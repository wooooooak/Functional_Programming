class Person {
  constructor(firstname, lastname, ssn) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._ssn = ssn;
    this._address = null;
    this._birthYear = null;
  }

  get ssn() {
    return this._ssn;
  }

  get firstname() {
    return this._firstname;
  }

  get lastname() {
    return this._lastname;
  }

  get address() {
    return this._address;
  }

  get birthYear() {
    return this._birthYear;
  }

  // 세터 메서드는 객체 변이를 지원하기 위해서가 아니라, 생성자를 길게 쓰지 않고도
  // 속성이 다른 객체를 쉽게 만들기 위해 사용된다. 객체는 일단 생성되고 내용이 채워지면
  // 절대로 상태가 바뀌지 않는다.
  set birthYear(year) {
    this._birthYear = year;
  }

  set address(addr) {
    this._address = addr;
  }

  // 객체지향적으로 거주 국가가 같은 사람을 찾는 메서드
  peopleInSameCountry(friends) {
    let result = [];
    for (let idx in friends) {
      const friends = friends[idx];
      if (this.address.country === friends.address.country) {
        result.push(friends);
      }
    }
    return result;
  }

  toString() {
    return `Person(${this._firstname}, ${this._lastname})`;
  }
}
