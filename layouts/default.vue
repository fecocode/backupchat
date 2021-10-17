<template>
  <v-app>
    <v-app-bar class="navigation">
      <span>Backupchat</span>
      <v-spacer />
      <v-btn color="error" @click="logout">Salir</v-btn>
    </v-app-bar>
    <v-container>
      <Nuxt />
    </v-container>
  </v-app>
</template>

<script>
import auth from '@/services/modules/auth.service'

export default {
  name: 'DefaultLayout',
  created() {
    // if(!auth.getSession()) {
    //   this.$router.push({
    //     name: 'login'
    //   })
    // }    
  },
  methods: {
    logout() {
      auth.logout()
      this.$router.push({ name: 'login' })
    },
  },
}
</script>

<style lang="scss" scoped>
  .navigation {
    max-height: 200px;
  }
  .container{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
