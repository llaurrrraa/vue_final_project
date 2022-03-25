<template>
  <div class="container mt-5 product">
    <div class="row">
      <aside class="col-md-2 aside">
        <CategoryList :products="products"></CategoryList>
      </aside>
      <main class="col-md-10 main">
        <nav style="" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/products">{{ product.category }}</router-link>
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
          <div class="pics col-5">
            <ThumbsGallery :thumb-product="product"/>
          </div>
          <div class="info col-7">
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
      </main>
    </div>
  </div>
</template>
<script>
import ThumbsGallery from "@/components/ThumbsGallery.vue";
import CategoryList from "@/components/CategoryList.vue";

export default {
  data() {
    return {
      product: [],
    };
  },
  components: {
    CategoryList,
    ThumbsGallery,
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/product/${id}`
        )
        .then((res) => {
          this.product = res.data.product;
          console.log(this.product);
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
<style lang="scss">
.product {
  letter-spacing: 1px;
}
.main {
  .row{
    .pics{
    }
  }
  .breadcrumb-item {
    a {
      text-decoration: none;
      color: #8c8c8c;
    }
    .router-link-exact-active {
      color: blue;
      font-weight: 700;
      background-color: #65ffbf;
      padding: 0 5px;
    }
  }
}
</style>