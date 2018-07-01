var c = 0;

function tutto() {
  if(c == 2){
    $("#q2").removeClass("animated fadeIn");
    $("#q1").removeClass("rant");
    $("#q1").addClass("rorinfi");
    $("#q2").addClass("rantinfi");
    c = c+1;
  }
  else if(c == 1){
    $("#q2").removeClass("hide");
    $("#q2").addClass("animated fadeIn");
    c = c+1;
  }
  else if(c == 0){
    $("#q1").addClass("rant");
    c = c+1;
  }
  else {
    $("#q1").removeClass("rorinfi");
    $("#q2").removeClass("rantinfi");
    $("#q2").addClass("hide");
    c = 0;
  }
}


$("#q1").click(tutto);
$("#q2").click(tutto);
