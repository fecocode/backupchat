<template>
  <v-app>
    <v-container class="container">
      <Nuxt />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name:'LoginLayout',
}
</script>

<style lang="scss">
    .container{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
