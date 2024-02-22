window.redirectToUrl = function redirectToUrl() {
  var url = document.getElementById("input").value;
  if (url.substring(0, 8) !== "https://" && url.substring(0, 7) !== "http://") {
    url = "https://" + url.split("https://").pop();
  } else if (url.substring(0, 7) == "http://") {
    url = "https://" + url.split("http://").pop();
  }
  console.log(url);
  if (url) {
    window.location.href = url;
  }
}

const inputField = document.getElementById("input");
const statusBar = document.getElementById("status-bar");
statusBar.textContent = "Waiting on input";

inputField.addEventListener("input", function () {
  const url = this.value;

  if (url === "") {
    statusBar.textContent = "Waiting on input";
    statusBar.style.color = "white";
    return;
  }

  statusBar.textContent = "Waiting for user...";
  statusBar.style.color = "white";

  const timeoutId = setTimeout(() => {
    statusBar.textContent = "Waiting for response...";
    statusBar.style.color = "lightblue";

    fetch(url, { method: "HEAD" })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          statusBar.textContent = `Status: UP! Code: ${response.status} ${response.statusText}`;
          statusBar.style.color = "#53d134";
        } else {
          statusBar.textContent = `Status: Down! Code: ${response.status} ${response.statusText}`;
          statusBar.style.color = "#dd4040";
        }
      })
      .catch((error) => {
        statusBar.textContent = "Request failed due to error, most likely related to CORS. Check console for more details.";
        statusBar.style.color = "#dd4040";
        console.log(error);
      });
  }, 1000);

  inputField.addEventListener("input", () => clearTimeout(timeoutId), { once: true });
});