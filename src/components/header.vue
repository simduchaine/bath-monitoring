<template>
    <div id="header">
        <h3>Hello Maxence</h3>
    </div>
</template>

<script>
export default {
    name: "headerBar"
}
</script>

<style lang="scss">

    #header {
        grid-area: header;
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        align-items: center;
    }
    
</style>