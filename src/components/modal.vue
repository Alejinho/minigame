<template>
  <div class="modal">
    <div class="modal-drop" @click="closer"></div>
    <div class="modal-dialog" :class="[theme]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: ['theme', 'close'],
  methods: {
    closer() {
      if(this.close) {
        this.close()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
z-index: 999;
background-color: rgba(0, 0, 0, 0.8);
  &-drop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index:1;
  }
  &-dialog {
    position: fixed;
    top: 30%;
    left: 30%;
    width: 40%;
    background-color: white;
    z-index: 2;
    &.alert {
      top: 40%;
    }
  }
}
</style>
