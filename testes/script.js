function calcular() {
    var ntab = document.getElementById ('tab')
    var result = document.getElementById('res')
    if (ntab.value.length == 0) {
        result.innerHTML = 'Informar um número de tabuada!!'
        window.alert('[ERRO] Digite um número de tabuada!!')
    } else {
        result.innerHTML = ''
        var n1 = Number(ntab.value)
        var c = 1
        for ( c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n1} X ${c} = ${n1*c}`
            item.value = `tab${c}`
            result.appendChild(item)
        }
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
