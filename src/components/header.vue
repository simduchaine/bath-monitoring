<template>
    <div id="header">
        <font-awesome-icon icon="bell" class="icon" id="bell" />
        <avatar :fullname="userName" :size=34 color="#727180"></avatar>
        <div @click="showDropDown=!showDropDown">
            <h3>Hello <span class="username">{{ userName }}</span><font-awesome-icon icon="chevron-down" class="icon" id="chevron"/></h3>
            <transition name="slide-fade">
                <div v-if="showDropDown" id="dropdown">
                    <ul>
                        <router-link tag="li" to="/account"><a>Account Settings</a></router-link>
                        <router-link tag="li" to="/account"><a>Profile</a></router-link>
                    </ul>
                </div>
            </transition>
        </div>
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
            userName: '',
            showDropDown: false
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

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease;
}
.slide-fade-enter { 
  transform: translateY(-50px);
  opacity: 0;
}
.slide-fade-leave-to {
 transform: translateY(-50px);
  opacity: 0; 
}

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
        font-size: small;
    }

    #dropdown {
        position: absolute;
        z-index: 99;
        background: white;
        padding: 1em;

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0 2em
        }

        li {
            padding: 0.5em 0;
        }
    }
}
    
</style>