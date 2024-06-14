const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output')

inputName.addEventListener('input', handlerInput);

function handlerInput(evt) {
  const trimmedValue = inputName.value.trim();

  if (trimmedValue) {
    outputName.textContent = trimmedValue;
  } else {
    outputName.textContent = 'Anonymous';
};
};






