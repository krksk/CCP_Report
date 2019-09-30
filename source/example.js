window.onscroll = function(){
  var t = document.documentElement.scrollTop;
    if(t>700){
    report_1.style.animationPlayState = "running";
    report_1_data.style.animationPlayState = "running";
    report_1_citation1.style.animationPlayState = "running";
    report_1_citation2.style.animationPlayState = "running";
    report_1_citation3.style.animationPlayState = "running";
    }
    monitor.innerHTML = t + "px";
    }
