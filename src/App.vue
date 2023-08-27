<script setup lang="ts">
    import Navbar from './components/NavbarComponent/Navbar.vue'
    import Help from './components/HelpComponent/Help.vue'
    import Footer from './components/FooterComponent/Footer.vue'
    import Home from './views/Home/Home.vue'
</script>

<template>
    <Navbar />
    <Home />
    <Help />
    <Footer />
</template>

<style lang="scss">
@import 'assets/utils/variables';
</style>
