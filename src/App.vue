<template>
  <div id="app">
    <Navbar />
    <router-view class="width" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar,
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
