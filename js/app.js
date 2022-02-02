var swipeNavigation = [
  "index.html",
  "radar.html",
  "aladin.html",
  "epsgram.html",
  "blitz.html",
  "gefs.html"
];

var myElement = document.getElementById("main_container");
var mc = new Hammer(myElement);
mc.get("swipe").set({ direction: Hammer.DIRECTION_HORIZONTAL });
mc.on("swipeleft swiperight", function (ev) {
  var hrefSplit = window.location.href.split("/");
  var currentLocation = hrefSplit.pop();
  var sNind = swipeNavigation.indexOf(currentLocation);
  var nind = 0;
  if (ev.type == "swiperight") {
    if (sNind > 0) {
      nind = sNind - 1;
    } else {
      nind = swipeNavigation.length - 1;
    }
  } else {
    if (sNind < swipeNavigation.length - 1) {
      nind = sNind + 1;
    } else {
      nind = 0;
    }
  }
  hrefSplit.push(swipeNavigation[nind]);
  window.location.replace(hrefSplit.join("/"));
});
