const ELEMENTS = {
  DIV: "div",
  IMG: "img",
  MAIN: "main",
};

const imageListing = {
  image: "public/images/listing-01.webp",
  imageAlt: "Image of a house",
  shareButton: "public/images/share-button.png",
  price: "0",
  host: "Matheiu Lehanneur",
  about: "Wake up in the Musee d`Orsay",
};

const imageListings = new Array(12).fill(imageListing);

const createElement = (element) => document.createElement(element);
const selectElement = (element) => document.querySelector(element);

const createImageSection = (image, imageAlt, shareButton) => {
  const img = createElement(ELEMENTS.IMG);
  img.setAttribute("src", image);
  img.setAttribute("alt", imageAlt);

  const shareButtonImage = document.createElement(ELEMENTS.IMG);
  shareButtonImage.setAttribute("src", shareButton);
  shareButtonImage.setAttribute("alt", "listing share button");

  const shareButtonContainer = document.createElement(ELEMENTS.DIV);
  shareButtonContainer.setAttribute("class", "center");
  shareButtonContainer.appendChild(shareButtonImage);

  const imageSection = createElement(ELEMENTS.DIV);
  imageSection.setAttribute("class", "image-section");
  imageSection.appendChild(shareButtonContainer);

  imageSection.appendChild(img);
  return imageSection;
};

const createAboutSection = (about, price, host) => {
  const aboutElement = createElement(ELEMENTS.DIV);
  aboutElement.innerText = about;
  const hostElement = createElement(ELEMENTS.DIV);
  hostElement.innerText = `Hosted by ${host}`;
  const priceElement = createElement(ELEMENTS.DIV);
  priceElement.innerText = `$${price} per guest`;

  const aboutSection = createElement(ELEMENTS.DIV);
  aboutSection.setAttribute("class", "about-listing");
  aboutSection.appendChild(aboutElement);
  aboutSection.appendChild(hostElement);
  aboutSection.appendChild(priceElement);

  return aboutSection;
};

const addListings = () => {
  const listingContainer = createElement(ELEMENTS.DIV);
  listingContainer.setAttribute("class", "listings");

  imageListings.forEach((imageListing) => {
    const { image, imageAlt, shareButton, price, host, about } = imageListing;

    const imageSection = createImageSection(image, imageAlt, shareButton);
    const aboutSection = createAboutSection(about, price, host);

    const listing = document.createElement(ELEMENTS.DIV);
    listing.setAttribute("class", "listing");
    listing.appendChild(imageSection);
    listing.appendChild(aboutSection);

    listingContainer.appendChild(listing);
  });

  const main = selectElement(ELEMENTS.MAIN);
  main.appendChild(listingContainer);
};

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

const addPastExperiences = () => {
  const heading = createElement(ELEMENTS.DIV);
  heading.setAttribute("class", "past-experiences");
  heading.innerText = "Past experiences";

  const main = selectElement(ELEMENTS.MAIN);
  main.appendChild(heading);
};

const main = () => {
  const footerElements = selectElement(".categories");
  const optionElements = selectElement(".options");

  modifyColorOnClick(footerElements);
  modifyColorOnClick(optionElements);
  addListings();
  addPastExperiences();
  addListings();
};

window.onload = main;
