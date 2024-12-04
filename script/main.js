const plusIcons = document.querySelectorAll('.section4-box1__card-textbox-img');
const textElements = document.querySelectorAll('.section4-box1__card-textbox-text');
const minusIcons = document.querySelectorAll('.section4-box1__card-textbox-img2');

plusIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    const textElement = textElements[index];
    const minusIcon = minusIcons[index];

    textElement.classList.toggle('section4-box1__card-textbox-text-active');
    icon.classList.toggle('hidden');
    minusIcon.classList.toggle('hidden');

    if (textElement.classList.contains('section4-box1__card-textbox-text-active')) {
      textElement.style.display = 'block';
      minusIcon.style.display = 'block';
      icon.style.display = 'none';
    } else {
      textElement.style.display = 'none';
      minusIcon.style.display = 'none';
      icon.style.display = 'block';
    }
  });
});

minusIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    const textElement = textElements[index];
    const plusIcon = plusIcons[index];

    textElement.classList.toggle('section4-box1__card-textbox-text-active');
    icon.classList.toggle('hidden');
    plusIcon.classList.toggle('hidden');

    if (textElement.classList.contains('section4-box1__card-textbox-text-active')) {
      textElement.style.display = 'block';
      icon.style.display = 'block';
      plusIcon.style.display = 'none';
    } else {
      textElement.style.display = 'none';
      icon.style.display = 'none';
      plusIcon.style.display = 'block';
    }
  });
});

const All = document.getElementById('All');
const Action = document.getElementById('Action');
const Comedy = document.getElementById('Comedy');
const Drama = document.getElementById('Drama');
const SiFi = document.getElementById('Sci-Fi');
const Horror = document.getElementById('Horror');
const Romance = document.getElementById('Romance');
const Musical = document.getElementById('Musical');
const box = document.getElementById('box');

const originalOrder = Array.from(box.children);

let isReversed = false;

All.addEventListener('click', (event) => {
  event.preventDefault();
  restoreOriginal();
});

Action.addEventListener('click', (event) => {
  event.preventDefault();
  reverseCard();
});

Drama.addEventListener('click', (event) => {
  event.preventDefault();
  restoreOriginal();
});

Comedy.addEventListener('click', (event) => {
  event.preventDefault();
  reverseCard();
});

SiFi.addEventListener('click', (event) => {
  event.preventDefault();
  restoreOriginal();
});

Horror.addEventListener('click', (event) => {
  event.preventDefault();
  reverseCard();
});

Romance.addEventListener('click', (event) => {
  event.preventDefault();
  restoreOriginal();
});

Musical.addEventListener('click', (event) => {
  event.preventDefault();
  reverseCard();
});

function restoreOriginal() {
  box.innerHTML = '';
  originalOrder.forEach((card) => {
    box.appendChild(card);
  });
  isReversed = false;
}

function reverseCard() {
  const cards = Array.from(box.children);
  if (!isReversed) {
    cards.reverse().forEach((card) => box.appendChild(card));
    isReversed = true;
  }
}

