<template>
  <div class="about">
    <h3>About Me</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <AppNav :routes="children" :invert="true" />
    <GreyBox>
      <RouterView />
    </GreyBox>
  </div>
</template>

<script>
import GreyBox from "../../components/GreyBox";
import routes from "../../routes";
import AppNav from "../../components/AppNav";

export default {
  name: "AboutView",
  components: {
    GreyBox,
    AppNav
  },
  computed: {
    children() {
      return routes.find(route => route.path === this.$route.matched[0].path)
        .children;
    }
  }
};
</script>

<style lang="scss">
.about {
  padding: 50px;
}
</style>