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

/// Define an array to keep track of selected seats
let selectedSeats = [];
let discountPercentage = 0;
let couponApplied = false;

// Define coupon codes and their corresponding discount percentages
const couponCodes = {
    'NEW15': 15, 
    'Couple 20': 20 
};

// Define the getConvertedValue function
function getConvertedValue(id) {
    const seatInnerText = document.getElementById(id).innerText;
    const convertSeatCount = parseInt(seatInnerText);
    return convertSeatCount;
}

// Call getConvertedValue for "aseat" and "left"
const aseat = getConvertedValue("aseat");
const left = getConvertedValue("left");

// Log the values of aseat and left
console.log("Available Seat:", aseat);
console.log("Left Seat:", left);

// Log all elements with class name "seat-btn"
const seatBtns = document.querySelectorAll('.seat-btn');
console.log(seatBtns);

// Add click event listener to each seat button
seatBtns.forEach(function(seatBtn) {
    seatBtn.addEventListener('click', function(event) {
        // click event handler logic 
        const seatNumber = this.querySelector('h1').textContent.trim();
        const category = this.querySelector('p:nth-child(2) span').textContent.trim();
        const price = parseInt(this.querySelector('p:nth-child(3) span').textContent.trim());
        
        // Check if the seat is already booked
        if (selectedSeats.includes(seatNumber)) {
            console.log("Seat already booked:", seatNumber);
            return; // Exit the function if the seat is already booked
        }
        
        // Check if the maximum number of seats has been selected
        if (selectedSeats.length >= 2) {
            console.log("Maximum seats selected");
            return; // Exit the function if the maximum seats are already selected
        }
        
        // Log seat details
        console.log("Seat clicked:", seatNumber);
        console.log("Category:", category);
        console.log("Price:", price);
        
        // Update the table with seat details
        updateSeatDetails(seatNumber, category, price);
        
        // Update total cost
        updateTotalCost(price); // Assuming price is provided in integer format
        
        // Add the selected seat to the array
        selectedSeats.push(seatNumber);
        
        // Check if two seats are booked
        if (selectedSeats.length === 2) {
            // Display success message in console
            console.log("Seats booked successfully!");
        }
    });
});

// Function to update the table with seat details
function updateSeatDetails(seatNumber, category, price) {
    // Find the table body element
    const tableBody = document.getElementById("selected-seat-container");
    
    // Create a new row
    const newRow = document.createElement('div');
    newRow.classList.add('selected-seat');
    
    // Insert cells for seat number, category, and price
    const seatCell = document.createElement('div');
    seatCell.classList.add('seat');
    seatCell.textContent = seatNumber;
    
    const classCell = document.createElement('div');
    classCell.classList.add('class');
    classCell.textContent = category; // Display the category
    
    const priceCell = document.createElement('div');
    priceCell.classList.add('price');
    priceCell.textContent = price + 'tk';
    
    newRow.appendChild(seatCell);
    newRow.appendChild(classCell);
    newRow.appendChild(priceCell);
    
    // Add the new row to the table body
    tableBody.appendChild(newRow);
}

// Update total cost function
function updateTotalCost(value) {
    const totalCostElement = document.getElementById("grand-total");
    let totalCost = getConvertedValue("grand-total") + value;
    
    // Apply discount if applicable
    totalCost *= (100 - discountPercentage) / 100;
    
    totalCostElement.innerText = totalCost.toFixed(2);
}

// Add event listener to Apply button for applying coupon code
document.getElementById("apply-btn").addEventListener('click', function() {
  const couponCode = document.getElementById("coupon-code").value.trim(); // Trim the input
  if (!couponApplied) { // Check if a coupon code has already been applied
      // Get all keys from couponCodes object
      const couponKeys = Object.keys(couponCodes);
      // Check if any of the keys matches the input coupon code after trimming and case-insensitive comparison
      const validCouponKey = couponKeys.find(key => key.trim().toUpperCase() === couponCode.toUpperCase());
      if (validCouponKey) {
          // Apply discount if the coupon code is valid
          discountPercentage = couponCodes[validCouponKey];
          console.log(`Applied ${discountPercentage}% discount`);
          // Update total cost
          updateTotalCost(0); // Recalculate total cost without changing price
          // Disable the coupon code input field and button
          document.getElementById("coupon-code").disabled = true;
          document.getElementById("apply-btn").disabled = true;
          couponApplied = true;
      } else {
          console.log("Invalid coupon code");
      }
  } else {
      console.log("Coupon code already applied");
  }
});
