<template>
  <footer>® {{date}} Vardenis Pavardenis</footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      date: new Date().getFullYear()
    };
  }
};
</script>

<style lang='scss'>
footer {
  text-align: center;
  padding: 40px;
}
</style>
