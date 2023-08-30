//Estructura HTML

const d = document

const cabeza = d.head
const titulo = d.createElement('title')
titulo.innerText = 'Calculadora de talles'
cabeza.appendChild(titulo)

const cuerpo = d.body
cuerpo.classList = 'bg-black'
const header = d.createElement('header')
cuerpo.prepend(header)
const navBar = d.createElement('nav')
navBar.classList = 'navbar-brand-lg bg-black'
header.append(navBar)
const contenedorNav = d.createElement('div')
contenedorNav.classList = 'display-flex align-items-center justify-content-center'
navBar.appendChild(contenedorNav)
const tituloNav = d.createElement('h1')
tituloNav.innerText = 'Bienvenido a nuestra calculadora de talles'
tituloNav.classList = 'text-white text-center mt-4 mb-0'
contenedorNav.appendChild(tituloNav)

const footer = d.getElementById('footer');
footer.innerHTML = '© 2023 Multimarca Argentina. Todos los derechos reservados.';



// Escuchar los clics en los botones de calcular
const botonCalcularTorsoM = document.getElementById('calcularTorsoM');
const botonCalcularPiernasM = document.getElementById('calcularPiernasM');

botonCalcularTorsoM.addEventListener('click', () => {
    const pecho = document.getElementById('pechoTorsoM').value;
    const cintura = document.getElementById('cinturaTorsoM').value;
    const cadera = document.getElementById('caderaTorsoM').value;

    if (!isNaN(parseFloat(pecho)) && !isNaN(parseFloat(cintura)) && !isNaN(parseFloat(cadera))) {
        const datosTorsoM = {
            pecho: pecho,
            cintura: cintura,
            cadera: cadera
        };

        guardarEnLocalStorage('datosTorsoM', datosTorsoM);

        const datosArrayTorsoM = [parseFloat(pecho), parseFloat(cintura), parseFloat(cadera)];

        const promedioTorsoM = calcularPromedio(datosArrayTorsoM);

        mostrarTalleTorsoM(promedioTorsoM);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Algo salio mal!',
            text: "Alguno de los tres datos ingresados no es valido.",
            footer: 'Vuelva a intentarlo.'
        })
    }
});


botonCalcularPiernasM.addEventListener('click', () => {
    const cintura = document.getElementById('cinturaPiernasM').value;
    const cadera = document.getElementById('caderaPiernasM').value;
    const tiro = document.getElementById('tiroPiernasM').value;

    if (!isNaN(parseFloat(cintura)) && !isNaN(parseFloat(cadera)) && !isNaN(parseFloat(tiro))) {
        const datosPiernasM = {
            cintura: cintura,
            cadera: cadera,
            tiro: tiro
        };

        guardarEnLocalStorage('datosPiernasM', datosPiernasM);

        const datosArrayPiernasM = [parseFloat(cintura), parseFloat(cadera), parseFloat(tiro)];

        const promedioPiernasM = calcularPromedio(datosArrayPiernasM);

        mostrarTallePiernasM(promedioPiernasM);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Algo salio mal!',
            text: "Alguno de los tres datos ingresados no es valido.",
            footer: 'Vuelva a intentarlo.'
        })
    }
});

// Escuchar los clics en los botones de calcular
const botonCalcularTorsoF = document.getElementById('calcularTorsoF');
const botonCalcularPiernasF = document.getElementById('calcularPiernasF');

botonCalcularTorsoF.addEventListener('click', () => {
    const pecho = document.getElementById('pechoTorsoF').value;
    const cintura = document.getElementById('cinturaTorsoF').value;
    const cadera = document.getElementById('caderaTorsoF').value;

    if (!isNaN(parseFloat(pecho)) && !isNaN(parseFloat(cintura)) && !isNaN(parseFloat(cadera))) {
        const datosTorsoF = {
            pecho: pecho,
            cintura: cintura,
            cadera: cadera
        };

        guardarEnLocalStorage('datosTorsoF', datosTorsoF);

        const datosArrayTorsoF = [parseFloat(pecho), parseFloat(cintura), parseFloat(cadera)];

        const promedioTorsoF = calcularPromedio(datosArrayTorsoF);

        mostrarTalleTorsoF(promedioTorsoF);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Algo salio mal!',
            text: "Alguno de los tres datos ingresados no es valido.",
            footer: 'Vuelva a intentarlo.'
        })
    }
});


botonCalcularPiernasF.addEventListener('click', () => {
    const cintura = document.getElementById('cinturaPiernasF').value;
    const cadera = document.getElementById('caderaPiernasF').value;
    const tiro = document.getElementById('tiroPiernasF').value;

    if (!isNaN(parseFloat(cintura)) && !isNaN(parseFloat(cadera)) && !isNaN(parseFloat(tiro))) {
        const datosPiernasF = {
            cintura: cintura,
            cadera: cadera,
            tiro: tiro
        };

        guardarEnLocalStorage('datosPiernasF', datosPiernasF);

        const datosArrayPiernasF = [parseFloat(cintura), parseFloat(cadera), parseFloat(tiro)];

        const promedioPiernasF = calcularPromedio(datosArrayPiernasF);

        mostrarTallePiernasF(promedioPiernasF);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Algo salio mal!',
            text: "Alguno de los tres datos ingresados no es valido.",
            footer: 'Vuelva a intentarlo.'
        })
    }
});

const botonCalcularCalzado = document.getElementById('calcularCalzado');

