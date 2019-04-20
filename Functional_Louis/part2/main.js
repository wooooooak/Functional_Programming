const curry = new Student("Haskell", "Curry", "111-11-1111", "Penn State");
curry.address = new Address("US");

const turing = new Student("Alan", "Turing", "222-22-222", "Princeton");
turing.address = new Address("US");

const church = new Student("Alonzo", "Church", "333-13-1331", "Princeton");
church.address = new Address("US");

const Kleene = new Student("Stephen", "Kleene", "444-44-4444", "Princeton");
Kleene.address = new Address("US");

// 함수형으로 문제들을 작은 함수로 잘게 쪼개어 코딩하기

// 학생의 거주 국가와 학교를 비교하는 selector 함수
// 먼저 국가명과 학교명을 입력받고, 학생 하나를 입력 받는 함수를 리턴한다.
const selector = (country, school) => student =>
  student.address.country === country && student.school === school;

const findStudentBy = (friends, selector) => friends.filter(selector);

findStudentBy(
  [curry, turing, church, Kleene],
  selector("US", "Princeton") // 국가와 학교명
);

// 함수형 프로그래밍으로 작성하니 findStudentBy와 같은 전혀 새로운 함수가 탄생했고 다루기 쉬워졌다.
// 결국 객체지향은 데이터와 데이터 관계의 본질에 초점을 두는 반면,
// 함수형의 관심사는 해야 할 일, 즉 기능에 초점을 둔다.

// 객체지향에서는 데이터와 기능이 클래스 안에서 끈끈하게 결합되어있는 반면,
// 함수형에서는 독립적인 순수함수가 느슨하게 결합한다(클래스 안에 순수 함수가 존재하든 밖에 존재하든).
