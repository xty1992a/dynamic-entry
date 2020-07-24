<template>
  <div class="detail">
    <p>detail</p>
    <img src="../../assets/cat.jpg" alt="" />
    <input type="text" v-model="value" />
  </div>
</template>

<script>
export default {
  name: "detail",
  components: {},
  props: {},
  data() {
    return {
      value: "",
    };
  },
  computed: {},
  methods: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="less" rel="stylesheet/less">
.detail {
  img {
    width: 100px;
  }
}
</style>
