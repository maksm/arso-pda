var swipeNavigation = [
  "index.html",
  "page1.html",
  "page2.html",
  "page3.html",
  "page4.html",
  "page5.html"
];

var myElement = document.getElementById("main_container");
var mc = new Hammer(myElement);
mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL });
mc.on("swipeleft swiperight", function (ev) {
  var hrefSplit = window.location.href.split("/");
  var currentLocation = hrefSplit.pop();
  var sNind = swipeNavigation.indexOf(currentLocation);
  var nind = 0;
  if (ev.type == "swipeleft") {
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
