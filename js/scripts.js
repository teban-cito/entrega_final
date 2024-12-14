function openModal() {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("img01");
    var captionText = document.getElementById("caption");
  
    img.src = "src/productos/RZH4yqAyf9QlDq9BuSgOwJmgALWuSb41elDZ9OyTbaOSOD5TA.jpg";
    captionText.innerHTML = "Propiedad de lujo";
  
    modal.style.display = "block";
  }
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  function openModal2() {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img.src = "src/productos/4q70cqsvm9Y3HNFZ0gn7Po2reFe78Yj431tJp77E4AeqcGynA.jpg";
    captionText.innerHTML = "Propiedad de lujo";
  
    modal.style.display = "block";
  }
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  function openModal3() {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img.src = "src/productos/CYwtXmg49FahIRIj4Dn1up6JVJyfCY8dFtWABvCgm41Lnh8JA.jpg";
    captionText.innerHTML = "Propiedad de lujo";
  
    modal.style.display = "block";
  }
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  function openModal4() {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img.src = "src/productos/jw3q0X2f6ES8Fy9enEwVAYdLbxLy8CG1B5JXaFWJGAc9IE5TA.jpg";
    captionText.innerHTML = "Propiedad de lujo";
  
    modal.style.display = "block";
  }
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  function openModal5() {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img.src = "src/productos/anuncio6.jpg";
    captionText.innerHTML = "Propiedad de lujo";
  
    modal.style.display = "block";
  }
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  function openModal6() {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img.src = "src/productos/wanerfKKCHqVi0BcYydAfRLkpbNzjyVpQtkO8roeHRmsjQkPB.jpg";
    captionText.innerHTML = "Propiedad de lujo";
  
    modal.style.display = "block";
  }
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

//carrito index

let carrito = [];
const propiedades = [
    {
        id: 1,
        nombre: "Casa con Lago Privado",
        precio: 9000000,
        imagen: "src/productos/4q70cqsvm9Y3HNFZ0gn7Po2reFe78Yj431tJp77E4AeqcGynA.jpg"
    },
    {
        id: 2,
        nombre: "Casa con Terminados de Lujo",
        precio: 4500000,
        imagen: "src/productos/RZH4yqAyf9QlDq9BuSgOwJmgALWuSb41elDZ9OyTbaOSOD5TA.jpg"
    },
    {
        id: 3,
        nombre: "Casa con Piscina Privada",
        precio: 3000000,
        imagen: "src/productos/CYwtXmg49FahIRIj4Dn1up6JVJyfCY8dFtWABvCgm41Lnh8JA.jpg"
    },
    {
        id: 4,
        nombre: "Casa con Excelente Vista",
        precio: 5700000,
        imagen: "src/productos/jw3q0X2f6ES8Fy9enEwVAYdLbxLy8CG1B5JXaFWJGAc9IE5TA.jpg"
    },
    {
        id: 5,
        nombre: "Casa con Espectacular Entorno de Paisajes",
        precio: 3000000,
        imagen: "src/productos/anuncio6.jpg"
    },
    {
        id: 6,
        nombre: "Casa de Estilo Moderno y Elegante",
        precio: 6000000,
        imagen: "src/productos/wanerfKKCHqVi0BcYydAfRLkpbNzjyVpQtkO8roeHRmsjQkPB.jpg"
    }
];

function agregarAlCarrito(id) {
    const propiedad = propiedades.find(p => p.id === id);
    const existeEnCarrito = carrito.some(p => p.id === id);

    if (!existeEnCarrito) {
        carrito.push({ ...propiedad, cantidad: 1 });
        actualizarCarrito();
        mostrarNotificacion(`${propiedad.nombre} agregada al carrito`);
    } else {
        mostrarNotificacion('Esta propiedad ya está en el carrito');
    }
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const contadorCarrito = document.getElementById('contador-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach(propiedad => {
        const itemCarrito = document.createElement('div');
        itemCarrito.classList.add('carrito-item');
        itemCarrito.innerHTML = `
            <img src="${propiedad.imagen}" width="50" height="50" />
            ${propiedad.nombre} - $${propiedad.precio.toLocaleString()}
            <button onclick="eliminarDelCarrito(${propiedad.id})">🗑️</button>
        `;
        listaCarrito.appendChild(itemCarrito);
        total += propiedad.precio;
    });

    contadorCarrito.textContent = carrito.length;
    totalCarrito.textContent = `Total: $${total.toLocaleString()}`;
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(p => p.id !== id);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function finalizarCompra() {
    if (carrito.length > 0) {
        alert('Gracias por tu compra. Un asesor se pondrá en contacto contigo.');
        vaciarCarrito();
        cerrarCarrito();
    } else {
        alert('Tu carrito está vacío');
    }
}

