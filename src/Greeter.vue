<template>
  <button @click="handleClick" class="greeter-button">
    {{ buttonLabel }}
  </button>
</template>

<script>
export default {
  name: "Greeter",
  props: {
    message: {
      type: String,
      default: "Hello World!",
    },
    buttonLabel: {
      type: String,
      default: "Click Me",
    },
  },
  methods: {
    handleClick() {
      console.log(this.message);
      alert(this.message);
    },
  },
};
</script>

<style scoped>
.greeter-button {
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  background-color: #42b983;
  color: #fff;
  transition: background-color 0.3s, transform 0.2s;
}
.greeter-button:hover {
  background-color: #36a172;
  transform: scale(1.02);
}
</style>
