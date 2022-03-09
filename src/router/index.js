import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "about",
        component: () => import("../views/About.vue"),
      },
      {
        path: "products", // 多個產品列表
        component: () => import("../views/Products.vue"),
      },
      {
        path: "product/:id", // 多個產品列表
        component: () => import("../views/Product.vue"),
      },
      {
        path: "product", // 單一產品列表
        component: () => import("../views/Product.vue"),
      },
      {
        path: "cart", // 購物車
        component: () => import("../views/Cart.vue"),
      },
    ],
  },
  {
    path: "/login", // 後台
    component: () => import("../views/AdminLogin.vue"),
  },
  {
    path: "/admin", // 後台
    component: () => import("../views/Admin.vue"),
    children: [
      {
        path: "products", // 多個產品列表
        component: () => import("../views/AdminProducts.vue"),
      },
      {
        path: "coupon", // 多個產品列表
        component: () => import("../views/AdminCoupon.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
