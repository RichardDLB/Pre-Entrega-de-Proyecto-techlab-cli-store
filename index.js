async function gestionarProductos() {
    console.log("Inicio de tarea");

    // 1. Usando un método de arrays (.slice()) y destructuring de process.argv
    const argumentos = process.argv.slice(2);
    const [accion, recurso, title, price, category] = argumentos;

    const BASE_URL = 'https://DummyJSON.com'; 
    // const BASE_URL = 'https://fakestoreapi.com'; // Alternativa: https://fakestoreapi.com


    

    try {
        if (accion === 'GET') {
            const response = await fetch(`${BASE_URL}/${recurso}`);
            const data = await response.json();

            // Verificamos si estamos pidiendo la lista general de productos
            if (recurso === 'products') {
                // DummyJSON guarda el arreglo dentro de la propiedad .products
                console.log("Lista completa de productos:", data.products);
            } else {
                // 2. Destructuring del objeto obtenido (cuando es un solo producto, ej: products/1)
                const { id, title: tituloProd, price: precioProd } = data;
                console.log(`Producto ID ${id}: ${tituloProd} - $${precioProd}`);
            }

        } else if (accion === 'POST') {
            // Objeto base del producto
            const productoBase = { title, price: parseFloat(price), category };

            // 3. Aplicando el operador SPREAD (...) para expandir/clonar el objeto en el body
            // Nota: En DummyJSON la ruta para agregar es /products/add
            const endpointPost = recurso === 'products' ? 'products/add' : recurso;
            
            const response = await fetch(`${BASE_URL}/${endpointPost}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...productoBase,
                    fechaCreacion: new Date().toISOString() // Añadiendo propiedad extra con spread
                })
            });
            const data = await response.json();
            
            const { id } = data;
            console.log(`¡Producto creado con éxito! ID asignado: ${id}`);

        } else if (accion === 'DELETE') {
            const response = await fetch(`${BASE_URL}/${recurso}`, {
                method: "DELETE"
            });
            const data = await response.json();
            console.log("El item se eliminó con éxito:", data);

        } else {
            console.log('Comando no reconocido. Usa GET, POST o DELETE.');
        }

    } catch (error) {
        console.error('Hubo un error al procesar la solicitud:', error);
    }
}

gestionarProductos();