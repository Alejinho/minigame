<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/normalize.scss';

@font-face {
  font-family: 'MINISerif-Regular';
  src: url('./assets/fonts/MINISerif-Regular.eot?#iefix') format('embedded-opentype'),  
  url('./assets/fonts/MINISerif-Regular.woff') format('woff'), 
  url('./assets/fonts/MINISerif-Regular.ttf')  format('truetype'), 
  url('./assets/fonts/MINISerif-Regular.svg#MINISerif-Regular') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'MINISerif-Black';
  src: url('./assets/fonts/MINISerif-Black.eot?#iefix') format('embedded-opentype'),  
  url('./assets/fonts/MINISerif-Black.woff') format('woff'), 
  url('./assets/fonts/MINISerif-Black.ttf')  format('truetype'), 
  url('./assets/fonts/MINISerif-Black.svg#MINISerif-Black') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'MINISerif-Italic';
  src: url('./assets/fonts/MINISerif-Italic.eot?#iefix') format('embedded-opentype'),  
  url('./assets/fonts/MINISerif-Italic.woff') format('woff'), 
  url('./assets/fonts/MINISerif-Italic.ttf')  format('truetype'), 
  url('./assets/fonts/MINISerif-Italic.svg#MINISerif-Italic') format('svg');
  font-weight: normal;
  font-style: normal;
}

html {
  font-size: 16px;
}

#app {
  font-family: 'MINISerif-Regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.link {
      width: 220px;
      display: inline-block;
      text-align: center;
      font-size: 3rem;
      text-decoration: none;
      color: black;
      border-bottom: solid 8px #a70d19;
      margin-right: 20px; 
    }
</style>
