import createHeader from "./header";
import createNav from "./nav";
import createTabContent from "./tabContent";
import loadHome from "../tabs/home";

function initialize(){
    const content = document.getElementById('content');

    const header = createHeader('Kupo Bites');
    const nav = createNav('nav');
    const tabContent = createTabContent('tabContent');

    content.appendChild(header);
    content.appendChild(nav);
    content.appendChild(tabContent);

    loadHome();
};

export default initialize;