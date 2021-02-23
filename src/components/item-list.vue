<template>
  <v-card>
    <v-list class="b-menu b-menu_stylisation">
      <v-list-item-group class="b-menu_list">
        <v-list-item
          class="b-menu-item"
          v-for="(item, i) in items"
          :key="i"
          @click="goToPage(item.link)"
        >
          <v-list-item-icon class="b-menu_icon">
            <img :src="getImg(item.icon)" alt="icon" />
          </v-list-item-icon>
          <div
            class="b_menu_border"
            :class="{ b_menu_border__border: item.divider }"
          >
            <v-list-item-content>
              <v-list-item-title
                class="b-menu_title b-menu_title__color"
                style="color: #fff"
              >
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <img :src="getImg(item.arrow)" alt="arrow" />
            </v-list-item-icon>
          </div>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: ["items"],
  name: "item-list",
  data() {
    return {
      model: 1,
    };
  },
  methods: {
    goToPage(link) {
      this.$router.push(link);
    },
  },
  computed: {
    getImg() {
      return (name) => {
        return require(`@/assets/images/${name}`);
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.b-menu {
  &.b-menu_stylisation {
    background: linear-gradient(180deg, #0b00e1 0%, #03026c 100%);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.15px;
  }
  & .b-menu_list {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.15px;
    color: #ffffff !important;

    .b-menu_icon {
      margin-right: 10.23px;
    }
  }
  .b_menu_border {
    position: relative;
    z-index: 10;
    display: flex;
    width: 100%;
    padding: 0 21.9px 0 0;
    &__border {
      border-top: 1px solid rgba(0, 0, 0, 0.25);
    }
  }
  .b-menu-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    padding: 0 0 0 20.23px;

    .b-menu_title {
      font-family: Montserrat, sans-serif !important;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.15px;
    }
    .b-profile_icon {
      margin-right: 10px;
    }
  }
}
</style>
