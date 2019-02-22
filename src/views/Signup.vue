<template>
    <div class="login-page">
        <div class="form">
            <logo id="logo"></logo>
            <form class="register-form">
            <input type="text" v-model="name" placeholder="Name"/>
            <input type="email" v-model="email" placeholder="Email Address"/>
            <input type="password" v-model="password" placeholder="Password"/>
            <button class="btn" @click.prevent="SignUp">Sign Up</button>
            <p>Already registered? <router-link to="login">Sign In</router-link></p>
            </form>
            <flash-message></flash-message>
        </div>
    </div>
</template>

<script>
import logo from "@/components/logo.vue";
import firebase from "firebase";

require('vue-flash-message/dist/vue-flash-message.min.css');

export default {
    name: "signup",
    components: {
        logo
    },
    data() {
        return {
            name: '',
            email: '',
            password: ''

        }
    },
    methods: {
        SignUp() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then( user => {
                let createdUser = firebase.auth().currentUser;
                createdUser.updateProfile({
                    displayName: this.name
                }).then(() => {
                    this.$router.replace("/dashboard")
                }).catch( error => {
                    this.flash(error.message, 'error');
                });
            })
            .catch( error => {
                // The creation failed...
                this.flash(error.message, 'error', {
                    //timeout: 2000
                });
            });
        }
    }
}
</script>

<style lang="scss">

</style>
