<template>
  
  <div>
    <Navegacion />
    <br />
    <h1 align="center">Reportes</h1>
    <h2 align="center">¿Que accion desea realizar?</h2>
    <br />
    <br />
    <div class="w3-container w3-blue">
      <h3>Generar reporte</h3>
      <p>
        Haga click para generar el reporte
        <a href="/Reportes">aqui</a> para ver.
      </p>
      <br />

      <h3>Ver reportes</h3>
      <p>
        Aqui podra ver los resportes antiguos que ha generado
        <a href="/Reportes">aqui</a> para ver.
      </p>
      <br />
    </div>
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