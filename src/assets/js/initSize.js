const BASE_SIZE = 3.75;
const htmlElement = document.getElementsByTagName('html')[0];
const size = htmlElement.clientWidth / BASE_SIZE;
htmlElement.style.fontSize = `${size}px`;
