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

</style>
