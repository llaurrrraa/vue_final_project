<template>
  <div class="container">
    <h2 class="mt-3">這是後台頁面</h2>
    <div id="nav">
      <router-link to="/">返回到前台</router-link> |
      <router-link to="products">後台產品列表</router-link> |
      <router-link to="coupon">後台優惠卷</router-link> |
    </div>
  </div>
  <router-view />
</template>
<script>
export default {
  data() {
    return {
      checkStatus: false,
    };
  },
  methods: {
    checkLogin() {
      // const token = document.cookie.replace(/(?:(?:^|.*;\s*)mytoken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
