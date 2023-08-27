<template>
    <section class="home">
        <h1 class="home__title">Cervezas</h1>
        <div class="home__cards">
            <ProductCard v-for="beer in displayProducts" :beer="beer" />
        </div>

        <article class="home__cta">
            <div class="home__cta-text">
                <h5>Sigue mercando</h5>
                <h4>Vinos</h4>
            </div>
            <img src="../../assets/icons/arrow-right.svg" alt="">
        </article>
    </section>
    <div class="home__button-container">
        <button class="home__button-filter" @click="openModal">filtrar
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.10882 4.83059C4.93001 4.60261 4.9764 4.27779 5.21243 4.10508C5.30561 4.0369 5.41931 4 5.53621 4H19.4638C19.7599 4 20 4.23186 20 4.51787C20 4.63077 19.9618 4.74059 19.8912 4.83059L13.8405 12.5448V18.4821C13.8405 18.5843 13.8091 18.6843 13.7504 18.7693C13.5862 19.0073 13.2533 19.0716 13.0069 18.913L11.3983 17.8772C11.2492 17.7812 11.1596 17.6195 11.1596 17.4463V12.5448L5.10882 4.83059Z"
                    fill="white" />
            </svg>
        </button>

    </div>

    <FilterModal :is-modal-open="isModalOpen" @modal-close="closeModal" @filters-selected="onChangeFilters($event)" />
</template>



<script setup lang="ts">
import { ref, type Ref, toRaw, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useProductStore } from '../../stores/products';

import ProductCard from '../../components/ProductCardComponent/ProductCard.vue'
import FilterModal from '../../components/FilterModalComponent/FilterModal.vue'
import type { Filter } from '@/interfaces/filter';
import type { Beer } from '@/interfaces/beer';

const productStore = useProductStore();
const { products } = storeToRefs(productStore);

let isModalOpen = ref(false);
let selectedFilters: Ref<Filter[]> = ref([]);
let filteredData: Ref<Beer[]> = ref([]);



productStore.getBeers();

const openModal = () => {
    isModalOpen.value = true;
}

const closeModal = () => {
    isModalOpen.value = false;
}

const onChangeFilters = (filters: Filter[]) => {
    selectedFilters.value = filters;

    if (filters.length == 0) {
        filteredData.value = products.value
        return
    }

    filteredData.value = products.value.filter(beer => {
        return filters.some(category => beer.category == category.id)
    })
}

const displayProducts = computed(() => {
    return filteredData.value.length > 0 ? filteredData.value : products.value;
});

</script>




<style lang="scss">
@import '../../assets/utils/variables';

.home {
    padding: 0 1.5rem;
    margin: auto;

    @media (min-width: 769px) {
        width: 75%;
        padding: 0;
    }

    &__title {
        text-align: center;
        font-size: clamp(1.75rem, 2.5vw, 2.75rem);
        font-weight: bold;
        margin: 2.5rem 0 2rem;
    }

    &__cards {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(min(35%, 17rem), 1fr));
    }

    &__cta {
        display: flex;
        justify-content: space-between;
        padding: 1.5rem;
        margin: 2rem 0;
        border: 1px solid $color-border;
        border-radius: $border-radius-s;


        &-text {
            h5 {
                font-size: clamp(.85rem, 1.5vw, 1.2rem);
            }

            h4 {
                font-weight: bold;
                font-size: clamp(2rem, 2vw, 2.5rem);
            }
        }
    }

    &__button-container {
        position: fixed;
        width: 100%;
        bottom: 1rem;
        z-index: 100;
        display: flex;
        justify-content: center;
    }

    &__button-filter {
        align-items: center;
        background-color: $color-blue;
        border-radius: $border-radius-s;
        color: white;
        display: flex;
        font-weight: bold;
        justify-content: center;
        padding: .5rem 1rem;
        text-transform: uppercase;

        &:disabled {
            opacity: .6;
        }

    }
}
</style>