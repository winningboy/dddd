//변수 선언 방식 : Var, Let, Const

const spans = document.querySelectorAll("span")

const constants = document.querySelectorAll(".content")

//querySelectorAll은 배열 형태로 가지고 옴
const firstTop = constants[0].offsetTop
const secondTop = constants[1].offsetTop
const thirdTop = constants[2].offsetTop


spans[0].onclick = function(){
    window.scroll({top:firstTop, behavior: 'smooth'})
}
spans[1].onclick = function(){
    window.scroll({top:secondTop, behavior: 'smooth'})
}
spans[2].onclick = function(){
    window.scroll({top:thirdTop, behavior: 'smooth'})
}
/* 2번 3번 만들어 보기*/
