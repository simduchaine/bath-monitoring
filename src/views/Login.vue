<template>
    <div class="login-page">
        <div class="form">
            <logo id="logo"></logo>
            <form class="login-form">
            <input type="email" v-model="email" placeholder="Email"/>
            <input type="password" v-model="password" placeholder="Password"/>
            <button class="btn" @click.prevent="login">login</button>
            <p>Not registered? <router-link to="/sign-up">Create an account</router-link></p>
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
    name: "login",
    components: {
        logo
    },
    data() {
        return {
            email: '',
            password: ''

        }
    },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then( user => {
                this.$router.replace("/dashboard");
            })
            .catch(error => {
                // The creation failed...
                this.flash(error.message, 'error', {
                    //timeout: 2000
                });
            })
        }
    }
}
</script>

<style lang="scss">

.login-page {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
}

form {
    max-width: 450px;
}

.form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    #logo {
        margin: 0 auto;
        display: inline-flex;
    }

    input {
        outline: 0;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        background: $white;
        color: $darkPurple;
    }

    .btn {
        text-transform: uppercase;
        outline: 0;
        width: 100%;
        border: 0;
        padding: 15px;
        cursor: pointer;
    }
}

</style>
