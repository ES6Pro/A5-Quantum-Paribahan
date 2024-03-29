function showDetails(coupon) {
  var details = document.getElementById(coupon + "Details");
  var computedStyle = window.getComputedStyle(details);
  if (computedStyle.getPropertyValue("display") === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

function showAllOffers() {
  var allOffers = document.getElementById("allOffers");
  var computedStyle = window.getComputedStyle(allOffers);
  if (computedStyle.getPropertyValue("display") === "none") {
    allOffers.style.display = "block";
  } else {
    allOffers.style.display = "none";
  }
}

// JavaScript to handle button click
document.getElementById("bannerButton").addEventListener("click", function () {
  // You can add your logic here, for example, redirecting to another page:
  window.location.href = "your_page_url.html";
});
