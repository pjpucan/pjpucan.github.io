// Expand / collapse role details
document.querySelectorAll(".toggle").forEach(function (btn) {
  var panel = document.getElementById(btn.getAttribute("aria-controls"));
  if (!panel) return;
  btn.addEventListener("click", function () {
    var open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    btn.textContent = open ? "Show responsibilities" : "Hide responsibilities";
    panel.hidden = open;
  });
});

// Copy contact details
document.querySelectorAll(".copy-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var text = btn.getAttribute("data-copy");
    var done = function () {
      var old = btn.textContent;
      btn.textContent = "Copied";
      setTimeout(function () { btn.textContent = old; }, 1500);
    };
    var fallback = function () {
      var value = btn.parentElement.querySelector(".value");
      if (!value) return;
      var range = document.createRange();
      range.selectNodeContents(value);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }
  });
});

// Footer year
var yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
