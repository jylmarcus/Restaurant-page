import initialize from "./components/initialize";
import loadHome from "./tabs/home";
import loadMenu from "./tabs/menu";
import loadContact from "./tabs/contact";
import './style.css';

initialize();

const homeButton = document.getElementById('homeButton');
const menuButton = document.getElementById('menuButton');
const contactButton = document.getElementById('contactButton');

homeButton.addEventListener('click', loadHome);
menuButton.addEventListener('click', loadMenu);
contactButton.addEventListener('click', loadContact);
