'use strict';
function Product (name, price){

    this.name = name;
    this.price = price;
       
    };
    Product.prototype.make25PercentDiscount() {

        this.price = this.price - (this.price * 25 / 100);
    };

const product1 = new Product('milk' ,100);
products.make25PercentDiscount();

console.log(product1);



class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {

        this.price = this.price - (this.price * 25 / 100);
    }
       
};

    const product1 = new Product('milk' ,100);
    products.make25PercentDiscount();

    console.log(product1);

  