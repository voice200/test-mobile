<template>
  <button class="b-menu" @click="goToPage(item.link)">
    <div class="b-menu_item">
      <div class="b-profile_icon">
        <img :src="getImg(item.icon)" alt="icon" />
      </div>
      <div
        class="b-menu_title"
        style="color: #ffffff; font-family: Montserrat, sans-serif"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="b-profile_arrow" v-if="item.arrow">
      <img :src="getImg(item.arrow)" alt="arrow" />
    </div>
  </button>
</template>

<script>
export default {
  name: "item-menu",
  props: ["item"],
  computed: {
    getImg() {
      return (name) => {
        return require(`@/assets/images/${name}`);
      };
    },
  },
  methods: {
    goToPage(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style lang="scss" scoped>
.b-menu {
  padding: 13.73px 21.9px 13.73px 20.23px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;

  .b-menu_item {
    width: 100%;
    align-items: center;
    display: flex;
  }
  .b-menu_title {
    font-family: Montserrat, sans-serif !important;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.15px;
  }
  .b-profile_icon {
    margin-right: 10.23px;
  }
}
</style>
