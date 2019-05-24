<template>
  <div class="ranking">
    <router-link to="/" class="back-button">&#60; VOLVER AL INICIO</router-link>
    <div class="title">
      <h1>Ranking</h1>
    </div>
    <div class="finder">
      BUSCAR POR no DE CÉDULA
      <input type="text" v-model="query" @change="finder">
    </div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <td>
              No.
            </td>
            <td>
              Nombre
            </td>
            <td>
              No. de Cédula
            </td>
            <td>
              Puntuación
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(x, idx) in ranking" :key="idx">
            <td>
              {{idx + 1}}
            </td>
            <td>
              {{x.name}}
            </td>
            <td>
              {{x.document_number}}
            </td>
            <td>
              {{x.score}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    ranking: [],
    query: ''
  }),
  mounted() {
    axios.get(`${this.api}games`)
    .then((res) => {
      this.ranking = res.data;
    })
  },
  methods: {
    finder() {
      if (this.query.length > 0) {
        axios.get(`${this.api}games?wildcard=${this.query}`)
        .then((res) => {
          this.ranking = res.data;
        })
      }
    }
  }
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
      font-size: 4rem;
      border-bottom: solid 8px #a70d19;
      display: inline-block;
    }
  }
  .finder {
    text-align: center;
    input {
      background-color: #F2F2F2;
      border: none;
      padding: 10px 20px;
    }
  }
  .table {
    width: 100%;
    margin-top: 50px;
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

