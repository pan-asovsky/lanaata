<template>
  <div>
    <p>Hello, world</p>
  </div>
    <button type="button" class="btn btn-primary" @click="incrementCount">Click me!</button>
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