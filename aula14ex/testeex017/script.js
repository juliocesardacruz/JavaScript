function gerar() {
    let num = document.getElementById('txtnum')
    let res = document.getElementById('res')
    let cont = 1
    if (num.value.length == '') {
        window.alert('Por favor, digite um número!!')
    } else {
        for (cont = 1; cont <= 10; cont++) {
            let n1 = Number(num.value)
            let tab = n1 * cont
            res.innerHTML += `<br>${n1} X ${cont} = ${tab} `
        }
    }
}