const removeColor = (element) => {
  element.style.removeProperty("color");
};

const resetStyleProperty = (elements, styler) => {
  elements.forEach(styler);
};

const modifyColorOnClick = (containerElement) => {
  // creating array from HTMLCollection
  const elements = Array.from(containerElement.children);
  const [firstElement] = elements;
  firstElement.style.color = "black";

  elements.forEach((element) => {
    element.onclick = (event) => {
      //resetting elements color
      resetStyleProperty(elements, removeColor);
      event.target.style.color = "black";
    };
  });
};

const main = () => {
  const footerElements = document.querySelector(".categories");
  const optionElements = document.querySelector(".options");

  modifyColorOnClick(footerElements);
  modifyColorOnClick(optionElements);
};

window.onload = main;
