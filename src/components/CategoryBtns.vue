<template>
  <div class="category">
    <button type="button" class="btn">
      <img
        src="../assets/images/vegetables.png"
        alt=""
      />
      <p>蔬菜類</p>
    </button>
    <button type="button" class="btn">
      <img
        src="../assets/images/fruits.png"
        alt=""
      />
      <p>水果類</p>
    </button>
    <button type="button" class="btn">
      <img
        src="../assets/images/meat.png"
        alt=""
      />
      <p>肉製品</p>
    </button>
    <button type="button" class="btn">
      <img
        src="../assets/images/milk.png"
        alt=""
      />
      <p>乳製品</p>
    </button>
    <button type="button" class="btn">
      <img
        src="../assets/images/plant.png"
        alt=""
      />
      <p>植栽類</p>
    </button>
    <button type="button" class="btn">
      <img
        src="../assets/images/rice.png"
        alt=""
      />
      <p>食品雜糧</p>
    </button>
    <button type="button" class="btn">
      <img
        src="../assets/images/farmer.png"
        alt=""
      />
      <p>小農特製</p>
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.category {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  .btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 1.5px;
    border-radius: 10px;
    box-shadow: 1px 0px 15px 1px rgba(240, 240, 240, 1);
    p {
      margin-bottom: 0.5rem;
      font-weight: 700;
      color: #9c9c9c;
    }
  }
  .btn img {
    max-width: 5rem;
    max-height: 5rem;
    margin: 0.5rem 0;
  }
}
</style>