function all(){
  if($(this).hasClass("centro")==false){
    $(this).addClass("centro");
  }
  else if($(this).hasClass("centro shake")){
    $(this).removeClass("centro shake");
  }
  else if($(this).hasClass("centro")){
    $(this).addClass("shake");
  }
}

$(".q").click(all);
