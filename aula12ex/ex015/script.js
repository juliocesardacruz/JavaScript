function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verificar os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = ' um <strong>Homem</strong>'
        if (idade >=0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'homem_bebe.png')
        }else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'homem_jovem.png')
        }else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'homem_adulto.png')
        }else {
            //Idoso
            img.setAttribute('src', 'homem_idoso.png')
        }
    }else if (fsex[1].checked) {
        gênero = 'uma <strong>Mulher</strong>'
        if (idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'mulher_bebe.png' )
        }else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'mulher_jovem.png')
        }else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'mulher_adulta.png')
        }else {
            //Idoso
            img.setAttribute('src', 'mulher_idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} ano(s) de idade!!`
    res.appendChild(img)
  }
}