<template>
  <div class="app-header">
    <AppNav :routes="links" />
    <div class="app-header--title">
      <h1>Vardenis Pavardenis</h1>
      <h3>Mano Portfolio</h3>
    </div>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav";
import routes from "../routes";
export default {
  name: "AppHeader",
  components: {
    AppNav
  },
  data() {
    return {
      routes
    };
  },
  computed: {
    links() {
      return this.routes.filter(route => route.meta.displayName);
    }
  }
};
</script>

<style lang="scss">
.app-header {
  background: #3252e5;
  height: 300px;
  width: 100%;

  &--title {
    text-align: center;
    color: #fff;
  }
}
</style>