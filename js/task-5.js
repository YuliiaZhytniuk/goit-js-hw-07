function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');

changeColor.addEventListener('click', handlerChangeColor);
function handlerChangeColor() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
};

