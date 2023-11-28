//리터럴

/*기존의 문자열은 따옴표를 이용해 표현하였지만,
  리터럴은 백틱을 이용해 표현한다.
  백틱: [~] 쉬프트 안누르고 [`] */


const data1 = "데이터"
const str1 = `문자열 중간에 ${data1} 삽입하기`
console.log(str1)

const data2 = '100'
const str2 = `숫자도 문자로 녹아든다 : ${data2}`
console.log(str2)

let number= 21;
let player ="제라드"
console.log(`제가 좋아하는 축구 선수는 ${player}, 그의 등 번호는 ${21}`)
