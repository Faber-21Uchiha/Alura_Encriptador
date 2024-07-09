document.addEventListener("DOMContentLoaded", function() {
    const textoElement = document.getElementById("texto");
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const muñeco = document.getElementById("muñeco");
  
    const btnEncriptar = document.querySelector(".btn-encriptar");
    const btnDesencriptar = document.querySelector(".btn-desencriptar");
  
    const mappings = [
      { original: 'e', encrypted: 'enter' },
      { original: 'i', encrypted: 'imes' },
      { original: 'a', encrypted: 'ai' },
      { original: 'o', encrypted: 'ober' },
      { original: 'u', encrypted: 'ufat' }
    ];
  
    const encriptar = () => {
      const texto = textoElement.value;
      if (texto.length === 0) {
        showAlert("Ooops!", "Debes ingresar un texto", "./img/18-dark.png");
        resetUI();
        return;
      }
  
      let textoCifrado = texto;
      mappings.forEach(({ original, encrypted }) => {
        textoCifrado = textoCifrado.replace(new RegExp(original, 'gi'), encrypted);
      });
  
      textoElement.value = textoCifrado;
      updateUI("Texto encriptado con éxito", "", "./img/4-dark.png");
      toggleButtons(true);
    };
  
    const desencriptar = () => {
      const texto = textoElement.value;
      if (texto.length === 0) {
        showAlert("Ooops!", "Debes ingresar un texto", "./img/18-dark.png");
        resetUI();
        return;
      }
  
      let textoCifrado = texto;
      mappings.forEach(({ original, encrypted }) => {
        textoCifrado = textoCifrado.replace(new RegExp(encrypted, 'gi'), original);
      });
  
      textoElement.value = textoCifrado;
      updateUI("Texto desencriptado con éxito", "", "./img/17.png");
      toggleButtons(false);
    };
  
    const showAlert = (title, text, icon) => {
      swal(title, text, icon);
    };
  
    const resetUI = () => {
      updateUI("Ningún mensaje fue encontrado", "Ingresa el texto que deseas encriptar o desencriptar", "./img/5.png");
    };
  
    const updateUI = (title, message, imgSrc) => {
      tituloMensaje.textContent = title;
      parrafo.textContent = message;
      muñeco.src = imgSrc;
    };
  
    const toggleButtons = (isEncripted) => {
      if (isEncripted) {
        btnEncriptar.style.display = 'none';
        btnDesencriptar.style.display = 'block';
      } else {
        btnEncriptar.style.display = 'block';
        btnDesencriptar.style.display = 'none';
      }
    };
  
    btnEncriptar.addEventListener("click", encriptar);
    btnDesencriptar.addEventListener("click", desencriptar);
  
    // Inicializar estado
    toggleButtons(false);
  });
  