<template>
  <div v-on:click="copy" class="label">
    {{ text }}
    <span class="delete" v-on:click="deleteLabel">X</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private text!: string;

  copy() {
    this.$emit("copy", this.text);
  }

  deleteLabel() {
    this.$emit("delete", this.text);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
