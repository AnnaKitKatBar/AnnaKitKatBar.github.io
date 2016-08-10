function scrollTo(elemId) {
   document.getElementById(elemId).scrollIntoView(true);
}

function toggleImg(imgObj) {
   if (imgObj.className == "thumb") {
      // Shrink down other enlarged image(s)
      var x = document.getElementsByClassName("thumb-enlarged");
      var i;
      for (i = 0; i < x.length; i++) {
         x[i].className = "thumb";
      }

      imgObj.className = "thumb-enlarged"; 
   }
   else {
      imgObj.className = "thumb"; 
   }
}