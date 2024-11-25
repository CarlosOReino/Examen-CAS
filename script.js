let divProd = document.getElementById("productos");
let url = "https://fakestoreapi.com/products?limit=10";

fetch(url)
.then(res => res.json())
.then(datos =>{
    datos.forEach(producto => {
        let elemento = document.createElement("div");
        elemento.classList.add('producto');
        elemento.innerHTML = `
        <h2>${producto.title}</h2>
        <img src= "${producto.image}" alt="${producto.title}">
        <h4>Precio: ${producto.price}€</h4>
        <strong>Descripción: </strong><p>${producto.description}</p>
        <span>Categoría: ${producto.category}</span> 
        <span>Calificación: ${producto.rating.rate}</span>
        <p>Añadir a la cesta: <input type="checkbox"></p>
        `;
        divProd.appendChild(elemento);
    });
})