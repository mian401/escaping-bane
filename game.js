const character = document.getElementById('character');
const mosnter = document.getElementById('monster')
const over = document.getElementById('over')
const scorebox = document.getElementById("score")

let score = 0;
let cross = true;

document.onkeydown = function (key) {

    // console.log("key code is  :  ", e.keyCode);

    if (key.keyCode == 38 || key.keyCode == 32 || key.keyCode == 87) {

        character.classList.add('jump'); // Fly The character in Air

        setTimeout(() => {

            character.classList.remove('jump'); // bringing character to original position
        }, 300);

    }

    else if (key.keyCode == 39 || key.keyCode == 68) {

        const cleft = parseInt(window.getComputedStyle(character, null).getPropertyValue('left'));
        let characterleft = cleft + 80 + "px";
        character.style.left = characterleft;
    }

    else if (key.keyCode == 37 || key.keyCode == 65) {

        const cleft = parseInt(window.getComputedStyle(character, null).getPropertyValue('left'));
        let characterright = (cleft - 80) + "px";
        character.style.left = characterright;
    }
};


// Checking The Collision

setInterval(() => {

    const cx = parseInt(window.getComputedStyle(character, null).getPropertyValue('left'));  //  Get Value Of Left Of The Character (x-axis)
    const cy = parseInt(window.getComputedStyle(character, null).getPropertyValue('top'));  //  Get Value Of Top Of The Character (y-axis)

    const mx = parseInt(window.getComputedStyle(monster, null).getPropertyValue('left'));  //  Get Value Of Left Of The Character (x-axis)
    const my = parseInt(window.getComputedStyle(monster, null).getPropertyValue('top'));  //  Get Value Of Top Of The Character (y-axis)

    let offsetx = Math.abs(cx - mx);
    let offsety = Math.abs(cy - my);


    if (offsetx < 75 && offsety < 52) {

        //Comparing Position of character and monster to estimmate collision

        over.style.visibility = 'visible';
        mosnter.classList.remove('monster-ani')
    }

    else if(offsetx < 145 && cross) {

        score+=1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000)
        
        setTimeout(() => {
            
            let monsterdur = parseFloat(window.getComputedStyle(monster, null).getPropertyValue('animation-duration'));
            let newdur = (monsterdur - 0.1) + "s" ;
            mosnter.style.animationDuration = newdur;

        }, 1000)
    }

}, 100)

function updatescore(s) {
    
    scorebox.innerHTML = s;
}


/*

* KeyCodes

up = 38
w = 87
space = 32


right=39
d = 68

left = 37
a = 65

esc 27

*/
