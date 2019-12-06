<template>
  <div>
    <Navegacion />

    <br />
    <h1 align="center">¡Bienvenido usuario!</h1>
    <h2 align="center">
      Por favor, escoja la opción que desee en la barra de navegación.
    </h2>
    <br />
    <br />
    <div class="w3-container w3-blue">
      <h3>¿Desea checar sus datos?</h3>
      <p>
        En este apartado usted podrá ver sus datos personales, junto con su
        nombre de usuario y contraseña. Haga click
        <a href="/Profile">aqui</a> para ver.
      </p>
      <br />

      <h3>¿Desea checar sus beneficios como trabajador?</h3>
      <p>
        En este apartado usted podrá ver sus beneficios que ha adquirido como
        trabajador de nuestra empresa. Haga click
        <a href="/Beneficios">aqui</a> para ver.
      </p>
      <br />

      <h3>¿Desea registrar su entrada o salida?</h3>
      <p>
        En este apartado usted puede realizar su check-in o check-out. Haga
        click
        <a href="/Check">aqui</a> para realizar.
      </p>
      <br />

      <h3>¿Desea generar un reporte sobre algun trabajador?</h3>
      <p>
        En este apartado usted puede realizar reportes sobre cualquier
        trabajador en base a sus estadísticas. Haga click
        <a href="/Reportes">aqui</a> para ver.
      </p>
      <br>

      <h3>¿Desea entrar como administrador?</h3>
      <p>
        Para entrar como administrador es necesario que tenga una cuenta de
        super usuario. Haga click
        <a href="/AdminOffice">aqui</a> para logear.
      </p>
      <br />
    </div>
    <br />
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

<style></style>