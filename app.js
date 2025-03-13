let nombres = [];
const mensajeDeError = [
    "¡Error! No puedes ingresar un nombre en blanco. Ingresa un nombre válido.",
    "¡Error! Nombre ya ingresado. Ingresa un nuevo nombre.",
    "¡Error! Debes ingresar por lo menos 2 nombres."
];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = document.getElementById("amigo").value.trim();

    // Validar si el nombre está vacío
    if (!nombre) {
        mostrarError(0);
        return;
    }

    // Validar si el nombre ya existe
    if (nombres.includes(nombre)) {
        mostrarError(1);
        return;
    }

    // Agregar el nombre a la lista
    nombres.push(nombre);
    document.getElementById("amigo").value = "";  // Limpiar el campo de texto
    mostrarListaNombres();
}

// Mostrar los nombres en la interfaz
function mostrarListaNombres() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = nombres.map(nombre => `<li class="name-item">${nombre}</li>`).join('');
}

// Función para mostrar el mensaje de error
function mostrarError(indice) {
    alert(mensajeDeError[indice]);
    document.getElementById("amigo").value = "";  // Limpiar el campo de texto
}

// Función para elegir un amigo aleatorio
function elegirAmigo() {
    if (nombres.length < 2) {
        alert(mensajeDeError[2]);
        return null;
    }

    const posicionAleatoria = Math.floor(Math.random() * nombres.length);
    return posicionAleatoria;
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const indice = elegirAmigo();

    if (indice !== null) {
        const amigoSecreto = document.getElementById("resultado");
        amigoSecreto.innerHTML = `<li class="result-item">Tu amigo secreto es: <strong>${nombres[indice]}</strong></li>`;
    }
}
