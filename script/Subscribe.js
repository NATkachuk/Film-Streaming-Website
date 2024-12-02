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