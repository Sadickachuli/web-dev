// Define an array of dice images
const diceImages = [
    'dice1.png',
    'dice2.png',
    'dice3.png',
    'dice4.png',
    'dice5.png',
    'dice6.png'
];

// Function to get a random index from the array
function getRandomIndex() {
    return Math.floor(Math.random() * diceImages.length);
}

// Function to set a random dice image for each player
function setRandomDiceImages() {
    const diceImageElement1 = document.querySelector('.img1');
    const diceImageElement2 = document.querySelector('.img2');

    const randomIndex1 = getRandomIndex();
    const randomIndex2 = getRandomIndex();

    const randomImage1 = `images/${diceImages[randomIndex1]}`; // Adjust the path here
    const randomImage2 = `images/${diceImages[randomIndex2]}`; // Adjust the path here

    diceImageElement1.src = randomImage1;
    diceImageElement2.src = randomImage2;
}

// Call the function to set random dice images for both players when the page is loaded or refreshed
setRandomDiceImages();
