// Q No.1
let text = document.getElementById('text');
console.log(text.innerHTML);

// Q No.2
let textTag = document.getElementsByTagName('h1');
console.log(textTag[1].innerHTML);

// Q No.3
let textArea = document.getElementsByClassName('box');
console.log(textArea[0].innerHTML);

// Q.No. 4
let heading = document.getElementsByTagName('h1');
heading[2].innerText="Hello World ";
console.log(heading[2].innerHTML);

// Q No.5
let head = document.getElementsByTagName('h1');
function callme() {
    head[3].innerText="Welcome to Elevation academy"
    console.log(head[3].innerText);
}

//Q No.6
let header = document.getElementById('heading');
console.log(heading[4].style.color="red");

// Q.No: 7 
let par=document.querySelector('.parent');
let btn=document.getElementsByTagName('button');
let count = 0;
btn[1].addEventListener('click',()=>{
    if(count%2===0){
        par.setAttribute('style','flex-direction: column');
        count++;
    }
    else{
        par.setAttribute('style','flex-direction: row');
        count++
    }
    
})

//Q No.9
let timely = document.querySelector('.timely');
function callMe(){
    let date = new Date;
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    let time = `${hrs}:${mins}:${sec}`;
    console.log(time);
    timely.innerText=time;
}
setInterval(() => {
    callMe();
},1000 )