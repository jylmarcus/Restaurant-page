function createTabContent(id) {
    const tabContent = document.createElement('main');
    tabContent.setAttribute('id', id);
    return tabContent;
}

export default createTabContent;