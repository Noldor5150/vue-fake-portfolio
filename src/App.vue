<template>
  <div class="app">
    <AppHeader />
    <WhiteBox>
      <RouterView />
    </WhiteBox>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import WhiteBox from "@/components/WhiteBox";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    WhiteBox
  }
};
</script>
<style lang="scss">
body {
  background-color: whitesmoke;
}
</style>