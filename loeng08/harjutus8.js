let varvusElement
let varv

varvusElement = document.getElementById('varvus')
varv = prompt ('Mis on Teie lemmikvärv? ')

varvusElement.innerHTML = '<h2>' + 'Teie lemmikvärv on  ' + varv + '</h2>'

if (varv == "must") {
    varvusElement.innerHTML += 'Viska viis, ka minu lemmikvärv on must. '
} else {
    varvusElement.innerHTML += 'Proovi uuesti!'
}