const buttonEncriptar = document.querySelector('.button__encriptar');
const buttonDesencriptar = document.querySelector('.button__desencriptar');
const buttonCopiar = document.querySelector('.button__copiar');
const cajaTexto = document.querySelector('.caja-texto');
const containerResultado = document.querySelector('.container__resultado');
const containerMuñeco = document.querySelector('.container__muñeco');
const containerParrafo = document.querySelector('.container__parrafo');

function encriptarTexto(texto) {
  let textoEncriptado = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
  return textoEncriptado;
}

function desencriptarTexto(texto) {
  let textoDesencriptado = texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
  return textoDesencriptado;
}

function mostrarResultado(texto) {
  containerMuñeco.style.display = 'none';
  containerParrafo.style.display = 'none';
  containerResultado.style.display = 'block';
  containerResultado.innerHTML = `<p>${texto}</p>`;
}

function copiarTexto() {
  const texto = containerResultado.innerText;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert('Texto copiado al portapapeles');
    })
    .catch((err) => {
      console.error('Error al copiar el texto: ', err);
    });
}

cajaTexto.addEventListener('input', (event) => {
  const texto = event.target.value;
  event.target.value = texto.replace(/[^a-z\s]/g, '');
});

buttonEncriptar.addEventListener('click', () => {
  const texto = cajaTexto.value;
  const textoEncriptado = encriptarTexto(texto);
  mostrarResultado(textoEncriptado);
});

buttonDesencriptar.addEventListener('click', () => {
  const texto = cajaTexto.value;
  const textoDesencriptado = desencriptarTexto(texto);
  mostrarResultado(textoDesencriptado);
});

buttonCopiar.addEventListener('click', copiarTexto);
