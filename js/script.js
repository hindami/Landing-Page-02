window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
document.getElementById("navigasi").style.background = "white";}
else {
    document.getElementById("navigasi").style.background = "none";
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  document.getElementById("m-navigasi").style.background = "white";}
  else {
      document.getElementById("m-navigasi").style.background = "none";
    }
  }