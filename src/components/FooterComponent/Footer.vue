<template>
    <footer class="footer">
    <ul class="footer__list">
        <li class="footer__list-item">SOBRE NOSOTROS</li>
        <li class="footer__list-item">MEDIDAS DE SEGURIDAD (COVID-19)</li>
        <li class="footer__list-item">CÓMO MERCAR</li>
        <li class="footer__list-item">PROVEEDORES</li>
        <li class="footer__list-item">CONTÁCTENOS</li>
        <li class="footer__list-item">ZONA DE COBERTURA</li>
    </ul>
    <div class="footer__social">
        <div class="footer__social-icon">
            <img src="../../assets/icons/instagram.svg" alt="instagram-icon">
        </div>
        <h3>POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES</h3>
    </div>

</footer>

<div class="footer__copy">
    <h4>&copy; 2020 Axiacore</h4>
</div>
</template>

<style lang="scss">
@import '../../assets/utils/variables';
.footer{
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    
    @media (min-width: 1024px) {
        width: 75%;
        margin: auto;
        flex-direction: row;
        justify-content: center;
    }

    &__list{
        text-align: center;
        list-style: none;

        @media (min-width: 1024px) {
            min-width: 50%;

        }

        &-item{
            font-weight: bold;
            font-size: 1rem;
            margin-bottom: 1rem;
        }
    }

    &__social{
        text-align: center;
        margin: 3rem 0 0;
        padding-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;

        @media (min-width: 1024px) {
            margin: 0;
            padding: 0;
            min-width: 50%;
            justify-content: flex-start;
        }

        &-icon{
            background-color: $color-blue;
            border-radius: 100%;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;

            img{
                width: 60%;
            }
        }

        h3{
            font-size: 1rem;
            font-weight: bold;
            margin: 1rem 0;
        }

        &::after{
            content: " ";
            position: absolute;
            width: 10%;
            height: 2px;
            background-color: $color-border-dark;
            top: 0;
        }

        @media (min-width: 1024px) {
            &::after{
                content: " ";
                position: absolute;
                width: 2px;
                height: 100%;
                background-color: $color-border-dark;
                left: 0;
            }
        }
    }

    &__copy{
        background-color: $color-black-bg;
        text-align: center;
        padding: 1rem 0;

        h4{
            font-weight: bold;
            color: white;
        }
    }
    
}
</style>
