<template>
    <div class="signup">
        <modal theme="alert" v-if="alert" :close="closer">
            <p class="alert-title">Ya has participado!</p>
        </modal>
        <h1 class="title">REGISTRO</h1>
        <h2 class="subtitle">Ingresa los datos a continuación y participa para ser el próximo</h2>
        <h2 class="header">MINI GENIUS</h2>
        <div class="form">
            <div class="input-group">
                <label for="name">Nombres y apellidos</label>
                <input type="text" v-model="name"
                id="name" placeholder="Ingresa tu nombre completo.">
            </div>
            <div class="input-group">
                <label for="cc">Cédula de ciudadanía</label>
                <input type="text" v-model="document_number"
                id="cc" placeholder="Ingresa tu número de documento.">
            </div>
        </div>
        <button class="link" type="button" @click="play">
            PLAY
        </button>
        <img class="img-logo" src="../assets/logoblanco.svg">
    </div>
</template>

<script>
import axios from 'axios'
import modal from '../components/modal'
export default {
    components: {modal},
    data: () => ({
        name: '',
        document_number: '',
        alert: false
    }),
    methods: {
        play() {
            if(this.name && this.document_number) {
                axios.post(`${this.api}customers`, {
                    name: this.name,
                    document_number: this.document_number
                }).then((res) => {
                    let user = JSON.stringify(res.data);
                    window.localStorage.setItem('user', res.data);
                    
                    axios.post(`${this.api}games`, {
                        customer_id: res.data.id
                    }).then((game) => {
                        this.$router.push({ name: 'question', params: { id: game.data.id, q: 1 } })
                    })

                }).catch(() => {
                    this.alert = true
                });
            }
        },
        closer() {
            this.alert = false;
        }
    }
}
</script>


<style lang="scss" scoped>
    .alert-title {
        font-size: 3rem;
        color: black;
        border-bottom: solid 8px #a70d19;
        display: inline-block;
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

    .input-group {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        label {
            padding: 5px 0;
        }
        input {
            padding: 5px 30px;
        }
    }

    .form {
        margin: 20px 0;
    }

    .title {
        font-size: 4rem;
        border-bottom: solid 8px #a70d19;
        padding: 20px;
        margin-bottom: 30px;
    }

    h1, h2 {
        margin: 0;
        text-transform: uppercase;
    }

    .header {
        font-size: 3rem
    }

    .link {
        color: white;
        margin-right: 0;
        background-color: transparent;
        border: none;
        border-bottom: solid 8px #a70d19;
        cursor: pointer;
    }

    .img-logo {
        width: 150px;
        margin-top: 50px;
    }

</style>

