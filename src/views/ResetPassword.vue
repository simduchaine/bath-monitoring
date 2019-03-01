<template>
    <div class="login-page">
        <div class="form">
            <logo id="logo"></logo>
            <form class="register-form">
            <input type="email" v-model="email" placeholder="Email Address"/>
            <button class="btn" @click.prevent="resetPassword">Reset Password</button>
            <p><router-link to="login">Back to Log In</router-link></p>
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
    name: "ResetPassword",
    components: {
        logo
    },
    data() {
        return {
            password: ''

        }
    },
    methods: {
        resetPassword() {
            firebase.auth().sendPasswordResetEmail(this.email)
            .then( () => {
                this.flash('Password Reset Email Sent!', 'success')
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
