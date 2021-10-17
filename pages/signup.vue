<template>
  <div class="signup">
      <h1 class="mb-10">Backupchat</h1>
      <v-text-field v-model="user" label="Usuario" type="email" outlined class="signup__field" color="primary" />
      <v-text-field v-model="password" label="Contraseña" type="password" outlined class="signup__field" color="primary" />
      <v-text-field v-model="repeatPassword" label="Repetir Contraseña" type="password" outlined class="signup__field" color="primary" />
      <v-btn block color="primary" @click="signup">Registrarse</v-btn>
  </div>
</template>

<script>
export default {
    name:'Signup',
    data(){
        return{
            user:'',            
            password:'',
            repeatPassword:'',
        }
    },
    methods:{
        signup(){
            console.log(`usuario: ${this.user} password: ${this.password} repeatPassword: ${this.repeatPassword}`);
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .signup{
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