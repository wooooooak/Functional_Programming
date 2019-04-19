// 명령형 코드
let enrollment = [
    {enrolled: 2, grade: 100}, // 학생1
    {enrolled: 2, grade: 80},  // 학생2
    {enrolled: 1, grage: 89}   // 학생3
];

// 아래의 코드를 한 줄 한 줄 읽으며 어떤 변수가 어떤 상황일 때 어떻게 변하는지를
// 파악하여, 역으로 의미를 추적해야 한다. 이 변수가 이때 이렇게 변하고, 이 값이 이럴때는
// if문으로 이런 처리를 해주는 것으로 보아서
// 복수 과목을 수강한 학생들의 평균 점수를 계산하는 코드겠구나~ 라고 유추해야한다.
// 이렇게 해야 하는 이유는, 아래의 코드가 컴퓨터에게 명령하는 식으로 짜진 코드이기 때문이다.
// 컴퓨터에게 명령을 하기 위한 코드이지, 사람이 서로 소통할 때 처럼 의미 전달이 명확한 코드는 못된다.
let totalGrades = 0;
let totalStudentsFound = 0;
for(let i = 0; i < enrollment.length; i++) {
    let student = enrollment[i];
    if(student !== null) {
        if(student.enrolled > 1) {
            totalGrades += student.grade;
            totalStudentsFound++;
        }
    }
}

const average = totalGrades / totalStudentsFound; // -> 90

// 함수형 코드 (로대시JS)
_.chain(enrollment)
    .filter(student => student.enrolled > 1)
    .pluck('grade')
    .average()
    .value(); // -> 90 // value()를 호출해야 체인에 연결된 모든 연산들이 실행된다.