function mostrarCarrito() {
    document.getElementById('carrito-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function cerrarCarrito() {
    document.getElementById('carrito-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.textContent = mensaje;
    notificacion.style.position = 'fixed';
    notificacion.style.bottom = '20px';
    notificacion.style.right = '20px';
    notificacion.style.backgroundColor = '#2a9d8f';
    notificacion.style.color = 'white';
    notificacion.style.padding = '10px';
    notificacion.style.borderRadius = '5px';
    document.body.appendChild(notificacion);
    setTimeout(() => document.body.removeChild(notificacion), 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    const botonesPropiedad = document.querySelectorAll('.property .btn');
    botonesPropiedad.forEach((boton, index) => {
        const botonCarrito = document.createElement('button');
        botonCarrito.textContent = '🛒 Agregar al Carrito';
        botonCarrito.classList.add('boton-carrito');
        botonCarrito.onclick = () => agregarAlCarrito(index + 1);
        boton.parentNode.appendChild(botonCarrito);
    });

    document.getElementById('ver-carrito').addEventListener('click', mostrarCarrito);
});

//carrito anuncios

function agregarAlCarrito(id) {
    const propiedad = propiedades.find(p => p.id === id);
    const existeEnCarrito = carrito.some(p => p.id === id);

    if (!existeEnCarrito) {
        carrito.push({ ...propiedad, cantidad: 1 });
        actualizarCarrito();
        mostrarNotificacion(`${propiedad.nombre} agregada al carrito`);
    } else {
        mostrarNotificacion('Esta propiedad ya está en el carrito');
    }
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const contadorCarrito = document.getElementById('contador-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach(propiedad => {
        const itemCarrito = document.createElement('div');
        itemCarrito.classList.add('carrito-item');
        itemCarrito.innerHTML = `
            <img src="${propiedad.imagen}" width="50" height="50" />
            ${propiedad.nombre} - $${propiedad.precio.toLocaleString()}
            <button onclick="eliminarDelCarrito(${propiedad.id})">🗑️</button>
        `;
        listaCarrito.appendChild(itemCarrito);
        total += propiedad.precio;
    });

    contadorCarrito.textContent = carrito.length;
    totalCarrito.textContent = `Total: $${total.toLocaleString()}`;
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(p => p.id !== id);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function finalizarCompra() {
    if (carrito.length > 0) {
        alert('Gracias por tu compra. Un asesor se pondrá en contacto contigo.');
        vaciarCarrito();
        cerrarCarrito();
    } else {
        alert('Tu carrito está vacío');
    }
}

function mostrarCarrito() {
    document.getElementById('carrito-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function cerrarCarrito() {
    document.getElementById('carrito-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.textContent = mensaje;
    notificacion.style.position = 'fixed';
    notificacion.style.bottom = '20px';
    notificacion.style.right = '20px';
    notificacion.style.backgroundColor = '#2a9d8f';
    notificacion.style.color = 'white';
    notificacion.style.padding = '10px';
    notificacion.style.borderRadius = '5px';
    document.body.appendChild(notificacion);
    setTimeout(() => document.body.removeChild(notificacion), 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    const botonesPropiedad = document.querySelectorAll('.property-card .btn');
    botonesPropiedad.forEach((boton, index) => {
        const botonCarrito = document.createElement('button');
        botonCarrito.textContent = '🛒 Agregar al Carrito';
        botonCarrito.classList.add('boton-carrito');
        botonCarrito.onclick = () => agregarAlCarrito(index + 1);
        boton.parentNode.appendChild(botonCarrito);
    });

    document.getElementById('ver-carrito').addEventListener('click', mostrarCarrito);
});