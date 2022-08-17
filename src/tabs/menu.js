function createMenuItem(src, alt, name, desc, price){
    const item = document.createElement('div');
    item.classList.add('menuItem');

    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);

    const itemText = document.createElement('div');
    itemText.classList.add('itemText');

    const itemName = document.createElement('h3');
    itemName.classList.add('itemName');
    itemName.textContent = name;

    const seperator = document.createElement('div');
    seperator.classList.add('itemSeperator');

    const itemDesc = document.createElement('p')
    itemDesc.classList.add('itemDesc');
    itemDesc.textContent = desc;

    const itemPrice = document.createElement('h3');
    itemPrice.classList.add('itemPrice');
    itemPrice.textContent = price;

    itemText.appendChild(itemName);
    itemText.appendChild(seperator);
    itemText.appendChild(itemDesc);
    itemText.appendChild(itemPrice);
    item.appendChild(img);
    item.appendChild(itemText);

    return item;
}

//ideally the menu would come from a external file (maybe a csv of some sort) which pass through a few functions but for now this will be the method of menu creation

function createMenu(){
    const menu = document.createElement('section');
    menu.classList.add('menuSection');

    const menuItems = [
        createMenuItem(
            'https://fanfest.finalfantasyxiv.com/2021/static/a27663f921f2f2792d72cfa44337ce27/f0a0a/moogle-honey-toast.webp',
            'an image of moogle honey toast',
            'Moogle honey toast',
            'Delicious baked honey toast topped with ice cream, kupo!',
            '900 gil'
        ),

        createMenuItem(
            'https://fanfest.finalfantasyxiv.com/2021/static/82bd7a212e3cb3df160f8c9ffde5fd9b/f0a0a/tonberry-omurice.webp',
            'an image of tonberry omelette rice',
            'Tonberry omelette rice',
            'Creamy omelette with pesto rice, kupopo!',
            '1080 gil'
        ),

        createMenuItem(
            'https://fanfest.finalfantasyxiv.com/2021/static/df6fa1404f414fb8cdec47a1b4178d79/f0a0a/giantbeaver.webp',
            'an image of giant beaver croquettes',
            'Giant Beaver croquettes',
            'Crunchy croquettes that look like giant beavers, kupo!',
            '1200 gil'
        ),

        createMenuItem(
            'https://fanfest.finalfantasyxiv.com/2021/static/4f5c3c7a5f69d34891c9f8b0d6dec262/f0a0a/ardbert.webp',
            'an image of a grape-flavoured drink inspired by Ardbert from FFXIV',
            `Ardbert: The First's Warrior of Light`,
            'A sweet drink like your memories of Ardbert, kupopo!',
            '600 gil'
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

export default loadMenu;