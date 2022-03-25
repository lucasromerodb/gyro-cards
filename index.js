if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function (event) {
    console.log(event);
    // alpha: rotation around z-axis
    var rotateDegrees = event.alpha;
    // gamma: left to right
    var leftToRight = event.gamma;
    // beta: front back motion
    var frontToBack = event.beta;

    handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
  }, true);
} else {
  alert('Device has not DeviceOrientation support');
}

var handleOrientationEvent = function (frontToBack, leftToRight, rotateDegrees) {
  document.getElementById("gyro-data").innerHTML = frontToBack + " | " + leftToRight + " | " + rotateDegrees;
};