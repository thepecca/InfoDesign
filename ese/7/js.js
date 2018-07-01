var p = 0;

function inverse(a) {
  if($(a).attr('id') == "q1"){return "#q4"}
  if($(a).attr('id') == "q4"){return "#q1"}

  if($(a).attr('id') == "q2"){return "#q3"}
  if($(a).attr('id') == "q3"){return "#q2"}

  else return "ERROR";
}

var running = 0;

function all() {
  if($(this).hasClass("centro") && running == 0){
    running =1;
    if(p==0){$(this).removeClass("centro"); $(this).addClass("p4"); p=1;}
    else if(p==1){$(this).removeClass("centro"); $(this).addClass("p3"); p=2;}
    else if(p==2){$(this).removeClass("centro"); $(this).addClass("p2"); p=3;}
    else if(p==3){$(this).removeClass("centro"); $(this).addClass("p1"); p=4;}
    running = 0;
  }
  else if(! $(".q").hasClass("centro") && running == 0){
    running =1;
    if($(this).hasClass("p1")){
      a = this;
      b = inverse(this);
      $(a).addClass("swap1");
      $(b).addClass("swap4");
      setTimeout(function(){
        $(a).addClass("p4"); $(a).removeClass("p1");$(a).removeClass("swap1");
        $(b).addClass("p1"); $(b).removeClass("p4");$(b).removeClass("swap4");
        running = 0;
      } ,1000);
    }
    else if($(this).hasClass("p2")){
      a = this;
      b = inverse(this);
      $(a).addClass("swap2");
      $(b).addClass("swap3");
      setTimeout(function(){
        $(a).addClass("p3"); $(a).removeClass("p2");$(a).removeClass("swap2");
        $(b).addClass("p2"); $(b).removeClass("p3");$(b).removeClass("swap3");
        running = 0;
      } ,1000);
    }
    else if($(this).hasClass("p3")){
      a = this;
      b = inverse(this);
      $(a).addClass("swap3");
      $(b).addClass("swap2");
      setTimeout(function(){
        $(a).addClass("p2"); $(a).removeClass("p3");$(a).removeClass("swap3");
        $(b).addClass("p3"); $(b).removeClass("p2");$(b).removeClass("swap2");
        running = 0;
      } ,1000);
      running = 0;
    }
    else if($(this).hasClass("p4")){
      a = this;
      b = inverse(this);
      $(a).addClass("swap4");
      $(b).addClass("swap1");
      setTimeout(function(){
        $(a).addClass("p1"); $(a).removeClass("p4");$(a).removeClass("swap4");
        $(b).addClass("p4"); $(b).removeClass("p1");$(b).removeClass("swap1");
        running = 0;
      } ,1000);
    }

  }

  else {
    running = 0;
    return;
  }

}



$(".q").click(all);
