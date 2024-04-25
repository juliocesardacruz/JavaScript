function calcular() {
    let num = Number (document.getElementById('txtn').value)
    let res = document.getElementById('res')
    if (num %2 == 0) {
        res.innerHTML = `O número <strong>${num}</strong> é <strong>Par!!</strong>`
    } else {
        res.innerHTML = `O número <strong>${num}</strong> é <strong>Impar!!</strong>`
    }
}