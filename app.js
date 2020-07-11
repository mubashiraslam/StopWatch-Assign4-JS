var msec=0;
var sec=0;
var min=0;
var msecId=document.getElementById('three');
var secId=document.getElementById('two');
var minId=document.getElementById('one');
var interval;
var but1=document.getElementById('but1');
var but2=document.getElementById('but1');
var btn3=document.getElementById('btn3');
// For Record
var mins=document.getElementById('mins');
var secs=document.getElementById('secs');
var msecs=document.getElementById('msecs');

but1.disabled=false;
but2.disabled=false;
btn3.disabled=false;



function timer(){
msec++;
msecId.innerHTML=msec;
if(msec>=100){
sec++;
msec=0;
secId.innerHTML=sec;
}
if(sec>=60){
    min++;
    sec=0;
minId.innerHTML=min;
}
}

function start(){
    interval=setInterval(timer, 10);
        but1.disabled=true;
        btn3.disabled=false;
}
        
function pause(){
    clearInterval(interval);
    but2.disabled=true;
    but1.disabled=false;
}

function reset(){
    if(btn3.disabled=true){
    but1.disabled=false;
    mins.innerHTML=min;
    secs.innerHTML=sec;
    msecs.innerHTML=msec;
    };
msec=0;
sec=0;
min=0;
msecId.innerHTML=msec;
secId.innerHTML=sec;
minId.innerHTML=min;
pause();
}


