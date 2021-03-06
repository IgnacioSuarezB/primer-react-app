# PROYECTO FINAL E-COMMERCE 馃洅

_E-commerce creado con React_

### Autor: Suarez Barraza, Ignacio

_Email: suarezb.ignacio@gmail.com_

_LinkedIn: [https://www.linkedin.com/in/ignacio-suarez-barraza/](https://www.linkedin.com/in/ignacio-suarez-barraza/)_

### Tecnolog铆as: React, React-router v5, Bootstrap 5

![funcionando gif](src/Hnet-image.gif)

## Comenzando 馃殌

### Asegurarse de tener instalado la versi贸n 14 o superior de node.js

Primeramente tenemos que tener clonado el repositorio en nuestra computadora, entonces abrimos la terminal en la carpeta del proyecto y ejecutamos los siguientes comandos

- npm install
- npm start

Esto va a iniciar nuestra aplicaci贸n en localhost:3000

Lo siguiente va a ser crear una colecci贸n en firestore llamada items y cada items debe tener los siguientes campos

- title
- description (breve descripci贸n)
- detail (descripci贸n extendida)
- price
- stock
- url (imagen del producto)
- category (recomendado 3 categorias)

Una vez cargados los items debemos editar el componente ./scr/components/general/Navbar.jsx con las categorias con el mismo nombre que el campo category

Por 煤ltimo debemos configurar nuestras credenciales de firebase en el proyecto, que se explica a continuaci贸n.

## Detalles del proyecto 馃搫

En la carpeta services se encuentra el archivo firebase.js y en 茅l debemos editar la constante firebaseConfig con nuestra creedencial
Tambien se encuentra las siguientes funciones para interactuar con firebase:

- getProducts = (key, operador, value)

_Promesa que devuelve un array de m谩ximo 12 objetos, los items de nuestra API_

_key: nombre el campo a comparar. operador: que hace la comparaci贸n. value: valor a comparar del campo. (todos strings)_

_En caso de no pasar algunos de los parametros devuelve los primeros 12 items_

- getItem(id)

_Especificamos la id de un producto y nos devuelve el objeto del mismo_

- getOrder(orderId)

_Especificamos la id de una orden y nos devuelve el objeto de la misma_

- firestoreSetOrder(arrayItems, formData, total)

_Chequea que haya stock disponible de los productos solicitados y crea en firestore una orden de compra en la colecci贸n orders con los datos del comprador, fecha, items y el total a pagar_

### Context

_En /scr/context/CartContext.jsx se encuetra toda la l贸gica del carrito_

Antes de agregar un item al carrito, se agrega la propiedad quantity con la cantidad del mismo.

- cartItems : Array que guarda todos los items del carrito
- addItem(item) : Agrega 1 item
- removeItem(itemID): Quita 1 item
- clearCart() : Elimina todos los items
- itemInCart(itemId) : Devuelve true si esta el item en el carrito, sino false
- changeQuantity(item, quantity) : Cambia la cantidad del item especificado
- itemsQuantity() : Devuelve la cantidad total de items

### M谩s funciones

_/scr/services/services.js_

- formatPrice(price) : devuelve un string con el con el formato del precio.

## Comentarios del autor 馃摂

El proyecto se encuentra en fase de desarrollo y se da principal importancia al funcionamiento correcto del mismo. El estilo visual es solo para una mejor visualizaci贸n de los cambios.
