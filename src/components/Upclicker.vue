<template>
  <div>
    <p>Hello, world</p>
  </div>
  <div>
    <button @click="incrementCount" class="btn btn-primary">Click me!</button>
  </div>
  <div>
    <span>Count: {{ count }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  mounted() {
    console.log(`Upclicker mounted, count is ${this.count}`);
  },
  methods: {
    incrementCount() {
      this.count++;
    }
  }
};
</script>

<style scoped>
</style>