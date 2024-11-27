function trackLocation(e) {
  var rect = imgContainer.getBoundingClientRect(),
      position = ((e.pageX - rect.left) / imgContainer.offsetWidth)*100;
  if (position <= 100) {
    imgClipper.style.width = position+"%";
    clippedImg.style.width = ((100/position)*100)+"%";
    clippedImg.style.zIndex = 3;
	}
}
var imgContainer = document.getElementById("imagesCompareContainer"),
imgClipper = document.getElementById("imagesClipper"),
clippedImg = imgClipper.getElementsByTagName("img")[0];
imgContainer.addEventListener( "mousemove", trackLocation, false);
imgContainer.addEventListener("touchstart",trackLocation,false);
imgContainer.addEventListener("touchmove",trackLocation,false);
