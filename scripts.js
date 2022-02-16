var btn = document.querySelector('#btn')
btn.addEventListener('click', function(e){
    e.preventDefault();

    var tempo = new Date
    var anoAtual = tempo.getFullYear()

    var fano = document.querySelector('#fano')
    var anoNasc = Number(fano.value)

    var gen = document.getElementsByClassName('gen')
    var result = document.querySelector('#info-result')

    var idade = anoAtual - anoNasc
    var genero

    var foto = document.createElement('img')
    foto.setAttribute('id', 'imagem')

    if(anoNasc > anoAtual || fano.value.length == 0){
        alert('[ERRO] Verifique as informações e tente novamente!')
    }
    else{
        if(idade <= 4){
            genero = 'menino'
            result.innerHTML = `Identificamos ${genero} com ${idade} anos`
            foto.setAttribute('src', './images/homem/bebe.png')
        }
        else if(idade <= 8){
            genero = 'menino'
            result.innerHTML = `Identificamos ${genero} com ${idade} anos`
            foto.setAttribute('src', './images/homem/adolescente.png')
        }
        else if(idade <= 12){
            genero = 'menino'
            result.innerHTML = `Identificamos ${genero} com ${idade} anos`
            foto.setAttribute('src', './images/homem/adolescente.png')
        }
        else if(idade <= 18){
            genero = 'jovem'
            result.innerHTML = `Identificamos ${genero} com ${idade} anos`
            foto.setAttribute('src', './images/homem/adolescente.png')
        }
        else if(idade <= 25){
            genero = 'jovem'
            result.innerHTML = `Identificamos ${genero} com ${idade} anos`
            foto.setAttribute('src', './images/homem/adolescente.png')
        }
        else if(idade <= 35){
            genero = 'adulto'
            result.innerHTML = `Identificamos ${genero} com ${idade} anos`
            foto.setAttribute('src', './images/homem/homem1.png')
        }
        else if(idade <= 59){
            genero = 'adulto'
            result.innerHTML = `Identificamos ${genero} com ${idade} anos`
            foto.setAttribute('src', './images/homem/homem2.png')
        }
        else if(idade <= 65){
            genero = 'adulto'
            result.innerHTML = `Identificamos ${genero} com ${idade} anos`
            foto.setAttribute('src', './images/homem/idoso1.png')
        }
        else{
            genero = 'idoso'
            result.innerHTML = `Identificamos ${genero} com ${idade} anos`
            foto.setAttribute('src', './images/homem/idoso2.png')
        }
    }

    result.appendChild(foto)

})