
var hr=0;
var min=0;
var sec=0;
var counter=0;

var timer=false;




function start(){
    timer=true
    stopwatch()
}
function stop(){
    timer=false
}
function restart(){
    var hr=0;
    var min=0;
    var sec=0;
    var counter=0;
    document.getElementById("hr").innerHTML=hr
    document.getElementById("min").innerHTML=min
    document.getElementById("sec").innerHTML=sec
    document.getElementById("count").innerHTML=counter
}


function stopwatch(){
    if(timer==true){
        counter= counter+1

        if(counter==100){
            sec= sec+1
            counter=0
        }
        if(sec==60){
            min= min+1
            sec=0
        }
        if(min==60){
            hr= hr+1
            min=0
            sec=0
        }

      
        document.getElementById("hr").innerHTML=hr
        document.getElementById("min").innerHTML=min
        document.getElementById("sec").innerHTML=sec
        document.getElementById("count").innerHTML=counter
        setTimeout("stopwatch()",0)
    }
}