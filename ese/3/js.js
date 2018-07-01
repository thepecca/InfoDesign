var c= 0;

function all(){
  if (c==0){
  $("#pb").addClass("rotatedx1");
  c=c+1;
  }
  else if (c==1){
  $("#qr").removeClass("hide");
  $("#pr").addClass("rotatesx2");
  c=c+1;
  }
  else if (c==2){
  $("#pb").removeClass("rotatedx1");
  $("#pr").removeClass("rotatesx2");
  $("#pb").addClass("rotatesx1");
  $("#pr").addClass("rotatedx2");
  c=c+1;
  }
  else if (c==3){
  $("#pb").removeClass("rotatesx1");
  $("#pr").removeClass("rotatedx2");
  $("#qr").addClass("hide");
  c=0;
  }

}


$("#sun").click(all);
