var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';


var x = 0;
var txt = 'My name is Mircea, and I am a full stack developer from Romania. \nI have 5+ years of experience in the IT field, and I am 100% \nconfident I can successfuly turn your project idea into reality. \n';
var speed = 25; 

function typeWriter() {
  if (x < txt.length) {
    if(txt.charAt(x) == '\n'){
        document.getElementById("bio").innerHTML += "<br>";
    }else{
        document.getElementById("bio").innerHTML += txt.charAt(x);
    }
    x++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

$(document).ready(function() { 
    $(document).on("scroll", onScroll);
    $("#bio").fadeIn(1000);
    $("#bioHeader").fadeIn(1000);
    $("#bioLogo").fadeIn(1000);
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.nav-link').each(function () {
      var currLink = $(this);
      // console.log(currLink);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.nav-item a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}
