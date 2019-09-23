<template>
  <div class="Text-area">
    <label class="Text-area__label" :for="id">{{ labelText }}</label>
    <textarea :id="id" class="Text-area__input" cols="25" rows="10"></textarea>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    labelText: {
      type: String,
      default: null
    }
  },
  computed: {
    id() {
      return `text-area-${this._uid}`;
    }
  }
};
</script>

<style lang='scss'>
.Text-area {
  display: flex;
  flex-direction: column;
  &__input {
    width: 1000px;
  }
}
</style>