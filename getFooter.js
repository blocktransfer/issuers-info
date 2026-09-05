document.addEventListener("DOMContentLoaded", function() {
  fetch(window.location.pathname.split("/").length > 2 ? "../footer.html" : "/footer.html")
    .then(response => response.text())
    .then(data => document.body.insertAdjacentHTML("beforeend", data))
    .catch(error => console.log("Fetch error:", error))
});
