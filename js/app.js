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
  var hrefSplit = window.location.href.split("/");
  var currentLocation = hrefSplit.pop();
  var hrefUrl = hrefSplit.join("/");
  console.log("swipeleft " + hrefUrl);
  var sNind = swipeNavigation.indexOf(currentLocation);
  if (sNind > 0) {
    window.location.replace("/" + swipeNavigation[sNind - 1]);
  } else {
    window.location.replace(
      hrefUrl + "/" + swipeNavigation[swipeNavigation.length - 1]
    );
  }
});
mc.on("swiperight", function (ev) {
  var currentLocation = window.location.href.split("/").pop();
  var hrefSplit = window.location.href.split("/");
  var currentLocation = hrefSplit.pop();
  var hrefUrl = hrefSplit.join("/");
  console.log("swiperight " + hrefUrl);
  var sNind = swipeNavigation.indexOf(currentLocation);
  if (sNind < swipeNavigation.length - 1) {
    window.location.replace(hrefUrl + "/" + swipeNavigation[sNind + 1]);
  } else {
    window.location.replace(hrefUrl + "/" + swipeNavigation[0]);
  }
});
