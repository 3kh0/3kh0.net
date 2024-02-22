var url = document.getElementById("url-target");
var urlObj = new window.URL(window.location.href);
document.getElementById("create").onclick = function () {
  if (url.value.substring(0, 8) !== "https://" && url.value.substring(0, 7) !== "http://") {
    url.value = "https://" + url.value.split("https://").pop();
  } else if (url.value.substring(0, 7) == "http://") {
    url.value = "https://" + url.value.split("http://").pop();
  }
  var win = window.open();
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";
  var frm = win.document.createElement("iframe");
  frm.style.border = "none";
  frm.style.width = "100%";
  frm.style.height = "100%";
  frm.style.margin = "0";
  frm.referrerpolicy = "no-referrer";
  frm.allow = "fullscreen";
  frm.src = url.value;
  win.document.body.appendChild(frm);
};