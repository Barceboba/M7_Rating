const estrelles = document.querySelectorAll('.estrella');
const sortida = document.querySelectorAll('.sortida');

for (i = 0; i < estrelles.length; i++) {
    estrelles[i].valorEstrella = (i + 1)
    //estrelles[i].addEventListener('click', function(){
    ['click', 'mouseover', 'mouseout', ''].forEach(function(e) {
        estrelles[i].addEventListener(e, mostraRating);
    })
}

function mostraRating(e) {
    let tipus = e.tipus;
    console.log(tipus)
    let valorEstrella = this.valorEstrella;
    console.log(valorEstrella);

    

    estrelles.forEach(function (elem, ind) {
        if (tipus === 'click') {
            if (ind < valorEstrella) {
                elem.classList.add('color1');
            } else {
                elem.classList.remove('color1');
            }
        }
        if (tipus === 'mouseover') {
            if (ind < valorEstrella) {
                elem.classList.add('color2');
            } else {
                elem.classList.remove('color2');
            }
        }

        if (tipus === 'mouseout') {
            if (ind < valorEstrella) {
                elem.classList.remove('color2');
            } 
        }
    })

}