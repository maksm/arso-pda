var swipeNavigation = [
  "",
  "page1.html",
  "page2.html",
  "page3.html",
  "page4.html",
  "page5.html"
];
var myElement = document.getElementById("main_container");
var mc = new Hammer(myElement);
mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL });
mc.on("swipeleft", function (ev) {
  var currentLocation = window.location.href.split("/").pop();
  var sNind = swipeNavigation.indexOf(currentLocation);
  if (sNind > 0) {
    window.location.replace("/" + swipeNavigation[sNind - 1]);
  } else {
    window.location.replace("/" + swipeNavigation[swipeNavigation.length - 1]);
  }
});
mc.on("swiperight", function (ev) {
  var currentLocation = window.location.href.split("/").pop();
  var sNind = swipeNavigation.indexOf(currentLocation);
  if (sNind < swipeNavigation.length - 1) {
    window.location.replace("/" + swipeNavigation[sNind + 1]);
  } else {
    window.location.replace("/" + swipeNavigation[0]);
  }
});
mc.on("swipedown swipeup", function (ev) {
  console.log(ev.type + " gesture detected.");
});
