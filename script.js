// Array of image file names in the "images" folder
const imageArray = [
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg",
  // Add more image file names as needed
];

// Function to select a random image from the array
function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * imageArray.length);
  return imageArray[randomIndex];
}

// Function to set a random background image without stretching
function setRandomBackground() {
  const randomImage = getRandomImage();
  document.body.style.backgroundImage = `url('images/${randomImage}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";
}

// Call the function to set a random background when the page loads
setRandomBackground();
