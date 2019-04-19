// 부수효과를 일으키는 명령형 showStudent Function
const find = curry((db, id) => {
    let obj = db.find(id);
    if (obj === null) {
        throw new Error("객체를 찾을 수 없습니다!");
    }
    return obj;
})

const csv = student =>
    `${student.ssn}, ${student.firsstname}, ${student.lastname}`;

const append = curry((selector, info) => {
    document.querySelector(selector).innerHTML = info
})

// 재사용 가능한 컴포넌트 3개로 나뉘어 코드가 훨씬 유연해짐
// 이렇게 잘게 나뉜 함수를 재사용하면 신경 써서관리할 코드 크기가 확 줄기 때문에 생산성 향상
// 가장 중요한 건, HTML 객체와의 상효작용을 자체 함수로 빼내어 순수하지 않은 불순한 로직을 순수함수에서 배제했다는 점.