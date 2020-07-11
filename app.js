var min = 0
var sec = 0
var msec = 0
var hour =  0

var heading1 =  document.getElementById("min")
var heading2 =  document.getElementById("sec")
var heading3 =  document.getElementById("msec")
var heading4 =  document.getElementById("hour")

var interval;

function  timer(){
      msec ++
     heading3.innerHTML = msec;
     if (msec >= 100){
        sec++
        heading2.innerHTML = sec
        msec= 0
     }else if ( sec >= 60){
         min ++
         sec = 0
         heading1.innerHTML = min
     }else if ( min >= 60){

         hour ++
         min =  0;
         heading4.innerText = hour
     }
}


   function start(){
    interval = setInterval(timer,10)
     document.getElementById("stop").disabled = true;
   


   }

  
   function stop(){
       clearInterval(interval)
       document.getElementById("stop").disabled = false;
   }
   function reset(){
       min = 0;
       sec = 0 ;
       msec = 0 ;
    hour = 0
       heading1.innerHTML = min ;
       heading2.innerHTML = sec;
       heading3.innerHTML = msec ;
       heading4.innerHTML = hour
       
       document.getElementById("stop").disabled = false;
   }


    function disable(){
        start.setAttribute('disabled','disabled')
    }