botonCalcularCalzado.addEventListener('click', () => {
    const calzado = document.getElementById('calzado').value;

    if (!isNaN(parseFloat(calzado))) {
        guardarEnLocalStorage('calzado', calzado);

        const datoCalzado = parseFloat(calzado);

        mostrarTalleCalzado(datoCalzado);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Algo salio mal!',
            text: "El dato ingresado no es valido.",
            footer: 'Vuelva a intentarlo.'
        })
    }
});



// Función para guardar los datos en Local Storage
function guardarEnLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

//Funcion para calcular los promedios
function calcularPromedio(datos) {
    const suma = datos.reduce((total, valor) => total + parseFloat(valor), 0);
    return suma / datos.length;
}

async function mostrarTalleTorsoM(promedio) {
    try {
        const response = await fetch('https://64ee9ac8219b3e2873c358dd.mockapi.io/Medidas');
        const data = await response.json();

        const talleData = data.find(item => item.torsoM);
        if (talleData) {
            const talles = talleData.torsoM;
            const talleEncontrado = Object.keys(talles).find(key => promedio >= talles[key].min && promedio <= talles[key].max);

            if (talleEncontrado) {
                Swal.fire(`Usted es talle ${talleEncontrado.toUpperCase()} para las prendas de su torso.`);
                return
            }
        }
        Swal.fire({
            icon: 'error',
            title: 'Algo salió mal!',
            text: 'No tenemos talle para sus medidas, disculpe.',
            footer: 'Vuelva a intentarlo.'
        });
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al cargar los datos. Por favor, inténtelo nuevamente.',
            footer: 'Vuelva a intentarlo.'
        });
    }
}

async function mostrarTallePiernasM(promedio) {
    try {
        const response = await fetch('https://64ee9ac8219b3e2873c358dd.mockapi.io/Medidas');
        const data = await response.json();

        const talleData = data.find(item => item.piernasM);
        if (talleData) {
            const talles = talleData.piernasM;
            const talleEncontrado = Object.keys(talles).find(key => promedio >= talles[key].min && promedio <= talles[key].max);

            if (talleEncontrado) {
                Swal.fire(`Usted es talle ${talleEncontrado.toUpperCase()} para las prendas de sus piernas.`);
                return
            }
        }
        Swal.fire({
            icon: 'error',
            title: 'Algo salió mal!',
            text: 'No tenemos talle para sus medidas, disculpe.',
            footer: 'Vuelva a intentarlo.'
        });
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al cargar los datos. Por favor, inténtelo nuevamente.',
            footer: 'Vuelva a intentarlo.'
        });
    }
}

async function mostrarTalleTorsoF(promedio) {
    try {
        const response = await fetch('https://64ee9ac8219b3e2873c358dd.mockapi.io/Medidas');
        const data = await response.json();

        const talleData = data.find(item => item.torsoF);
        if (talleData) {
            const talles = talleData.torsoF;
            const talleEncontrado = Object.keys(talles).find(key => promedio >= talles[key].min && promedio <= talles[key].max);

            if (talleEncontrado) {
                Swal.fire(`Usted es talle ${talleEncontrado.toUpperCase()} para las prendas de su torso.`);
                return
            }
        }
        Swal.fire({
            icon: 'error',
            title: 'Algo salió mal!',
            text: 'No tenemos talle para sus medidas, disculpe.',
            footer: 'Vuelva a intentarlo.'
        });
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al cargar los datos. Por favor, inténtelo nuevamente.',
            footer: 'Vuelva a intentarlo.'
        });
    }
}

async function mostrarTallePiernasF(promedio) {
    try {
        const response = await fetch('https://64ee9ac8219b3e2873c358dd.mockapi.io/Medidas');
        const data = await response.json();

        const talleData = data.find(item => item.piernasF);
        if (talleData) {
            const talles = talleData.piernasF;
            const talleEncontrado = Object.keys(talles).find(key => promedio >= talles[key].min && promedio <= talles[key].max);

            if (talleEncontrado) {
                Swal.fire(`Usted es talle ${talleEncontrado.toUpperCase()} para las prendas de sus piernas.`);
                return
            }
        }
        Swal.fire({
            icon: 'error',
            title: 'Algo salió mal!',
            text: 'No tenemos talle para sus medidas, disculpe.',
            footer: 'Vuelva a intentarlo.'
        });
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al cargar los datos. Por favor, inténtelo nuevamente.',
            footer: 'Vuelva a intentarlo.'
        });
    }
}

async function mostrarTalleCalzado(medidaPie) {
    try {
        const response = await fetch('https://64ee9ac8219b3e2873c358dd.mockapi.io/Medidas');
        const data = await response.json();

        const talleData = data.find(item => item.calzado);
        if (talleData) {
            const talles = talleData.calzado;
            const talleEncontrado = Object.keys(talles).find(key => medidaPie >= talles[key].min && medidaPie <= talles[key].max);

            if (talleEncontrado) {
                Swal.fire(`Usted es talle [${talleEncontrado.toUpperCase()}] en calzado.`);
                return
            }
        }
        Swal.fire({
            icon: 'error',
            title: 'Algo salió mal!',
            text: 'No tenemos talle para su medida, disculpe.',
            footer: 'Vuelva a intentarlo.'
        });
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al cargar los datos. Por favor, inténtelo nuevamente.',
            footer: 'Vuelva a intentarlo.'
        });
    }
}
