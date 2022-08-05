import createNavButton from "./navButtons";

function createNav(id) {
    const nav = docment.createElement('nav');
    nav.setAttribute('id', id);

    const homeButton = createNavButton('home');
    const menuButton = createNavButton('menu');
    const contactButton = createNavButton('contact');

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

export default createNav;