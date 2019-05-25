<template>
    <div class="question modal-content" :class="{reverse}" :key="$route.params.q">
        <modal v-if="validate" theme="alert">
            <div class="alert">
                <h2>La respuesta seleccionada fue:</h2>
                <h1>{{answer.value}}</h1>
                <h2>¿Última palabra?</h2>
                <div class="actions">
                    <button type="button" class="link" @click="showanswer">SI</button>
                    <button type="button" class="link" @click="closeValid">NO</button>
                </div>
            </div>
        </modal>
        <modal v-if="resolve">
            <div class="resolve">
                <p class="title title-result">{{response.content.title}}</p>
                <p class="content-result">{{response.content.message}}</p>
                <div class="actions">
                    <router-link class="link" v-if="!response.was_correct"
                    to="/ranking">
                    Continuar
                    </router-link>
                    <router-link class="link" v-if="!response.has_reached_the_end && response.was_correct"
                    :to="`/question/${$route.params.id}/${parseInt($route.params.q) + 1}`">
                    Continuar
                    </router-link>
                    <router-link class="link" v-if="response.has_reached_the_end && response.was_correct"
                    :to="`/finish/${question.score}`">
                    Continuar
                    </router-link>
                </div>
            </div>
        </modal>
        <div class="image">
            <img :src="question.url_image">
        </div>
        <div class="main">
            <div class="form">
                <h1 class="title">{{question.title}}</h1>
                <h2 class="subtitle">{{question.value}}</h2>
                <div class="questions">
                    <ul>
                        <li class="link" @click="() => validater(x)"
                        v-for="(x, idx) in question.answers" :key="idx">
                            {{x.value}}
                        </li>
                    </ul>
                </div>
                <div class="score">
                    <p>PUNTUACIÓN | {{question.score}}</p>
                </div>
                <div class="logo">
                    <img src="../assets/logomini.svg" alt="">
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios'
import modal from '../components/modal'
export default {
    components: {modal},
    data: () => ({
        reverse: false,
        question: {},
        answer: {},
        validate: false,
        resolve: false,
        response: {}
    }),
    created() {
        let y =Math.random();
        this.reverse = y > 0.5;

        axios.get(`${this.api}games/${this.$route.params.id}/questions`)
        .then((res) => {
            this.question = res.data;
        })
    },
    methods: {
        validater(args) {
            this.answer = args;
            this.validate = true;
        },
        closeValid() {
         this.validate = false;
        },
        showanswer() {
            this.validate = false;
            axios.post(`${this.api}games/${this.$route.params.id}/replies`, {
                answer_id: this.answer.id
            }).then((res) => {
                this.resolve = true;
                this.response = res.data;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .question {
        display: flex;
        width: 100vw;
        height: 100vh;
        &.reverse {
            flex-direction: row-reverse;
        }
        .image, .main {
            width: 50%;
            height: 100vh;
        }
        .image {
            img {
                width: 100%;
                height: 100vh;
                object-fit: cover;
            }
        }
        .form {
            padding: 50px;
        }
    }
    .title {
        font-size: 4rem;
        font-family: serif!important;
        font-weight: bold!important;;
        color: black;
    }

    .subtitle {
        color: black;
        font-family: 'MINISerif-Regular';
    }

    .questions {
        width: 100%;
        ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
            padding: 0;
            li {
                margin-top: 50px;
                font-family: sans-serif;
                cursor: pointer;
                width: auto;
            }
        }
    }

    .score {
        margin: 60px 0;
        width: calc(100% - 40px);
        padding: 20px;
        color: white;
        background-color: black;
        text-align: center;
        font-family: sans-serif;
        font-size: 18px;
    }
    .logo {
      text-align: center;
      img {
          width: 160px;
      }
    }

    .alert {
        text-align: center;
        padding: 20px;
        h1 {
            font-size: 2.5rem;
        }
        .actions {
            .link {
                border: none;
                border-bottom: solid 8px #a70d19;
            }
        }
    }
    .resolve {
        text-align: center;
        padding: 20px;
        p.title{
            font-size: 4rem;
            margin: 0;
        }

        a {
            text-transform: uppercase;
            width: 290px;
            font-family: sans-serif!important;
        }

    .actions {
        .link {
            margin: 0;
        }
    }
    }

    .modal-content {
        color: #000;
        h1 {
            font-family: sans-serif;
        }
        h2 {
            font-family: 'MINISerif-Regular';
        }
    }

    .title-result {
        text-transform: uppercase;
    }

    .content-result {
        font-family: 'MINISerif-Regular';
    }

</style>
