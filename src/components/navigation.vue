<template>
    <ul id="navbar">
        <router-link tag="li" to="/"><a href="#"><font-awesome-icon icon="chart-pie" class="icon" />Dashboard</a></router-link>
        <router-link tag="li" to="/schedule"><a href="#"><font-awesome-icon icon="calendar-times" class="icon" />Schedule</a></router-link>
        <router-link tag="li" to="/settings"><a href="#"><font-awesome-icon icon="cogs" class="icon" />Settings</a></router-link>
    </ul>
</template>

<script>
export default {
    name: "navMenu"
}
</script>

<style lang="scss">

    #navbar {
        list-style-type: none;
        margin: 0;
        padding: 2em 0 0 1em;

        li {
            padding: 0.7em 0;
        }

        a {
            text-transform: uppercase;
        }

        
    }
    
</style>