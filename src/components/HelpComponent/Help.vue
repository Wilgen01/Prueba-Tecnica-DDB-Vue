<template>
    <section class="help">
        <h2 class="help__title">¿Podemos ayudarle?</h2>
        <div class="help__actions">
            <div class="help__actions-chat">
                <div class="help__actions-icon">
                    <img src="../../assets/icons/intercom.svg" alt="intercom-icon">
                </div>
                <h3 class="help__actions-name">chat</h3>
            </div>
            <div class="help__actions-call">
                <div class="help__actions-icon">
                    <img src="../../assets/icons/phone.svg" alt="phone-icon">
                </div>
                <h3 class="help__actions-name">llamar</h3>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import '../../assets/utils/variables';

.help{
    background-color: $color-black-bg;
    padding: 3rem 0;

    &__title{
        font-weight: bold;
        font-size: clamp(1.2rem, 3vw, 2rem);
        text-align: center;
        color: white;
        margin-bottom: 1.5rem;
    }
    
    &__actions{
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    &-icon{
        background-color: white;
        margin-bottom: 1.5rem;
        border-radius: 100%;
        width: 75px;
        height: 75px;
        display: flex;
        justify-content: center;

        @media (min-width: 769px) {
            width: 90px;
            height: 90px;
        }

        img{
            width: 35%;
        }
    }

    &-name{
        color: white;
        text-align: center;
        font-weight: 600;
    }
    }
}</style>