function calcular () {
    let tab = document.getElementById('txttab')
    let result = document.getElementById('seltab')
    if (tab.value.length == 0) {
        //result.innerHTML = '[ERRO] Informar um número Válido!!'
        window.alert('[ERRO] Informar um número válido!!')
    } else {
        let cont = 1
        let n1 = Number(tab.value)
        result.innerHTML = ''
        for (cont = 1; cont <= 10; cont++) {
            let item = document.createElement('option')
            item.text = `${n1} x ${cont} = ${n1*cont}`
            item.value = `result${cont}`
            result.appendChild(item)
        }
    }
}