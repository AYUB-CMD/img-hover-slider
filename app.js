const slider = document.querySelector('.slider');
const before = document.querySelector('.img-container-before');
const after = document.querySelector('.img-container-after');
const container = document.querySelector('.container');

const app = (event) => {
    let xPosition = event.layerX;//give the x position track
    let size = container.offsetWidth;
    before.style.width = xPosition + 'px';
    slider.style.left= xPosition + 'px';
    
    if (xPosition < 50) {
        before.style.width = 0;
        slider.style.left = 0;
    }
    if (xPosition + 50 > size) {
        
        before.style.width = size +"px";
        slider.style.left = size +"px";
    }
}

container.addEventListener('mousemove', app)
container.addEventListener('touchmove',app)