<template>
  <v-app>
    <div id="app">
      <div class="top-nav">
        <div class="left-nav">
          <a v-scroll-to="'#home'">t i t l e</a>
        </div>
        <div class="right-nav">
          <a class="nav" v-scroll-to="'#home'">Home</a>
          <a class="nav" v-scroll-to="'#about'">About</a>
          <a class="nav" v-scroll-to="'#services'">Services</a>
          <a class="nav" v-scroll-to="'#works'">Works</a>
          <a class="nav" v-scroll-to="'#contact'">Contact</a>
        </div>
      </div>
      <div id="home">テキスト</div>
      <div id="about">about</div>
      <div id="works">works</div>
      <div id="services">services</div>
      <div id="contact">contact</div>
    </div>
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
  color: #000000!important;
}
.top-nav{
  position: fixed;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 150px;
}
.left-nav{
  position: absolute;
  left: 60px;
}
.right-nav{
  position: absolute;
  right: 30px;
  font-size: 17px;
}
.nav{
  padding: 30px;
  cursor: pointer;
}
#home,#about,#works,#services,#contact{
  height: 100vh;
  padding-top: 200px;
}
</style>

<script src="./js/scrollreveal.min.js"></script>

<script>
export default {
  name: 'App'
};
</script>