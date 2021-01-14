window.checkGrade = function(){
    var gd = document.getElementsByClassName('grade');
    for(var i = 0; i < gd.length; i++){
      var g = document.getElementsByClassName('grade')[i].value;
      var g1 = document.getElementsByClassName('grade')[i];
      if(g >=80) {
        g1.style.backgroundColor = "green";
      }else if(g >=60) {
        g1.style.backgroundColor = "yellow";
      }else if(g >=40) {
        g1.style.backgroundColor = "orange";
      }else if(g >=0) {
        g1.style.backgroundColor = "red";
      }else {
        g1.style.backgroundColor = "pink";
      }
    }
  
  }