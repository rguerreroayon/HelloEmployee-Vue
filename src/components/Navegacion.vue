<template>
  <div>
     <v-toolbar >

    
    <v-toolbar-side-icon>  
    <v-img class="mr-3" src="@/assets/logo.png" height="20px" width="70px"> </v-img>
    </v-toolbar-side-icon>  
    <v-toolbar-title>Hello Employee!</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        
        <v-btn text to="/home">Home</v-btn>
        <v-btn text to="/profile">Mi Perfil</v-btn>
        <v-btn text to="/beneficios">Mis beneficios</v-btn>
        <v-btn text to="/check">Check In & Out</v-btn>
        <v-btn text to="/reportes">Reportes</v-btn>
        <v-btn text to="/adminoffice">Admin Office</v-btn>

      </v-toolbar-items>

     
    </v-toolbar>
  </div>


</template>

<script>
export default {

}
</script>

<style>

</style>