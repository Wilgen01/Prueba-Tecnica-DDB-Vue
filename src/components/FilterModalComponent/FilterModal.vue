<template>
    <div v-if="isModalOpen" class="overlay"></div>
    <section v-if="isModalOpen" class="modal">
        <button class="modal__close" @click="closeModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M19.2027 6.47484C19.5933 6.08432 19.5933 5.45116 19.2027 5.06063L18.8492 4.70708C18.4587 4.31655 17.8255 4.31655 17.435 4.70708L12.662 9.48C12.2715 9.87052 11.6384 9.87052 11.2478 9.48L6.47492 4.70708C6.08439 4.31655 5.45123 4.31655 5.0607 4.70708L4.70715 5.06063C4.31662 5.45116 4.31662 6.08432 4.70715 6.47484L9.48007 11.2478C9.87059 11.6383 9.87059 12.2715 9.48007 12.662L4.70705 17.435C4.31652 17.8255 4.31652 18.4587 4.70705 18.8492L5.0606 19.2028C5.45112 19.5933 6.08429 19.5933 6.47481 19.2028L11.2478 14.4297C11.6384 14.0392 12.2715 14.0392 12.662 14.4297L17.4351 19.2028C17.8256 19.5933 18.4588 19.5933 18.8493 19.2028L19.2028 18.8492C19.5934 18.4587 19.5934 17.8255 19.2028 17.435L14.4298 12.662C14.0393 12.2715 14.0393 11.6383 14.4298 11.2478L19.2027 6.47484Z"
                    fill="black" />
            </svg>
        </button>

        <div class="modal__body">
            <h2 class="modal__title">Filtros</h2>
            <div v-for="filter in filters" class="modal__filters">
                <label class="modal__label" :for="`${filter.id}`">
                    {{ filter.name }}
                </label>
                <input :id="`${filter.id}`" class="modal__check" type="checkbox" v-model="filter.selected"
                    @change="onFilterInputsChange" />
            </div>
        </div>
        <div class=" modal__buttons">
            <button class="modal__button" :disabled="filterCount <= 0" @click="clearFilters">limpiar</button>
            <button class="modal__button modal__button--filter" @click="onFilter">filtrar
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.10882 4.83059C4.93001 4.60261 4.9764 4.27779 5.21243 4.10508C5.30561 4.0369 5.41931 4 5.53621 4H19.4638C19.7599 4 20 4.23186 20 4.51787C20 4.63077 19.9618 4.74059 19.8912 4.83059L13.8405 12.5448V18.4821C13.8405 18.5843 13.8091 18.6843 13.7504 18.7693C13.5862 19.0073 13.2533 19.0716 13.0069 18.913L11.3983 17.8772C11.2492 17.7812 11.1596 17.6195 11.1596 17.4463V12.5448L5.10882 4.83059Z"
                        fill="white" />
                </svg>
                <span v-if="filterCount > 0" class="modal__button--badge">{{ filterCount }}</span>
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, type Ref, toRaw } from 'vue';
import type { Filter } from '@/interfaces/filter';

const emit = defineEmits(['modalClose', 'filtersSelected']);
const props = defineProps({
    isModalOpen: Boolean
})



const filterCount = ref(0);
let filters: Ref<Filter[]> = ref([
    { id: 1, name: "Rubia", selected: false },
    { id: 2, name: "Morena", selected: false },
    { id: 3, name: "Roja", selected: false }
])
let appliedFilters: Ref<Filter[]> = ref(structuredClone(toRaw(filters.value)));

const closeModal = () => {
    filters.value = structuredClone(toRaw(appliedFilters.value));
    setFilterCount();
    emit('modalClose', true);
};

const onFilter = () => {
    const selectedFilters = onFilterInputsChange();
    appliedFilters.value = structuredClone(toRaw(filters.value));
    emit('filtersSelected', selectedFilters);
    closeModal();
};

const onFilterInputsChange = () => {
    const selectedFilters = filters.value.filter(item => item.selected);
    filterCount.value = selectedFilters.length;
    return selectedFilters;
};

const setFilterCount = () => {
    filterCount.value = getSelectedFilters().length;
};

const getSelectedFilters = () => {
    return filters.value.filter(item => item.selected);
};

const clearFilters = () => {
    filters.value.forEach(filter => {
        filter.selected = false
    })

    onFilter();
}

</script>

<style lang="scss">
@import '../../assets/utils/variables';


.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.modal {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 600px;
    background-color: white;
    z-index: 1001;


    @media (min-width: 600px) {
        left: 50%;
        right: 50%;
        margin-left: -300px;
    }


    &__close {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem;
        background-color: white;
        border: 1px solid $color-border;
        border-radius: $border-radius-s;
        top: -1.2rem;
        right: 1.2rem;
    }

    &__body {
        padding: 2rem;
    }

    &__title {
        font-weight: bold;
        font-size: clamp(1.5rem, 3vw, 2rem);
        margin-bottom: 1rem;
    }

    &__filters {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
        border-top: 1px solid $color-border;

        &:last-child {
            border-bottom: 1px solid $color-border;
        }
    }

    &__label {
        font-size: clamp(1rem, 2vw, 1.2rem);
    }

    &__check {
        width: 1.5rem;

        &:checked {
            accent-color: $color-blue;
        }
    }

    &__buttons {
        background-color: $color-gray;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
    }

    &__button {
        text-transform: uppercase;
        width: 48%;
        padding: .5rem 1rem;
        background-color: white;
        font-weight: bold;
        border: 1px solid $color-border;
        border-radius: $border-radius-s;

        &:disabled {
            opacity: .6;
        }

        &--filter {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $color-blue;
            color: white;
        }

        &--badge {
            font-weight: bold;
            background-color: white;
            padding: 0px 10px;
            border-radius: 10px;
        }
    }
}
</style>