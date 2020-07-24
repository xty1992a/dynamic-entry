<template>
  <div class="home">
    <p>home</p>
    <p>home</p>
    <p>home</p>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  created() {
    console.log(process.env.NODE_ENV);
  },
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="less" rel="stylesheet/less">
.home {
  text-align: center;
}
</style>
