<template>
<html>
  <head>
    <title>CheckIn & Checkout</title>

 </head>

  <div>
    <Navegacion />

       <div id = "intro" style = "text-align:center;">
         <h1>{{ timestamp }}</h1>
      </div>

    <br />
    <h1 align="center">Seleccione la opción que usted desee:</h1>
    <div class="container">
      <div class="col-lg-4">
        <h2>Realizar check-in</h2>
        <button class="v-btn" onclick="myFunction()">Check-IN</button>
      </div>
      <div class="col-lg-4">
        <h2>Realizar check-out</h2>
        <button class="v-btn" onclick="myFunction()">Check-OUT</button>
      </div>
    </div>
  </div>
</html>
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