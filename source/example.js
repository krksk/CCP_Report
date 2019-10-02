window.onscroll = function(){
  var t = document.documentElement.scrollTop;
    if(t>700){
    report_1_data.style.animationPlayState = "running";
    }
    if(t>2300){
    report_2_data.style.animationPlayState = "running";
    }
    monitor.innerHTML = t + "px";
    }
