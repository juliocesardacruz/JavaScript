function verificar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var res = document.getElementById('res')
    if (ini.value.length == null) {
        res.style.textAlign = 'center'
        res.innerHTML
    } else if (pas.value.length == 0) {
        window.alert('Passo Inválido!! Considerando PASSO 1')
    } else {
        var n1 = ini
        var n2 = fim
        var n3 = res
        var n4 = pas
        for (n1 = ini; n1 <= n2; n1=(n1+n4))
            n3.innerHTML = `${n1}`

    }
}
