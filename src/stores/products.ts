import type { Beer } from "../interfaces/beer";
import { defineStore } from "pinia";

interface ProductsState {
    products : Beer[]
}

export const useProductStore = defineStore('products', {
    state: () : ProductsState  => ({
        products: []
    }),
    actions: {
        async getBeers() {
            try {
                const response = await fetch('data/beers.json');
                if (response.ok) {
                    this.products = await response.json();
                }
            } catch (err) {
                console.error(err);
            }
        },
    }
})