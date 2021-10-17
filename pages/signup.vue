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
import auth from "@/services/modules/auth.service"
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
        async signup(){
            if (this.repeatPassword === this.password){
                try{
                    const userData = await auth.signup(this.user, this.password)
                    console.log(userData);
                }
                catch(error){
                    console.log(error);
                }
            }
            else{
                alert("Contraseñas desiguales");
            }
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