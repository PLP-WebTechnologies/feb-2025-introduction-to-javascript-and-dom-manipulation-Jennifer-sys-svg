// Change text content dynamically
const changeTextButton = document.getElementById('change-text-btn');
const introText = document.getElementById('intro-text');

changeTextButton.addEventListener('click', () => {
  introText.textContent = "You've changed the text!";
});

// Modify CSS styles via JavaScript
const changeStyleButton = document.getElementById('change-style-btn');
const mainTitle = document.getElementById('main-title');

changeStyleButton.addEventListener('click', () => {
  mainTitle.style.color = 'blue';
  mainTitle.style.fontSize = '2.5rem';
});

// Add or remove an element when a button is clicked
const addElementButton = document.getElementById('add-element-btn');
const removeElementButton = document.getElementById('remove-element-btn');
const elementsContainer = document.getElementById('elements-container');

addElementButton.addEventListener('click', () => {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = "New element added!";
  elementsContainer.appendChild(newParagraph);
});

removeElementButton.addEventListener('click', () => {
  const lastElement = elementsContainer.lastElementChild;
  if (lastElement) {
    elementsContainer.removeChild(lastElement);
  }
});
