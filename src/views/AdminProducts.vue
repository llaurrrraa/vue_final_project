<template>
  <div class="container-lg my-4 ap">
    <div class="ap-title my-3">
      <h5 class="ap-h5">後台產品列表</h5>
      <button
        type="button"
        class="ap-btn text-end btn btn-outline-dark me-3"
        @click="openModal('isNew')"
      >
        建立新產品
      </button>
    </div>
    <div class="table-responsive mt-3 ap-table">
      <table class="table table-hover">
        <thead>
          <tr>
            <th width="250">id</th>
            <th>分類</th>
            <th>產品名稱</th>
            <th>原價</th>
            <th>售價</th>
            <th>狀態</th>
            <th>編輯 / 刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td class="text-secondary" style="letter-spacing: 0">
              {{ item.id }}
            </td>
            <td>{{ item.category }}</td>
            <td style="font-weight: bold">{{ item.title }}</td>
            <td>{{ item.origin_price }}</td>
            <td>{{ item.price }}</td>
            <td>
              <!-- <span v-if="item.is_enabled">上架中</span>
              <span v-else class="text-secondary">未啟用</span> -->
              <div v-if="item.is_enabled === 1" class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  checked
                />
                <!-- <label class="form-check-label" for="flexSwitchCheckChecked"
                  >上架中</label
                > -->
              </div>
              <div v-else class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <!-- <label class="form-check-label" for="flexSwitchCheckDefault"
                  >未啟用</label
                > -->
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-dark btn-sm"
                  @click="openModal('edit', item)"
                >
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ProductModal
      :product="tempProduct"
      ref="productModalref"
      :is-new="isNew"
      @get-product="getProducts"
    ></ProductModal>
  </div>
</template>
<script>
import ProductModal from "@/components/ProductModal.vue";
export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      isNew: false,
    };
  },
  components: {
    ProductModal,
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/admin/products/all`;
      this.$http.get(api).then((res) => {
        this.products = res.data.products;
        // console.log(this.products);
      });
    },
    openModal(status, item) {
      if (status === "isNew") {
        this.tempProduct = {
          imagesUrl: [],
        };
        this.isNew = true;
      } else if (status === "edit") {
        this.tempProduct = { ...item };
        // console.log(this.tempProduct);
        // this.temProduct = { ...product };
        // console.log(this.tempProduct);
      }
      const modalComponent = this.$refs.productModalref;
      modalComponent.openModal();
    },
    // updateProduct() {
    //   const api = `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/admin/product`;
    //   let method = "post";
    //   if (!isNew) {
    //     api = `${process.env.VUE_APP_URL}/v2/api/${process.env.VUE_APP_API_PATH}/admin/product/${this.tempProduct.id}`;
    //     method = put;
    //   }
    // },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style lang="scss">
.ap {
  letter-spacing: 1px;
}
.ap-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .ap-h5 {
    display: inline-block;
    letter-spacing: 1px;
    font-weight: 700;
    margin: 0;
    color: #0544f3;
  }
  .ap-btn {
    margin: 0;
  }
}
.ap-table {
  th {
    color: #8c8c8c;
    font-weight: 300;
  }
}
</style>
