<template>
  <nav>
    <ul :class="['navigation', {'navigation__invert': invert}]">
      <li v-for="route in routes" :key="route.name">
        <RouterLink
          :class="['navigation--link', {'navigation--link__invert': invert}]"
          exact-active-class="navigation--link__active"
          :to="{name: route.name || route.meta.defaultName}"
          exact
        >{{route.meta.displayName}}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppNav",
  props: {
    routes: {
      type: Array,
      default: null
    },
    invert: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.navigation {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  &__invert {
    justify-content: unset;
  }

  li {
    list-style: none;
  }

  &--link {
    margin: 10px;
    color: #fff;

    &__invert {
      color: black;
    }

    &__active {
      color: #37e9b8;
    }
  }
}
</style>