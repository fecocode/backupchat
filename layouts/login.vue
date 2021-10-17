<template>
  <v-app>
    <v-container class="container">
      <Nuxt />
    </v-container>
  </v-app>
</template>

<script>
import auth from "@/services/modules/auth.service"

export default {
  name:'LoginLayout',
  created() {
    if(auth.getSession()) {
      this.$router.push({
        name: 'index'
      })
    }    
  }
}
</script>

<style lang="scss" scoped>
    .container{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
