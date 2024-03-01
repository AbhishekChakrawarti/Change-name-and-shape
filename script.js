
// colors[(Math.floor( Math.random() * colors.length))];
let color = document.querySelector('.colour');
let shape = document.querySelector('.shape');
let outer = document.getElementById('out');
let inner = document.getElementById('in');

color.addEventListener('click' , function(){
    var colors = [ 
        '#ff0000', '#00ff00', '#0000ff', 
        '#ff3333', '#ffff00', '#ff6600' 
    ]; 
    var random_color = colors[(Math.floor( 
            Math.random() * colors.length))]; 
    outer.style.backgroundColor= random_color ;
})
shape.addEventListener('click' , function(){
    if(document.getElementById('in').id === 'in'){
        document.getElementById('in').id = 'rightAngle' ;
    }
    else{
        document.getElementById('rightAngle').id = 'in' ;
    }
})

