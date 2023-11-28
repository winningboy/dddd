let handleId = 0;
/* 나중에 설명 */

const h1 = document.getElementById("time")
//id를 가져와서 h1에 넣음.
const go = document.getElementById("go")
const stop = document.getElementById("stop")


function getTime(){
    const date = new Date()

    const hour = date.getHours();//시
    const minutes = date.getMinutes();//분
    const seconds = date.getSeconds();//초
    
    //리터럴
    const time=`${hour}:${minutes}:${seconds}`

    h1.textContent = time;

}

getTime()

go.onclick = function(){
    if(handleId==0){
        //setInterval은 0이 아닌 정수를 보낸다.
        handleId = setInterval(getTime, 1000)
    }
}

stop.onclick = function(){
    clearInterval(handleId)
    handleId = 0;
}