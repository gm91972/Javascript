const refresh = document.querySelector('.refresh');
const randomColorBox = document.querySelectorAll('.box');

window.onload = function () {
    addColor();
};

function randomColors() {
    var chars = '0123456789abcdef';
    var colorLength = 6;
    var color = '';

    for(var i = 0; i< colorLength; i++){
        var randomColor = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomColor, randomColor + 1);
    }
    return '#' + color;
}

function addColor(){
    randomColorBox.forEach (e =>{
        var newColor = randomColors();
        e.style.backgroundColor =  newColor;
        e.innerHTML = newColor;
    });
}
