Now we talk about the "addEventListener" is a method in JavaScript that allows developers to attach
event handlers or functions to HTML elements. it's a fundamental mechanism for managing events in web 
development.


1. WITHOUT addEventListener:
        // <button id="myButton" onclick="handleButtonClick()">Click me</button>
    <script>
      function handleButtonClick() {
        console.log('Button clicked!');
      }
    </script>

In the absence of addEventListener, the HTML embeds an onclick attribute within the button element, 
triggering the specified function (handleButtonClick()) upon clicking.

2.WITH addEventListener:
        // <button id="myButton">Click me</button>
    <script>
      // Get the button element
      const button = document.getElementById('myButton');
      // Add event listener for 'click' event
      button.addEventListener('click', handleButtonClick);
      // Function to handle button click
      function handleButtonClick() {
        console.log('Button clicked!');
      }
    </script>



    - Select the button element with getElementById.

    - Add an event listener for the 'click' event to the button using addEventListener.

    - Assign the handleButtonClick function as the event handler to execute when the user clicks the button.

    - This configuration replicates the previous functionality but employs addEventListener instead of the inline onclick attribute to bind the event handler.
