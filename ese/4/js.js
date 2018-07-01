var c = 0;

function reset(){
  $("#q1").removeClass("ltor1 revltor1");
  $("#q2").removeClass("ltor2 revltor2 r centro");
  $("#q2").addClass("c b hide");
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
    $("#q2").removeClass("c b");
    $("#q2").addClass("r centro");
    c=c+1;
  }
  else if(c==2){
    $("#q2").addClass("rotate");
    c=c+1;
  }
  else if(c==3){
    $("#q2").removeClass("rotate");
    $("#q1").removeClass("hide");
    $("#q1").addClass("revltor1");
    $("#q2").addClass("revltor2");
    setTimeout(reset, 1000)
    c=0;
  }

}



$(this).click(all);
