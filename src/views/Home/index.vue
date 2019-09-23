

<template>
  <div class="projects">
    <h3>Projects</h3>
    <div class="projects--cards">
      <Card
        v-for="data in photoArray"
        :key="data.name"
        :photo="data.photo"
        :projectName="data.name"
      />
    </div>
  </div>
</template>

<script>
import Card from "../../components/Card";
import photo1 from "../../assets/source.gif";
import photo2 from "../../assets/tenor.gif";
import photo3 from "../../assets/teror.gif";
export default {
  name: "HomeView",
  components: {
    Card
  },
  data() {
    return {
      photos: []
    };
  },
  computed: {
    photoArray() {
      return [
        { name: "First project", photo: photo1 },
        { name: "Second project", photo: photo2 },
        { name: "Third project", photo: photo3 }
      ];
    }
  }
};
</script>

<style lang="scss">
.projects {
  padding: 50px;

  &--cards {
    display: flex;
    justify-content: space-between;
  }
}
</style>