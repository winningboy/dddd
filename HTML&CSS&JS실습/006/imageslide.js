let curPos = 0; //보여주고 있는 이미지의 인덱스 번호를 저장할 변수.
let positionValue = 0; //이미지 태그의 위치 값을 저장할 변수
let IMAGE_WIDTH = 640; //이미지 넓이를 640으로 저장한 변수

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images =  document.querySelector(".images");

function next(){
    if(curPos < 3){
        prevBtn.removeAttribute('disabled')
        positionValue -= IMAGE_WIDTH;
        images.computedStyleMap.transform = `translateX(${positionValue}px)`;
        curPos += 1;  
    }

}

function init(){
    
}