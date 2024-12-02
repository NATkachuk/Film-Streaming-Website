const Input = document.querySelector('.section1__input');
const Card = document.querySelectorAll('.section1-card');
const SearchInfo = document.querySelectorAll('.section1-card__textbox-title');

const searchFunction = (text) => {
    if (text.trim() === "") {
      Card.forEach((card) => {
        card.style.display = "block";
      });
    } else {
      Card.forEach((card) => {
        card.style.display = "none";
      });
      SearchInfo.forEach((element) => {
        if (element.textContent.toLowerCase().startsWith(text.toLowerCase())) {
          element.closest(".section1-card").style.display = "block";
        }
      });
    }
  };
  
  Input.addEventListener("input", (e) => {
    searchFunction(e.target.value);
  });