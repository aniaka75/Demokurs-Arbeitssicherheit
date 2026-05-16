window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const startButton = object('5glhGdIyLua');
const mainHeader = object('69dFYXy3LUo');
const subText = object('6YrhtQedNLY');

// Start Button (Bounce from Bottom)
startButton.style.opacity = 0;
addToTimeline(
  startButton.animate([
    { opacity: 0, translate: '0 100px' },
    { opacity: 1, translate: '0 0', offset: 0.8 },
    { opacity: 1, translate: '0 -10px' },
    { opacity: 1, translate: '0 0' }
  ], { duration: 1200, fill: 'forwards', easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)' })
);

// Main Header (Slide from Top)
mainHeader.style.opacity = 0;
addToTimeline(
  mainHeader.animate([
    { opacity: 0, translate: '0 -50px' },
    { opacity: 1, translate: '0 0' }
  ], { duration: 1000, fill: 'forwards', delay: 300, easing: 'ease-out' })
);

// Subtext (Fade-In and Diagonal Slide)
subText.style.opacity = 0;
addToTimeline(
  subText.animate([
    { opacity: 0, translate: '50px 50px' },
    { opacity: 1, translate: '0 0' }
  ], { duration: 1000, fill: 'forwards', delay: 1000, easing: 'ease-out' })
);
}

window.Script2 = function()
{
  const button = object('6OAC9bfF8gH'); // Button "Kontakt"

// Ausgangszustand für den Button festlegen
button.style.opacity = 0;
button.style.translate = '0 50px'; // Startet unterhalb seiner finalen Position
button.style.scale = '0.5 0.5'; // Startet verkleinert
button.style.backgroundColor = '#263238'; // Grundfarbe des Buttons

// Animation für den Button
addToTimeline(
  button.animate([
    { opacity: 0, translate: '0 50px', scale: '0.5 0.5', backgroundColor: '#263238' },
    { opacity: 1, translate: '0 0', scale: '1 1', backgroundColor: '#37474F' },
    { opacity: 1, translate: '0 -10px', scale: '1.2 1.2', backgroundColor: '#4E6578', offset: 0.6 }, // leichtes Springen mit Farbwechsel
    { opacity: 1, translate: '0 0', scale: '1 1', backgroundColor: '#37474F' },
  ], {
    duration: 1200,
    fill: 'forwards',
    easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
  })
);
}

};
