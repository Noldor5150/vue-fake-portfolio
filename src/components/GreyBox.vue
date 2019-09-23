<template>
  <div class="greybox">
    <slot />
  </div>
</template>

<script>
export default {
  name: "GreyBox"
};
</script>

<style lang="scss">
.greybox {
  margin: 0 auto;
  height: 250px;

  background-color: #eeeff3;
}
</style>