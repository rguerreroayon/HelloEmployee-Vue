<template>
<div>
  <Navegacion/>

<br>
  <h1 align="center">Beneficios como trabajador</h1>

  <div class="form-group">
        <h2 for="exampleInputEmail1">Username</h2>
        <input
          type="username"
          class="form-control"
          id="inputUsername"
          aria-describedby="userHelp"
          placeholder="Username"
        />
      </div>

      <div class="form-group">
        <br />
        <h2 for="exampleInputCorreo">Correo electrónico</h2>
        <input type="correo" class="form-control" id="exampleInputCorreo" placeholder="Email" />
      </div>

      <br>
      <div class="form-group">
        <h2 for="exampleInputEmail1">ID de trabajador</h2>
        <input
          type="username"
          class="form-control"
          id="inputUsername"
          aria-describedby="userHelp"
          placeholder="id"
        />
      </div>

      <div class="form-group">
    <label for="exampleFormControlTextarea1">Beneficios del empleado</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="7">AQUI SALDRÁN TUS BENEFICIOS</textarea>
  </div>

  </div>
</template>


<script>
import Navegacion from '../components/Navegacion.vue'


export default {
  components:{
    Navegacion
  }
}
</script>

<style>

</style>