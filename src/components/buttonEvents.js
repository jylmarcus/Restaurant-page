function setInactive(){
    const button = document.querySelector('.active');
    if(button){
        button.classList.remove('active');
    }
}

function setActive(element) {
    element.classList.add('active');
}

function onClick(){
    setInactive();
    setActive(this);
}

function onMouseOver(){
    if(!this.classList.contains('active')){
        this.classList.add('hover');
    }
}

function onMouseOut(){
    if(this.classList.contains('hover')){
        this.classList.remove('hover');
    }
}

export default {setActive, onClick, onMouseOver, onMouseOut}