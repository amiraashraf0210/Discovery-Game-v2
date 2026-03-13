// Handle scroll position on page load
window.addEventListener('load', () => {
  // Check if it's a page refresh (F5 or Ctrl+R)
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    // On refresh, scroll to top
    window.scrollTo(0, 0);
  } else if (!sessionStorage.getItem('hasVisited')) {
    // First time visiting, scroll to top
    sessionStorage.setItem('hasVisited', 'true');
    window.scrollTo(0, 0);
  }
});

// Variables /////////////////////////////////////
const button = document.getElementById('Story1');
const button2 = document.getElementById('Story2');
const button3 = document.getElementById('Story3');
const div = document.getElementById('menu');
const subtitleChoosing = document.getElementById('subtitle2');
const s1Img1 = document.getElementById('S1_img1');
const s1Img2 = document.getElementById('S1_img2');
const s2Img1 = document.getElementById('S2_img1');
const s2Img2 = document.getElementById('S2_img2');
const s3Img1 = document.getElementById('S3_img1');
const s3Img2 = document.getElementById('S3_img2');
const storySummary = document.getElementById('Storysummary');
const summaryStory = document.querySelector('.summaryStory');
const storyTitle = document.getElementById('SummaryText')
const storySubtitle = document.getElementById('SummaryTextSubtitle')
const BackButton = document.getElementById('Back');
const PlayButton = document.getElementById('Play');

let clicked = false;
let Game1 = false;
let Game2 = false;
let Game3 = false;
// Variables /////////////////////////////////////




// Story One /////////////////////////////////////
button.addEventListener('mouseover', () => {
  div.style.opacity = 1;
  div.style.backgroundColor = 'rgb(0, 74, 74)';
  s1Img1.style.left = "150px";
  s1Img2.style.left = "1000px";
});

button.addEventListener('mouseout', () => {
  div.style.opacity = 0;
  div.style.backgroundColor = 'lightgray';
  s1Img1.style.left = "-450px";
  s1Img2.style.left = "1900px";
  if (clicked == true) {
    div.style.opacity = 1;
    div.style.backgroundColor = 'rgb(0, 74, 74)';
    clicked = false;
  }
});

button.addEventListener('click', () => {
  clicked = true;
  Game1 = true;
  summaryStory.style.display = 'block';
  summaryStory.style.backgroundColor = 'rgb(0, 74, 74)';
  storyTitle.innerHTML = "Stitch";
  storyTitle.style.color = "White";
  storySubtitle.innerHTML = "Stitch embarks on an adventurous quest through a dense forest, discovers an ancient temple, and uncovers a hidden treasure in a mysterious cave filled with puzzles and secrets.";
  storySubtitle.style.color = "White";
  storySummary.style.backgroundImage = "url('Image/Story1Image.jpg')";
  BackButton.style.backgroundColor = "brown";
  PlayButton.style.backgroundColor = "brown";
});

// Story One /////////////////////////////////////
// Story Two /////////////////////////////////////

button2.addEventListener('mouseover', () => {
  div.style.opacity = 1;
  div.style.backgroundColor = 'rgb(49,92,148)';
  s2Img1.style.left = "150px";
  s2Img2.style.left = "1000px";
});

button2.addEventListener('mouseout', () => {
  div.style.opacity = 0;
  div.style.backgroundColor = 'lightgray';
  s2Img1.style.left = "-700px";
  s2Img2.style.left = "1900px";
  if (clicked == true) {
    div.style.opacity = 1;
    div.style.backgroundColor = 'rgb(49,92,148)';
  }
  clicked = false;
});

button2.addEventListener('click', () => {
  clicked = true;
  Game2 = true;
  summaryStory.style.display = 'block';
  summaryStory.style.backgroundColor = 'rgb(49,92,148)';
  storyTitle.innerHTML = "Conan";
  storyTitle.style.color = "White";
  storySubtitle.innerHTML = "A game inspired by Conan, featuring thrilling puzzles, evidence analysis, and character interrogations to guess the culprit and solve the mystery.";
  storySubtitle.style.color = "White";
  storySummary.style.backgroundImage = "url('Image/Story2Image.jpg')";
  BackButton.style.backgroundColor = "brown";
  PlayButton.style.backgroundColor = "brown";
});

// Story Two /////////////////////////////////////
// Story Three ///////////////////////////////////

button3.addEventListener('mouseover', () => {
  div.style.opacity = 1;
  div.style.backgroundColor = 'rgb(0, 124, 17)';
});




button3.addEventListener('mouseout', () => {
  div.style.opacity = 0;
  div.style.backgroundColor = 'lightgray';
  if (clicked == true) {
    div.style.opacity = 1;
    div.style.backgroundColor = 'rgb(0, 124, 17)';
  }
  clicked = false;
});

button3.addEventListener('click', () => {
  clicked = true;
  Game3 = true;
  summaryStory.style.display = 'block';
  summaryStory.style.backgroundColor = 'rgb(0, 124, 17)';
  storyTitle.innerHTML = "Hangman";
  storyTitle.style.color = "White";
  storySubtitle.innerHTML = "The classic Hangman game where you guess letters to complete the word before the hangman is drawn. A challenge for your wit and language skills.";
  storySubtitle.style.color = "White";
  storySummary.style.backgroundImage = "url('Image/Story3Image.jpg')";
  BackButton.style.backgroundColor = "brown";
  PlayButton.style.backgroundColor = "brown";
});

// Unified Back Button Handler
BackButton.addEventListener('click', () => {
  clicked = false;
  Game1 = false;
  Game2 = false;
  Game3 = false;
  summaryStory.style.display = 'none';
});

///////////////////////////////////////////////////////////

PlayButton.addEventListener('click', () => {
  if (Game1) {
    window.location.href = "Stitch/index.html";
    Game1 = false;
  } else if (Game2) {
    window.location.href = "conan/index.html";
    Game2 = false;
  } else if (Game3) {
    window.location.href = "Hangman/index.html";
    Game3 = false;
  }
});

