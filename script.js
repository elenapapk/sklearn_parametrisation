const sliderRadius = document.getElementById("slider-radius");
const sliderPoints = document.getElementById("slider-points");
const dynamicPhoto = document.getElementById("dynamic-photo");
const runButton = document.querySelector(".frame"); // Select the 'Run' button

// Function to update the photo based on slider values when "Run" is clicked
function updatePhoto() {
  const radiusValue = sliderRadius.value; // Get the value of the slider-radius
  const pointsValue = sliderPoints.value; // Get the value of the slider-points

  // Construct the image file name based on the slider values
  const imageName = `./used/${radiusValue}_${pointsValue}.png`;

  // Update the src attribute of the image
  dynamicPhoto.src = imageName;

  // Log to confirm the image update (useful for debugging)
  console.log(`Updated photo to: ${imageName}`);
}

// Add event listener to the "Run" button
runButton.addEventListener("click", updatePhoto);

// Additional log to ensure event listener is attached
console.log("Event listener attached to 'Run' button");
