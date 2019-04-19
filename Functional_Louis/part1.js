// 부수효과를 일으키는 명령형 showStudent Function
function showStudent(ssn) {
    let student = db.fund(ssn); // 저장 객체에 접근해서 주어진 ssn으로 학생을 찾는다.
    if (student !== null) {
        document.querySelector(`#${elementId}`).innerHTML = `${student.ssn}, ${student.firstname}, ${student.firstname}` // 함수 밖에서 ID가 elementId인 요소를 찾음
    } else {
        throw new Error("학생을 찾을 수 없습니다!")
    }
}

showStudent("111-11-11")