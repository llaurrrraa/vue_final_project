<template>
  <h1>list</h1>
</template>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getListedProducts() {
      const {category} = this.$route.params;
      const api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/products?category=${category}`;
      this.$http.get(api).then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {
    this.getListedProducts();
  },
};
</script>