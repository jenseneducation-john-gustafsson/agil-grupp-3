<template>
  <div id="app">
    <Navbar />
    <router-view class="width" />

    <BottomFooter />
  </div>

</template>

<script>
import Navbar from "./components/Navbar";
import BottomFooter from "./components/BottomFooter.vue";
export default {
  components: {
    Navbar,
    BottomFooter,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.width {
  width: 75%;
  margin: auto;
}
</style>
