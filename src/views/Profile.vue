<template>
  <div>
    <Navegacion />
    <form>
      <br />
      <h1 align="center">Datos del usuario</h1>
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

        <div class="form-group">
          <br />
          <h2 for="exampleInputEmail1">Contraseña</h2>
          <input
            type="email"
            class="form-control"
            id="exampleInputContrasenia"
            aria-describedby="constrasenialHelp"
            placeholder="Contraseña cliente"
          />
          <br />
          <small
            id="emailHelp"
            class="form-text text-muted"
          >Nota: Tus datos estan 100% con nosotros :)</small>
        </div>
      </div>

      <div class="form-group">
        <br>
        <h2 for="exampleInputEmail1">Nombre del usuario</h2>
        <input
          type="username"
          class="form-control"
          id="inputUsername"
          aria-describedby="userHelp"
          placeholder="Nombre de usuario"
        />
      </div>

      <div class="form-group">
          <br>
        <h2 for="exampleInputEmail1">Apellidos del usuario</h2>
        <input
          type="address"
          class="form-control"
          id="inputAdress"
          aria-describedby="userHelp"
          placeholder="Domicilio del usuario"
        />
      </div>

      <div class="form-group">
          <br>
        <h2 for="exampleInputEmail1">Fecha de nacimiento</h2>
        <input
          type="address"
          class="form-control"
          id="inputAdress"
          aria-describedby="userHelp"
          placeholder="DD/MM/AAAA"
        />
      </div>

      <div class="form-group">
          <br>
        <h2 for="exampleInputEmail1">CURP</h2>
        <input
          type="address"
          class="form-control"
          id="inputAdress"
          aria-describedby="userHelp"
          placeholder="CURP del usuario"
        />
      </div>

        <div class="form-group">
          <br>
        <h2 for="exampleInputEmail1">Direccion</h2>
        <input
          type="address"
          class="form-control"
          id="inputAdress"
          aria-describedby="userHelp"
          placeholder="Domicilio del usuario"
        />
      </div>

      <div class="form-group">
          <br>
        <h2 for="exampleInputEmail1">Colonia</h2>
        <input
          type="address"
          class="form-control"
          id="inputAdress"
          aria-describedby="userHelp"
          placeholder="Colonia del usuario"
        />
      </div>




      <div class="form-group">
          <br>
        <h2 for="exampleInputEmail1">Departamento del usuario</h2>
        <input
          type="address"
          class="form-control"
          id="inputAdress"
          aria-describedby="userHelp"
          placeholder="Area del usuario"
        />
      </div>

  <br>
      <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1"> Mostrar mis beneficios</label>
  </div>
      
      <br>
      <button type="submit" class="v-btn">Ok!</button>
    </form>
  </div>
</template>

<script>
import Navegacion from "../components/Navegacion.vue";

export default {
  components: {
    Navegacion
  }
};
</script>

<style>
</style>