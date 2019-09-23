<template>
  <div>
    <ol>
      <li v-for="item in info" :key="item">{{item}}</li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "EducationView",
  data() {
    return {
      info: ["Vidurine", "Gimnazija", "Univeras"]
    };
  }
};
</script>
