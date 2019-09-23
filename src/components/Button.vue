<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button"
};
</script>

<style lang="scss">
.button {
  background-color: #3252e5;
  padding: 10px 40px;
  border-radius: 5px;
  margin-top: 50px;
  cursor: pointer;
  border: unset;
  color: #fff;
}
</style>