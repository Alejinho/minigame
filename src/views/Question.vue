<template>
    <div class="question" :class="{reverse}">
        <div class="image">

        </div>
        <div class="main">
            <h1 class="title">jhoy</h1>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data: () => ({
        reverse: false
    }),
    mounted() {
        let y =Math.random();
        this.reverse = y > 0.5;

        axios.get(`${this.api}games/${this.$route.params.id}/question`)
        .then((res) => {
        console.log(res.data);
        })
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
            height: 100%;
        }
    }
    .title {
        font-size: 4rem;
    }
</style>
