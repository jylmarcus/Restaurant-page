import buttonEvents from "./buttonEvents";

function createNavButton(name){

    const button = document.createElement('button');
    button.classList.add("navButton");
    button.setAttribute('type','button');
    button.setAttribute('id', `${name}Button`);
    button.textContent = name;

    button.addEventListener('click', buttonEvents.onClick);
    button.addEventListener('mouseover', buttonEvents.onMouseOver);
    button.addEventListener('mouseout', buttonEvents.onMouseOut);

    return button;
}

export default createNavButton;