document.onload = (function () {
  var loadingDiv = document.getElementById("loading-div");

  function fadeOutEffect(fadeTarget) {
    var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= 0.1;
      } else {
        clearInterval(fadeEffect);
      }
    }, 55);
  }

  setTimeout(function () {
    // loadingDiv.stype.display = "none";
    fadeOutEffect(loadingDiv);

    // Clean Up function and remove loading div after
    setTimeout(function () {
      loadingDiv.style.display = "none";
      loadingDiv.remove();
    }, 1500);
  }, 180);
})();
