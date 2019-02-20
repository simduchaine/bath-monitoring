<template>
    <div id="nav">
        <router-link to="/"><logo></logo></router-link>
        <nav-menu></nav-menu>
        <status></status>
        <div id="logout" @click="logout"><font-awesome-icon icon="power-off" class="icon" /> LOG OUT</div>
    </div>
</template>

<script>
import logo from "@/components/logo.vue";
import navMenu from "@/components/navigation.vue";
import status from "@/components/status.vue";
import firebase from "firebase";

export default {
    name: "sidebar",
    components: {
        logo,
        navMenu,
        status
    },
    methods: {
        logout() {
            firebase.auth().signOut().then(() => {
                this.$router.replace("/login");
            })
        }
    }

    
}
</script>

<style lang="scss">

    #nav {
        grid-area: sidebar;
        margin: 1em 0 0 3em;
        display: flex;
        flex-direction: column;

        #logout {
            position: absolute;
            bottom: 10%;
            padding: 0 2em;
            cursor: pointer;

            .icon {
                padding-right: 0.5em;
            }

            &:hover {
                color: $white;
            }
        }
    }
    
</style>