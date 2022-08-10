function createMenuItem(src, alt, name, desc, price){
    const item = document.createElement('div');
    item.classList.add('menuItem');

    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);

    const itemName = document.createElement('h3');
    itemName.classList.add('itemName');
    itemName.textContent = name;

    const itemDesc = document.createElement('p')
    itemDesc.classList.add('itemDesc');
    itemDesc.textContent = desc;

    const itemPrice = document.createElement('h2');
    itemPrice.classList.add('itemPrice');
    itemPrice.textContent = price;

    item.appendChild(img);
    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.appendChild(itemDesc);

    return item;
}

//ideally the menu would come from a external file (maybe a csv of some sort) which pass through a few functions but for now this will be the method of menu creation

function createMenu(){
    const menu = document.createElement('section');
    menu.classList.add('tabSection');

    const menuItems = [
        createMenuItem(
            'https://fanfest.finalfantasyxiv.com/2021/static/a27663f921f2f2792d72cfa44337ce27/f0a0a/moogle-honey-toast.webp',
            'an image of moogle honey toast',
            'moogle honey toast',
            '900 gil'
        )
    ];

    menuItems.forEach((item) => {
        menu.appendChild(item);
    });

    return menu;
}

function loadMenu(){
    const tabContent = document.getElementById('tabContent');
    tabContent.innerHTML = '';

    const menu = createMenu();

    tabContent.appendChild(menu);

}