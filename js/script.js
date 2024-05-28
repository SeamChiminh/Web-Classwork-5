import { cardComponent } from "../components/cardComponent";
import { products } from "../data/products";

console.log(products)
let readerArea = document.querySelector('#card-area');

products.map((pro) => {
    readerArea.innerHTML = cardComponent(pro);
});