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

//ex//

document.addEventListener('DOMContentLoaded', function () {
  // Seat selection functionality
  const seatElements = document.querySelectorAll('.SeatNo');
  seatElements.forEach(seat => {
    seat.addEventListener('click', function () {
      if (!seat.classList.contains('selected')) {
        seat.classList.add('selected');
        console.log(`Seat ${seat.textContent} is selected.`);
        // Add your logic for seat selection here
      } else {
        seat.classList.remove('selected');
        console.log(`Seat ${seat.textContent} is deselected.`);
        // Add your logic for seat deselection here
      }
    });
  });

  // Apply coupon functionality
  const applyButton = document.querySelector('.seat-3 input[type="button"]');
  applyButton.addEventListener('click', function () {
    const couponInput = document.querySelector('.seat-3 input[type="text"]').value;
    console.log(`Coupon applied: ${couponInput}`);
    // Add your logic for applying the coupon here
  });
});

