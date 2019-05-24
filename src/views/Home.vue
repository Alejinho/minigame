<template>
  <div class="home">
    <img class="hero-img" src="../assets/bg.png">
    <div class="home-main">
      <div class="home-header">
        <div>
          <h1>MINI GENIUS</h1>
          <h2>THE NEW GAME TO WIN WITH MINI.</h2>
        </div>
        <div class="logo">
          <img src="../assets/logomini.svg" alt="">
        </div>
      </div>
      <div class="home-init">
        <router-link class="link" to="/sign-up">PLAY</router-link>
        <router-link class="link" to="/ranking">RANKING</router-link>
      </div>
      <div class="home-terms">
        <a href="#">POLÍTICAS DE PRIVACIDAD, TÉRMINOS Y CONDICIONES.</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100vh;
  &-terms {
    text-align: left;
    a {
      color: #808080;
    }
  }
  &-init {
    margin: 20px 0;
    a {
      width: 220px;
      display: inline-block;
      text-align: center;
      font-size: 3rem;
      text-decoration: none;
      color: black;
      border-bottom: solid 8px #a70d19;
      margin-right: 20px; 
    }
  }
}
.hero-img {
  position: relative;
  width: 100%;
  height: 75%;
  object-fit: cover;
  z-index: 1;
}
.home-main {
  width: 70%;
  margin: auto;
  background-color: white;
  position: absolute;
  left: 15%;
  bottom: 0;
  z-index: 2;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30%;
  .home-header {
    display: grid;
    grid-template-columns: 85% 15%;
    .logo {
      text-align: right;
    }
  }
  h1, h2 {
    margin: 0;
    text-align: left;
  }
  h1 {
    font-family: 'MINISerif-Black';
    font-size: 4rem;
  }
}
</style>

