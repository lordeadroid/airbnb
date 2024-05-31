const removeStyle = (footerElements) => {
  footerElements.forEach((element) => {
    element.style.color = "#6a6b6b";
  });
};

const changeColor = (containerElement) => {
  const elements = Array.from(containerElement.children);
  const [firstElement] = elements;
  firstElement.style.color = "black";

  elements.forEach((element) => {
    element.onclick = (event) => {
      removeStyle(elements);
      event.srcElement.style.color = "black";
    };
  });
};

const hideEvents = (element) => {
  const body = document.querySelector("body");
  body.onscroll = (event) => {
    console.log(event);
    element.style.display = "none";
  };
};

const main = () => {
  const footerElements = document.querySelector(".categories");
  const optionElements = document.querySelector(".options");

  changeColor(footerElements);
  changeColor(optionElements);
  hideEvents(optionElements);
};

window.onload = main;
