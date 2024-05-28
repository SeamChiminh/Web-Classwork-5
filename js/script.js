import { cardComponent } from "../components/cardComponent.js";
import { products } from "../data/products.js";

console.log(products)
let readerArea = document.querySelector('#card-area');

products.map((pro) => {
    readerArea.innerHTML = cardComponent(pro);
});