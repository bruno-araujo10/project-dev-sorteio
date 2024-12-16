const button = document.querySelector('button')

function generateNumber() {
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
    const paragrafo = document.querySelector('p')

  const result = Math.floor(Math.random() * (max - min + 1) + min)

  paragrafo.innerHTML = `o número sorteado entre ${min} e ${max} é ${result}`
}

button.addEventListener('click', generateNumber)