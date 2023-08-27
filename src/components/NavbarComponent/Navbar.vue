<template>
    <header class="header">
        <div class="header__container">
            <div class="header__left-icons">
                <img class="header__icon header__icon--menu" src="../../assets/navbar/icons/menu.svg" alt="icono-menu" width="25"
                    height="25">
                <img class="header__icon" src="../../assets/navbar/icons/logo.svg" alt="icono-logo" width="40" height="40">
            </div>
            <div class="header__right-icons">
                <img class="header__icon" src="../../assets/navbar/icons/search.svg" alt="icono-search" width="25" height="25">
                <div class="header__icon--cart">
                    <img class="header__icon " src="../../assets/navbar/icons/cart.svg" alt="icono-cart" width="25" height="25">
                    <span class="header__cart-badge">3</span>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@import '../../assets/utils/variables';

.header {
    background-color: $color-black-bg;
    width: 100%;
    max-height: 100px;
    padding: 1rem;

    @media (min-width: 769px) {
        padding: 1rem 0;
    }

    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (min-width: 769px) {
            max-width: 75%;
            margin: auto;
        }
    }


    &__left-icons,
    &__right-icons {
        display: flex;
        align-items: center;

        .header__icon {
            margin: 0 .5rem;
            cursor: pointer;
        }

        .header__icon--cart {
            position: relative;
            margin-top: 6px;
        }

        .header__cart-badge {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: $color-blue;
            color: white;
            border-radius: 50%;
            padding: 2px 6px;
            font-size: 12px;
        }
    }

}
</style>