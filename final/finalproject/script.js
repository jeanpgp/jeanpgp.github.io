(function () {
  "use strict";
  //console window 
  console.log("reading from js");
  //overlays
  document.getElementById( "moon" ).onclick = function() {
      document.getElementById("overlay").style.display = "block";
    };
  document.getElementById( "overlay" ).onclick = function() {
    document.getElementById("overlay").style.display = "none";
    };

  document.getElementById( "flower4" ).onclick = function() {
      document.getElementById("overlay2").style.display = "block";
    };
  document.getElementById( "overlay2" ).onclick = function() {
    document.getElementById("overlay2").style.display = "none";
    };

  //scoll to where it is on page when constellation clicked
  document.getElementById( "hp" ).onclick = function() {
      // img clicked
      var elmnt = document.getElementById("hplogo");
      elmnt.scrollIntoView();
  };
  document.getElementById( "oned" ).onclick = function() {
      // img clicked
      var elmnt = document.getElementById("onedlogo");
      elmnt.scrollIntoView();
  };
  document.getElementById( "lm" ).onclick = function() {
      // img clicked
      var elmnt = document.getElementById("lmlogo");
      elmnt.scrollIntoView();
  };
  document.getElementById( "tc" ).onclick = function() {
      // img clicked
      var elmnt = document.getElementById("tclogo");
      elmnt.scrollIntoView();
  };
  document.getElementById( "yt" ).onclick = function() {
      // img clicked
      var elmnt = document.getElementById("ytlogo");
      elmnt.scrollIntoView();
  };

})();