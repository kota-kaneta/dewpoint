<template>
  <v-app id="app">
    <div class="top-nav">
      <a class="nav" v-scroll-to="'#home'">Home</a>
      <a class="nav" v-scroll-to="'#about'">About</a>
      <a class="nav" v-scroll-to="'#services'">Services</a>
      <a class="nav" v-scroll-to="'#works'">Works</a>
      <a class="nav" v-scroll-to="'#contact'">Contact</a>
    </div>
    <div id="home">home</div>
    <div id="about">about</div>
    <div id="works">works</div>
    <div id="services">services</div>
    <div id="contact">contact</div>
  </v-app>
</template>

<style lang="scss">
#app{
  position: relative;
  box-sizing: border-box;
  width: 100%;
  overflow: auto;
  overflow-x: hidden;
  font-size: 1.4rem;
  line-height: 1;
  font-family: "Noto Sans JP", sans-serif;
  color: #000000;
  background-color: #ffffff;
}
a{
  text-decoration-line: none;
  color: #000000!important;
}
.top-nav{
  position: fixed;
  top: 10px;
  right: 50px;
  display: flex;
  font-size: 16px;
  background-color: #ffffff80;
}
.nav{
  cursor: pointer;
  padding: 30px;
}
#home,#about,#works,#services,#contact{
  height: 100vh;
}
</style>

<script src="./js/scrollreveal.min.js"></script>

<script>
export default {
  name: 'App'
};
</script>