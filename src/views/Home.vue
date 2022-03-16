<template>
  <div class="container home-banner">
    <div class="swiper my-5">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :pagination="{ clickable: true }"
        navigation
      >
        <swiper-slide>
          <div class="cow-banner">
            <h1>哞吉了！</h1>
            <h1>- 乳製品 <span>8</span> 折起 -</h1>
            <h2>( 因應冷藏運送有區域限制，下單前請詳閱產品運送資訊 )</h2>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="rice-banner">
            <h1>～ 稻叮來 ～</h1>
            <h2>誰知盤中飧，粒粒皆辛苦</h2>
            <h3>米飯加購價<span> 89+</span> 元起！</h3>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="ppl-banner">
            <h1>公平貿易</h1>
            <h3>透過透明與互相尊重的貿易夥伴關係</h3>
            <h3>我們推動永續與道德的發展體系</h3>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <CategoryBtns />
    <div class="sale">
      <h5 class="my-5 subtitle">... 正在特價</h5>
      <ProductCard 
      :cardProduct="products"/>
    </div>
  </div>
</template>
<script>
import CategoryBtns from "@/components/CategoryBtns.vue";
import ProductCard from "@/components/ProductCard.vue";

import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";

export default {
  data() {
    return {
      icons: [
        "../assets/images/vegetables.png",
        "@/assets/images/fruits.png",
        "@/assets/images/rice.png",
      ],
      modules: [Navigation, Pagination],
      category: [],
      products: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    CategoryBtns,
    ProductCard,
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_URL}v2/api/${process.env.VUE_APP_API_PATH}/products`;
      this.$http.get(api).then((res) => {
        this.products = res.data.products;
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style lang="scss">
.home-banner {
  max-width: 1440px;
}
.swiper-button-prev,
.swiper-button-next {
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border-radius: 25px;
  padding: 2rem 2rem;
}
.cow-banner {
  background-image: url(https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2674&q=80);
  h1 {
    font-size: 5.5rem;
    color: #fff;
    letter-spacing: 15px;
    font-weight: 900;
    text-shadow: 0 0 2px #000;
    span {
      color: #bdccd4;
    }
  }
  h2 {
    margin-top: 1.8rem;
    color: #fff;
    font-weight: 900;
    letter-spacing: 8px;
  }
}
.rice-banner {
  background-image: url(https://images.unsplash.com/photo-1611501355758-0d8b8208e1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80);
  h1 {
    font-size: 5.5rem;
    color: #fff;
    letter-spacing: 15px;
    font-weight: 900;
    text-shadow: 0 0 2px #000;
  }
  h2 {
    color: #000;
    font-weight: 900;
    letter-spacing: 8px;
    text-shadow: 0 0 2px #fff;
    margin-top: 1.5rem;
  }
  h3 {
    font-size: 2.5rem;
    color: #000;
    font-weight: 900;
    letter-spacing: 15px;
    text-shadow: 0 0 2px #fff;
    margin-top: 1.5rem;
    span {
      background-color: rgba(255, 255, 255, 0.5);
      color: #c15b07;
      // text-shadow: 0 0 2px #000;
      border: 2px solid #fff;
      font-weight: 300;
      font-size: 3rem;
      padding: 0.5rem;
      // background-color: rgba(255,255,255,0.8);
      border-radius: 15px;
    }
  }
}
.ppl-banner {
  background-image: url(https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80);
  h1 {
    text-align: center;
    font-size: 5.5rem;
    color: #fff;
    padding: 0 5rem;
    letter-spacing: 5rem;
    font-weight: 900;
    text-shadow: 0 0 2px #000;
  }
  h3 {
    text-align: center;
    font-size: 2.5rem;
    letter-spacing: 15px;
    color: #fff;
    opacity: 0.7;
    font-weight: 900;
    text-shadow: 0 0 2px #000;
  }
}
.cow-banner,
.rice-banner,
.ppl-banner {
  height: 500px;
  background-position: center center;
  background-size: cover;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
