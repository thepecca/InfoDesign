var c=0;


function all() {
  if(c==0 && $(this).attr("id")=="q1"){
    $("#q1").removeClass("l");
    $("#q2").removeClass("r");
    $("#q1").addClass("r");
    $("#q2").addClass("l");
    c=c+1;
  }
  else if (c==1 && $(this).attr("id")=="q1") {
  $("#q0").addClass("rotatedx");
  c=c+1;
  }
  else if (c==2) {
  $("#q0").removeClass("rotatedx");
  $("#q1").removeClass("r");
  $("#q2").removeClass("l");
  $("#q1").addClass("l");
  $("#q2").addClass("r");
  c=0;
  }
}


$(".q").click(all);
