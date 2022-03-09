<template>
  <div class="container mt-5">
    <div class="row">
      <aside class="col-md-2 aside me-1">
        <CategoryList></CategoryList>
      </aside>
      <main class="col main">
        <nav style="" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/products">所有產品</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              <router-link :to="`/product/${product.id}`">{{
                product.title
              }}</router-link>
            </li>
          </ol>
        </nav>
        <hr />
        <div class="row">
          <div class="col">
            <img :src="product.imageUrl" alt="" style="max-width: 50vh" />
          </div>
          <div class="col">
            <table class="table">
              <thead>
                <tr>
                  <th>產品說明</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>產品名稱</td>
                  <td>{{ product.title }}</td>
                </tr>
                <tr>
                  <td>售價</td>
                  <td>$ {{ product.price }} 元 / {{ product.unit }}</td>
                </tr>
                <tr>
                  <td>原價</td>
                  <td>
                    <del>$ {{ product.origin_price }}</del>
                  </td>
                </tr>
                <tr>
                  <td>產地</td>
                  <td>{{ product.description }}</td>
                </tr>
                <tr>
                  <td>產品說明</td>
                  <td width="300">{{ product.content }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="content">
          <span v-for="img in product.imagesUrl" :key="`${img}` + 1">
            <img :src="img" alt="" style="width: 50vh" />
          </span>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import CategoryList from "@/components/CategoryList.vue";

export default {
  data() {
    return {
      product: [],
    };
  },
  components: {
    CategoryList,
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/product/${id}`
        )
        .then((res) => {
          console.log(res);
          this.product = res.data.product;
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
