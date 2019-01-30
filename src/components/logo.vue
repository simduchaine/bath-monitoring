<template>
    <div id="logo">
        <img src="../assets/fridge.svg" width="80px" alt="">
        <h1 class="logoText">Fridge <br> Buddy</h1>
    </div>
</template>

<script>
export default {
    name: "logo"
    
}
</script>

<style scoped lang="scss">

#logo {
    display: flex;
    flex-direction: row;
    align-items: center;

    h1 {
        line-height: 35px;
    }
}
    
</style>