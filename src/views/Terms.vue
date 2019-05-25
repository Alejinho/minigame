<template>
  <div class="ranking">
    <router-link to="/" class="back-button">&#60; VOLVER AL INICIO</router-link>
    <div class="title">
      <h1 style="color: #000;font-family: serif; font-weight: bold">POLÍTICAS DE PRIVACIDAD, TÉRMINOS Y
        CONDICIONES.</h1>
    </div>
    <div>
      <p style="color: #000; width: 80%; margin: 20px auto 0 auto; font-family: MINISerif-Regular">
        Cada participante del evento puede participar solamente (1) vez en el MINI Genius. La participación en la
        actividad NO implica que será el ganador de un premio. Los premios solamente podrán ser reclamados
        presencialmente en el MINI UNITED 2019, a realizarse en el Hotel Las Camelias del 24 al 26 de mayo del 2019. Los
        premios no son canjeables por dinero en efectivo ni por descuentos en las compras de vehículos. Los premios son
        personales y no transferibles, la persona ganadora del premio deberá presentar un documento de identificación
        vigente para poder reclamar el premio. Se recopilarán y tratarán datos de acuerdo a la ley vigente y podrán ser
        utilizados por Autogermana para sus campañas de marketing. Aplican condiciones y restricciones. Premios
        limitados.
      </p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
  }
</script>


<style lang="scss" scoped>
  .ranking {
    padding: 30px;
  }

  .back-button {
    text-decoration: none;
    color: black;
  }

  .title {
    text-align: center;
    text-transform: uppercase;

    h1 {
      margin-top: 0;
      font-size: 2rem;
      margin-top: 40px;
      border-bottom: solid 8px #a70d19;
      display: inline-block;
    }
  }

  .finder {
    text-align: center;
    color: #000;

    input {
      background-color: #F2F2F2;
      border: none;
      padding: 10px 20px;
    }
  }

  .table {
    width: 100%;
    margin-top: 50px;
    color: #000;

    table {
      width: 100%;
      border-collapse: collapse;

      thead {
        td {
          background-color: black;
          color: white;
          padding: 5px 10px;
        }
      }

      tbody {
        tr:nth-child(even) {
          background-color: #F2F2F2;
        }

        td {
          padding: 10px 20px;
        }
      }
    }
  }
</style>

