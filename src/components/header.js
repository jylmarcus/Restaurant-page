function createHeader(name) {
    const header = document.createElement('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurantName');
    restaurantName.innerHTML = name;

    header.appendChild(restaurantName);
    
    return header;
}