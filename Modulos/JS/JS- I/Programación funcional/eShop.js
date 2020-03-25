"use strict";
//Datos de ejemplo para los items
/* Crear un falso e-commerce. Por un lado tenemos todos los artículos que forman el stock 
de la tienda con una clase item que consta de nombre del artículo y precio.Tendremos también un usuario que añade
cosas a su carrito, que es privado. Los artículos cuando los metemos al carrito los convertimos un tipo de dato que
guarda las unidades que tiene el usuario de dicho artículo, lollamaremos CartItem. La tienda es la encargada de 
imprimir un ticket por la consola cuando se lo ordena el usuario. */

const itemNames = ["Camisa", "Pantalon", "Calcetines"];
const itemPrices = [13, 27, 100];

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
class CartItem {
  constructor(item) {
    this.item = item;
    this.units = 1;
  }
  increase() {
    this.units++;
  }
}
class User {
  #cart;
  #numeroCartItems;
  constructor(name) {
    this.name = name;
    this.#cart = [];
    this.#numeroCartItems = 0;
  }

  addToCart(cartItem) {
    for (let i = 0; i < this.#numeroCartItems; i++) {
      if (
        this.#cart[i] !== undefined &&
        this.#cart[i].item.name === cartItem.item.name
      ) {
        this.#cart[i].increase();
        return;
      }
    }

    this.#numeroCartItems++;
    return this.#cart.push(cartItem);
  }

  pay() {
    Shop.checkout(this.#cart);
  }
}
class Shop {
  inventary() {
    this.inventary = itemNames.map(
      (name, index) => new Item(name, itemPrices[index])
    );
  }
  static checkout(cart) {
    let totalCost = 0;
    for (const cartItem of cart) {
      let precio = cartItem.item.price * cartItem.units;
      totalCost = totalCost + precio;
      console.log(
        `${cartItem.item.name} x ${cartItem.units} = ${cartItem.item.price} € x ${cartItem.units} = ${precio} €`
      );
    }
    console.log(`El coste total es : ${totalCost} €`);
  }
}

function getRandomItem() {
  return Math.round(Math.random() * 2);
}

function compraItemsAleatoria(prendas) {
  for (let i = 0; i < prendas; i++) {
    myUser.addToCart(new CartItem(myShop.inventary[getRandomItem()]));
  }
}

const myUser = new User("Ruben");
const myShop = new Shop();
myShop.inventary();
console.log(myShop);
compraItemsAleatoria(10);
console.log(myUser);
myUser.pay();
