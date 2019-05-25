<template>
<div class="signup">
    <h1 class="title">¡FELICITACIONES!</h1>
    <p style="text-transform: uppercase; font-family: serif">
        Ahora Eres Un
    </p>
    <h2 class="header">MINI <span>{{parseInt($route.params.score) >= 14000 ? 'GENIUS' : 'CELEBRITY'}}</span></h2>
    <p class="descriptions" style="font-family: serif">
        Haz logrado la mayor puntuación posible en MINI <span>{{parseInt($route.params.score) >= 14000 ? 'GENIUS' : 'CELEBRITY'}}</span>. <br>
        Eres un experto MINI
    </p>
    <div class="home-init">
    <router-link class="link" to="/">INICIO</router-link>
    <router-link class="link" to="/ranking">RANKING</router-link>
    </div>
    <img class="img-logo" src="../assets/logoblanco.svg">
</div>
</template>
<style lang="scss" scoped>
.home-init {
    .link {
        background-color: white;
        border: none;
        margin: 10px 20px;
        padding-left: 15px!important;
        padding-right: 15px!important;;
    }
}
.descriptions {
    margin-top: 50px;
}
.signup {
        position: relative;
        width: 100vw;
        height: 100vh;
        background-color: black;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
    }
    .title {
        font-size: 4rem;
        border-bottom: solid 8px #a70d19;
        padding: 20px;
        margin-bottom: 30px;
        font-family: serif;
        font-weight: bold;
    }

    h1, h2 {
        margin: 0;
        text-transform: uppercase;
    }

    .header {
        font-size: 3rem;
        font-family: serif;
        font-weight: bold;
    }
    .img-logo {
        width: 150px;
        margin-top: 50px;
    }
</style>
