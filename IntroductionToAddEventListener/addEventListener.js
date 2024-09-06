// Add constants for the events
const moveArea = document.getElementById('moveArea');
const button = document.getElementById('clickButton');
const keyInput = document.getElementById('keyInput');
const pressInput = document.getElementById('pressInput');
const textInput = document.getElementById('textInput');

// Add event listener for button click
button.addEventListener('click', testclick);

// Function for click
function testclick(){
    console.log('Button clicked!');
}

// Function for mousemove
moveArea.addEventListener('mousemove', function(event){
    console.log(`Mouse coordinates - X: ${event.clientX}, Y: ${event.clientY}`);
});

// Function for keydown
keyInput.addEventListener('keydown', function(){
    console.log('Key pressed down!');
});

// Function for keyup
keyInput.addEventListener('keyup', function(){
    console.log('Key released!');
});

// Function for keypress
pressInput.addEventListener('keypress', function(){
    console.log('Key pressed!');
});

// Submit event
document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Form submitted!');
});

// Focus event
textInput.addEventListener('focus', function(){
    console.log('Input focused');
});
textInput.addEventListener('blur', function(){
    console.log('Input blurred');
});

//WINDOWS EVENTS
// load event
window.addEventListener('load', function() {
    console.log('Page and all resources loaded');
});

// Resize event
window.addEventListener('resize', function() {
    console.log('Window resized');
});

// Scroll event
window.addEventListener('scroll', function() {
    console.log('Document scrolled');
});