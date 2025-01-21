let friends = []; // Lista de amigos
let sorteados = []; // Lista de amigos ya sorteados

// Asigna un texto a un elemento HTML por su ID
function asignar_texto(elemento, texto) {
    document.getElementById(elemento).innerHTML = texto;
}

// Limpia el contenido del input con ID 'amigo'
function limpiar_caja() {
    document.querySelector('#amigo').value = '';
}

// Obtiene el valor del input 'amigo' y lo limpia
function leer_input_amigo() {
    let nombre_amigo = document.getElementById('amigo').value;
    limpiar_caja();
    return nombre_amigo;
}

// Agrega un amigo a la lista si no está vacío ni repetido
function agregarAmigo() {
    let friend = leer_input_amigo();
    if (friend) {
        if (friends.includes(friend)) {
            asignar_texto('texto_principal', 'No repitas el nombre de tus amigos, dale un apodo :D');
        } else {
            friends.push(friend);
            let listaHTML = "<ul>";
            friends.forEach(friend => listaHTML += `<li>${friend}</li>`);
            listaHTML += "</ul>";
            document.getElementById('listaAmigos').innerHTML = listaHTML;
        }
    } else {
        asignar_texto('texto_principal', 'Ingresa un nombre, nada de vacíos rey :3');
    }
}

// Sortea un amigo que no haya sido sorteado aún
function sortearAmigo() {
    if (friends.length === 0) {
        asignar_texto('texto_principal', 'Ingresa amigos');
        return;
    }

    if (sorteados.length === friends.length) {
        asignar_texto('texto_principal', 'Todos los amigos han sido sorteados');
        return;
    }

    let amigo_sorteado;
    do {
        amigo_sorteado = friends[Math.floor(Math.random() * friends.length)];
    } while (sorteados.includes(amigo_sorteado));

    sorteados.push(amigo_sorteado);
    asignar_texto('resultado', `Tu amigo secreto es ${amigo_sorteado}`);
}
