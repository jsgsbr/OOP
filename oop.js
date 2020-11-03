const _private = new WeakMap();

class Book {
    constructor(title, author, price) {
        // ====== Propiedades ======
        const properties = {
            _title: title,
            _author: author,
            _price: price
        }
        // Colocar propiedades como privadas:
        _private.set(this, {properties});
    }
    
    // ====== Métodos / Getters-Setters ======

    // Obtiene el título de un libro:
    get title() {
        return _private.get(this).properties['_title'];
    }

    // Setea/modifica el título de un libro:
    set title(newTitle) {
        return _private.get(this).properties['_title'] = newTitle;
    }

    // Obtiene el author de un libro
    get author() {
        return _private.get(this).properties['_author'];
    }

    // Setea/modifica el author de un libro
    set author(newAuthor) {
        return _private.get(this).properties['_author'] = newAuthor;
    }

    // Obtiene el precio del libro
    get price() {
        return _private.get(this).properties['_price'];
    }

    // Setea/modifica el precio de un libro
    set price(newPrice) {
        return _private.get(this).properties['_price'] = newPrice;
    }

    getAllData() {
        console.log( `Titulo: ${this.title}, Author: ${this.author}, Price: ${this.price}` )
    }
}

class Comics extends Book {
    constructor(name, author, price, illustrators) {
        super(name, author, price);
        this.illustrators = illustrators;
    }

    addIllustrator(newIllustrator = []) {
        this.illustrators.push(newIllustrator)
    }

    getAllData() {
        super.getAllData()
        console.log(`Illustrators: ${this.illustrators}`)
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(amount, price) {
        this.products.push( ...Array(amount).fill(price) );
    }

    showProducts() {
        console.log( this.products )
    }

    calcTotal() {
        return this.products.map( price => price ).reduce( (ac, price) => ac + price, 0);
    }

    printTicket() {
        console.log(`Total a pagar: ${this.calcTotal()}`)
    }
}

// Instancia de Book
const book1 = new Book('Rayuela', 'Julio Cortazar', 300)
const comic1 = new Comics('Batman: The Killing Joke', 'A.M', 150, ['Brian Bolland'])
const cart = new ShoppingCart()
cart.addProduct(2, comic1.price)
cart.addProduct(1, book1.price)
cart.showProducts()
cart.printTicket()
comic1.getAllData()

// console.log(book1)

// comic1.addIllustrator('John Higgins')
// console.log(comic1.illustrators)