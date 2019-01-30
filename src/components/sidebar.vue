<template>
    <div id="nav">
        <router-link to="/"><logo></logo></router-link>
        <nav-menu></nav-menu>
    </div>
</template>

<script>
import logo from "@/components/logo.vue";
import navMenu from "@/components/navigation.vue";

export default {
    name: "sidebar",
    components: {
        logo,
        navMenu
    }

    
}
</script>

<style lang="scss">

    #nav {
        grid-area: sidebar;
        margin: 1em 0 0 3em;
    }
    
</style>