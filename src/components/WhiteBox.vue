<template>
  <div class="white-box">
    <h3 v-if="WhiteBoxTitle">{{ WhiteBoxTitle }}</h3>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "WhiteBox",
  props: {
    WhiteBoxTitle: {
      type: String,
      default: null
    },
    WhiteBoxText: {
      type: String,
      default: null
    }
  }
};
</script>

<script>
export default {
  name: "WhiteBox"
};
</script>

<style lang = "scss">
.white-box {
  margin: 0 auto;
  height: 640px;
  width: 1100px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: -50px;
}
</style>