var c = 0;
var n = 0;

function count(){
  $("p").text(n);
  n=n+2;
  if(c==0){
    n=0;
    return;
  }
  setTimeout(count,1000)
}

function reset(){
  $("#q1").removeClass("revltor1");
  $("#q2").removeClass("revltor2 centro");
  $("#q2").addClass("c hide");
}

function all(){
  if(c==0){
    $("#q2").removeClass("hide");
    $("#q1").addClass("ltor1");
    $("#q2").addClass("ltor2");
    c=c+1;
  }
  else if(c==1){
    $("#q1").addClass("hide");
    $("#txt").removeClass("hide");
    $("#q2").removeClass("c", count());
    $("#q2").addClass("centro");
    c=c+1;
  }
  else if(c==2){
    $("#q1").removeClass("ltor1");
    $("#q2").removeClass("ltor2");
    n=n+1
    c=c+1;
  }
  else if(c==3){
    $("#txt").addClass("hide");
    $("#q1").removeClass("hide");
    $("#q1").addClass("revltor1");
    $("#q2").addClass("revltor2");
    setTimeout(reset, 1000)
    c=0;
  }

}



$(this).click(all);
