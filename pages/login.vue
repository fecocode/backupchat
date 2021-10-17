<template>
  <div class="login">
      <v-alert v-show="error" type="error" text>Falló el login</v-alert>
      <h1 class="mb-10">Backupchat</h1>
      <v-text-field v-model="user" label="Usuario" type="email" outlined class="login__field" color="primary" />
      <v-text-field v-model="password" label="Contraseña" type="password" outlined class="login__field" color="primary" />
      <v-btn block color="primary" @click="login">Ingresar</v-btn>
      <nuxt-link class="mt-5" :to="{ name:'signup'}">Registrate</nuxt-link>
  </div>
</template>

<script>
import auth from "@/services/modules/auth.service"
export default {
    name: 'LoginPage',
    layout: 'login',
    data(){
        return {
            user:'',
            password:'',
            error: false,
        }
    },
    methods: {
        async login(){
            try{
                const userData = await auth.login(this.user, this.password)
                this.$router.push({ name: 'index' })
                console.log(userData)
            }
            catch(error){
                this.error= true
                console.error(error)
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:90%;
        &__field{
            width:100%;
        }
    }
</style>