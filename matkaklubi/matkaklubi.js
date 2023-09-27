const matkadElement = document.getElementById ('matkad')
matkadElement.innerHTML = ''

const matk1 = {
    nimetus: 'Süstamatk Soomaal',
    pildiUrl: './assets/wildcamping.avif',
    kirjeldus: 'Varakevadine matk Soomaal. Näeme loomi, linde ja ka kalu'
}

const matk2 = {
    nimetus: 'Rattamatk Pärnumaal',
    pildiUrl: './assets/camp2.jpg',
    kirjeldus: 'Avastame Pärnumaad'
}


const matk3 = {
    nimetus: 'Jalgsimatk Tartumaal',
    pildiUrl: './assets/camp3.jpeg',
    kirjeldus: 'Kõndides Tartule ring peale'
}

const matkad = [matk1, matk2, matk3]


function valjastaMatk(matk) {
 console.log (`
 <h3>
    Matk ${matk.nimetus}
</h3>
 `)
 let matkmall = `
 <div class="col-md-4 card">
    <img src="${matk.pildiUrl}" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">${matk.nimetus}</h5>
        <p>
            ${matk.kirjeldus}
        </p>
        <a href="#" class="btn btn-primary">Registeeru</a>
    </div>
</div>
 `
matkadElement.innerHTML += matkmall


}


//valjastaMatk (matk1)
//valjastaMatk (matk2)

matkad.forEach (valjastaMatk)


