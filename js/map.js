var mapLink = document.querySelector(".js-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (mapPopup.classList.contains("modal-show")) {
    mapPopup.classList.remove("modal-show");
    overlay.classList.remove("modal-show-overlay");
  } else {
    mapPopup.classList.add("modal-show");
    overlay.classList.add("modal-show-overlay");
  }
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-show-overlay");
});

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  mapPopup.classList.remove("modal-error");
  overlay.classList.remove("modal-show-overlay");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault ();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
      overlay.classList.remove("modal-show-overlay");
    }
  }
});
