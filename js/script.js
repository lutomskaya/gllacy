var link = document.querySelector(".feedback-addres-btn");
var popup = document.querySelector(".feedback-popup");
var form = popup.querySelector(".feedback-popup-form");
var login = popup.querySelector("[name=name]");

var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=textarea]");
var overlay = document.querySelector(".feedback-popup-overlay");
var close = document.querySelector(".feedback-close-btn");




link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-show");

});
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-show");
});
form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value || !text.value || (text.value == "Напишите что нибудь...")) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("modal-show");
    }
  }
});
