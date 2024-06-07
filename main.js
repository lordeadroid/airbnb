const ELEMENTS = {
  DIV: "div",
  IMG: "img",
  MAIN: "main",
  SPAN: "span",
};

const ATTRIBUTES = {
  CLASS: "class",
  SRC: "src",
  ALT: "alt",
};

const imageListing = {
  image: "public/images/listing-01.webp",
  imageAlt: "Image of a house",
  shareButton: "public/images/share-button.png",
  price: "0",
  host: "Matheiu Lehanneur",
  about: "Wake up in the Musee d`Orsay",
};

const menuOption = {
  imageSrc: "public/images/menu-option-01.jpg",
  alt: "image for menu option",
  about: "Icons",
};

const createElement = (element) => document.createElement(element);
const selectElement = (element) => document.querySelector(element);

const createImageSection = (image, imageAlt, shareButton) => {
  const img = createElement(ELEMENTS.IMG);
  img.setAttribute(ATTRIBUTES.SRC, image);
  img.setAttribute(ATTRIBUTES.ALT, imageAlt);

  const shareButtonImage = document.createElement(ELEMENTS.IMG);
  shareButtonImage.setAttribute(ATTRIBUTES.SRC, shareButton);
  shareButtonImage.setAttribute(ATTRIBUTES.ALT, "listing share button");

  const shareButtonContainer = document.createElement(ELEMENTS.DIV);
  shareButtonContainer.setAttribute(ATTRIBUTES.CLASS, "center");
  shareButtonContainer.appendChild(shareButtonImage);

  const imageSection = createElement(ELEMENTS.DIV);
  imageSection.setAttribute(ATTRIBUTES.CLASS, "image-section");
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
  aboutSection.setAttribute(ATTRIBUTES.CLASS, "about-listing");
  aboutSection.appendChild(aboutElement);
  aboutSection.appendChild(hostElement);
  aboutSection.appendChild(priceElement);

  return aboutSection;
};

const createListingElement = (imageListing) => {
  const { image, imageAlt, shareButton, price, host, about } = imageListing;

  const imageSection = createImageSection(image, imageAlt, shareButton);
  const aboutSection = createAboutSection(about, price, host);

  const listing = document.createElement(ELEMENTS.DIV);
  listing.setAttribute(ATTRIBUTES.CLASS, "listing");
  listing.appendChild(imageSection);
  listing.appendChild(aboutSection);

  return listing;
};

const createListings = (numberOfElements) => {
  const imageListings = new Array(numberOfElements).fill(imageListing);
  const listingContainer = createElement(ELEMENTS.DIV);
  listingContainer.setAttribute(ATTRIBUTES.CLASS, "listings");

  const imageListingsElements = imageListings.map(createListingElement);
  const main = selectElement(ELEMENTS.MAIN);

  appendElements(listingContainer, imageListingsElements);
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
  heading.setAttribute(ATTRIBUTES.CLASS, "past-experiences");
  heading.innerText = "Past experiences";

  const main = selectElement(ELEMENTS.MAIN);
  main.appendChild(heading);
};

const createMenuOption = (menuOption) => {
  const { imageSrc, alt, about } = menuOption;

  const img = createElement(ELEMENTS.IMG);
  img.setAttribute(ATTRIBUTES.SRC, imageSrc);
  img.setAttribute(ATTRIBUTES.ALT, alt);

  const aboutMenu = createElement(ELEMENTS.SPAN);
  aboutMenu.innerText = about;

  const menuOptionElement = createElement(ELEMENTS.DIV);
  menuOptionElement.setAttribute(ATTRIBUTES.CLASS, "menu center");
  menuOptionElement.appendChild(img);
  menuOptionElement.appendChild(aboutMenu);

  return menuOptionElement;
};

const appendElements = (container, elements) => {
  elements.forEach((element) => {
    container.appendChild(element);
  });
};

const createMenuBar = (numberOfElements) => {
  const menuOptions = new Array(numberOfElements).fill(menuOption);

  const menuBarContainer = selectElement(".menu-bar");
  const menuElements = menuOptions.map(createMenuOption);

  appendElements(menuBarContainer, menuElements);
};

const loginOptions = ["Sign up", "Log in", "Airbnb your home", "Help center"];

const loginMenu = () => {
  const loginButton = selectElement(".profile");
  loginButton.onclick = (_event) => {
    const profileOption = selectElement(".profile-option");
    const display = profileOption.style.display === "flex" ? "none" : "flex";
    profileOption.style.display = display;
  };
};

const main = () => {
  const footerElements = selectElement(".categories");
  const optionElements = selectElement(".options");

  modifyColorOnClick(footerElements);
  modifyColorOnClick(optionElements);

  createListings(12);
  addPastExperiences();
  createListings(13);

  createMenuBar(40);

  loginMenu();
};

window.onload = main;
