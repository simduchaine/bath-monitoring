<template>
  <div id="app">
    <router-view name="header"/>
    <router-view name="sidebar"/>
    <router-view/>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar.vue";
import headerBar from "@/components/header.vue";

export default {
  components: {
    sidebar,
    headerBar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Chivo|Passion+One');

%active-hover-color {
    color: $white;
}

body {
  background: linear-gradient(125.42deg, #9095AD 0%, #595D6E 100%); 
  height: 98vh; 
  display: flex; 
  flex-direction: column; 
  justify-content: center;
}

#app {
  font-family: $font;
  font-size: 15px;
  color: $purpleGray;
  background: linear-gradient(124.19deg, #535468 0%, #292935 100%);
  box-shadow: 60px 60px 130px rgba(71, 71, 89, 0.8);
  border-radius: 15px;
  width: 80%;
  height: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 25% auto;
  grid-template-rows: 10% auto;
  grid-template-areas: 
    "header header"
    "sidebar main";
}

h1 {
  font-family: $heading;
  color: $white;
  font-size: 38px;
  letter-spacing: 1px;
  font-weight: normal;
  
}

a {
  text-decoration: none;
}

.router-link-exact-active {
    a {
        @extend %active-hover-color;
    }
}

a {
  color: $purpleGray;

  .icon {
      padding-right: 0.5em;
  }

  &:hover {
      @extend %active-hover-color;
  }
}

button {
  //color: $purpleGray;
  //background-color: $darkPurple;
  padding: 0.8em 1.2em;
  text-transform: uppercase;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
}

/* Media Queries */
/* Small screens - MOBILE */

@media only screen and (max-width: 40em) {

  body {
    height: auto;
  }

  .login-page {
    height: 97vh;
  }
  
  #app {
    width: 98%;
    height: 98%;
    grid-template-areas: 
      "header" 
      "sidebar" 
      "main";
    grid-template-columns: none;
    grid-template-rows: none;
    font-size: smaller;
  }

  .form {
    width: 75%;
  }

  #header {
    h3 {
      display: none;
    }
  }

  #nav {
    margin: 0.5em 0 2em 0.5em;

    a {
      margin: 0 auto;
    }

    #navbar {
      padding-top: 0;
    }

    #logout {
      position: absolute;
      top: 25px;
      height: 20px;
    }

    .status, #logout {
      bottom: 0;
      padding: 0.6em 1.2em;
    }

    .status {
      position: relative;
      order: -1;
    }

  }

  #dashboard {
    display: block !important;
    width: 100% !important;
    padding: 0 !important;
  }

  .cardTitle {
    padding-bottom: 1em !important;
    display: block;
  }

  .chart {
    width: 85vw !important;
    height: 50vh !important;
    padding: 0 !important;
  }

  .card {
    display: block !important;
    margin: 0.5em;
  }

  .circle-slider {
    margin: 0 auto;
    position: relative !important;
    transform: none !important;
    top: 0 !important;
    left: 0 !important;

  }

  .setPoint {
    button {
      margin-bottom: 1em;
    }
  }


}

</style>
