function calcular() {
    var ntab = document.getElementById ('tab')
    /*var ntab = 6*/
    var cont = 1
    /*var result = document.getElementById('res')*/
    while (cont <= 10) {
        var res1 = Number(ntab) * cont
        var result = document.getElementById('res')
        result.innerHTML = (`${ntab} X ${cont} = ${res1}`)
        cont++
    }

}


/*var num = 2
var cont = 1
var res = (num * cont)
while (cont <= 10) {
    var res = (num * cont)
    console.log(`${num} X ${cont} = ${res} `)
    cont++
}*/
