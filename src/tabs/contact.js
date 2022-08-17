function createContact(){
    const contact = document.createElement('section');
    contact.classList.add('tabSection');

    const phoneHeader = document.createElement('h2');
    phoneHeader.textContent = 'Mognet Number';

    const phone = document.createElement('p');
    phone.textContent = '📞7777777';

    const addressHeader = document.createElement('h2');
    addressHeader.textContent = 'Location';

    const address = document.createElement('p');
    address.textContent = `Wherever you need us to be, kupo!`

    contact.appendChild(phoneHeader);
    contact.appendChild(phone);
    contact.appendChild(addressHeader);
    contact.appendChild(address);

    return contact;
}

function loadContact(){
    const tabContent = document.getElementById('tabContent');
    tabContent.innerHTML = '';

    const contact = createContact();

    tabContent.appendChild(contact);

}

export default loadContact;