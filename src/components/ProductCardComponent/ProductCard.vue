<template>
    <article class="card">
        <div class="card__body">
            <img class="card__img" :src="beer.img" alt="">
            <h2 class="card__title">{{ beer.name }}</h2>
            <p class="card__desc">{{ beer.description }}</p>
            <span class="card__price">{{ formatCurrency(beer.price) }}</span>
        </div>
        <div class="card__cta">
            <a class="card__add" href="#">Agregar</a>
        </div>
    </article>
</template>



<script lang="ts" setup>

import type { Beer } from '@/interfaces/beer';

const props = defineProps<{ beer: Beer }>()

const formatCurrency = ((price: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    return formatter.format(price)
})
</script>



<style lang="scss">
@import '../../assets/utils/variables';


.card {
    border: 1px solid $color-border;
    border-radius: $border-radius-s;
    display: flex;
    flex-direction: column;
    height: 100%;

    &__body {
        padding: 2rem 1rem 0;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    &__img {
        width: 90%;
        display: flex;
        margin: auto;
        margin-bottom: 2rem;
        aspect-ratio: 1/1;
    }

    &__title {
        font-weight: bold;
        font-size: clamp(1rem, 1vw, 1.5rem);
        margin-bottom: .5rem;
    }

    &__desc {
        color: $color-gray-dark;
        font-size: clamp(.75rem, .9vw, 1rem);
        margin-bottom: .5rem;
        flex-grow: 1;
    }

    &__price {
        font-weight: 600;
        font-size: clamp(1rem, 1vw, 1.5rem);
        display: block;
        margin: .75rem 0;
    }

    &__cta {
        background-color: $color-gray;
        padding: clamp(.5rem, 2vw, 1rem);

        .card__add {
            text-transform: uppercase;
            display: block;
            text-align: center;
            text-decoration: none;
            font-weight: 600;
            font-size: clamp(1rem, 1vw, 1.5rem);
            color: $color-blue;
        }
    }
}
</style>