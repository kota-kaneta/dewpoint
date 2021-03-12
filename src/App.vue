<template>
  <v-app class="app">
    <div class="top-nav">
      <div class="nav" v-scroll-to="'#home'">Home</div>
      <div class="nav" v-scroll-to="'#about'">About</div>
      <div class="nav" v-scroll-to="'#services'">Services</div>
      <div class="nav" v-scroll-to="'#works'">Works</div>
      <div class="nav" v-scroll-to="'#contact'">Contact</div>
    </div>
  </v-app>
</template>

<style lang="scss">
.app{
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
.top-nav{
  position: fixed;
  top: 20px;
  right: 50px;
  display: flex;
  font-size: 16px;
}
.nav{
  cursor: pointer;
  padding: 30px;
}
</style>

<script>
export default {
  name: 'App'
};
</script>
