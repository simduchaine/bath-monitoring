<template>
    <div id="header">
        <font-awesome-icon icon="bell" class="icon" id="bell" />
        <avatar :fullname="userName" size="34" color="#727180"></avatar>
        <h3>Hello <span class="username">{{ userName }}</span></h3><font-awesome-icon icon="chevron-down" class="icon" id="chevron"/>
    </div>
</template>

<script>
import firebase from "firebase";
import Avatar from "vue-avatar-component"

export default {
    name: "headerBar",
    components: { Avatar },
    data() {
        return {
            userName: ''
        }
    },
    created() {
        let currentUser = firebase.auth().currentUser;
        if (currentUser != null) {
            this.userName = currentUser.displayName;
        }
    }
}
</script>

<style lang="scss">

    #header {
        
        grid-area: header;
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        align-items: center;
        

        h3 {
            font-family: $heading;
            font-size: 22px;
            font-weight: normal;
            letter-spacing: 0.5px;
            cursor: pointer;
        }

        .avatar {
            margin-right: 0.5em;
            border: #8864CE 2px solid;
        }

        .username {
            color: $white;
        }

        #bell {
            padding-right: 0.8em;
            font-size: 20px;
            color: $white;
        }

        #chevron {
            padding-right: 2em;
            padding-left: 0.5em;
            cursor: pointer;
        }
    }
    
</style>