function valjasta (tekst) {
    const valjastaElement = document.getElementById ('ylesanded')
    valjastaElement.innerHTML += tekst 
}


function lisaUusYlesanne () {
    const sisestusElement = document.getElementById("uus-ylesanne");
    valjasta('<div class="ylesanne">' + sisestusElement.value + '</div>')
    sisestusElement.value = ''
}


//valjasta ("<h2>Uus päev</h2>")

const ylesanded = [
    'Pesta nägu ja hambad',
    'Jalutada koera',
    'Sööta koera', 
    'Sööta ennast',
    'Minna tööle!'
]

const ylesanne1 = {
    kirjeldus: 'jalutada koera',
    prioriteet: 3,
    tehtud: true
}


const ylesanne2 = {
    kirjeldus: 'Sööta ennast',
    prioriteet: 2,
    tehtud: false
}


const ylesanne3 = {
    kirjeldus: 'Minna tööle',
    prioriteet: 2,
    tehtud: false
}


for (let indeks=0; indeks< ylesanded.length; indeks++) {
    valjasta ('<div class="ylesanne">' + ylesanded[indeks] + '</div>')
}

