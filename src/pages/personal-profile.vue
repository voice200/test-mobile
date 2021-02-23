<template>
  <div class="b-personal-profile">
    <v-card class="b-avatar_container b-avatar">
      <div class="b-avatar_cross" @click="goToHome">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="white"
            fill-opacity="0.87"
          />
        </svg>
      </div>
      <div class="b-avatar_img-container">
        <img class="b-avatar_image" src="../assets/images/avatar.png" />
      </div>
      <div class="b-avatar_information">
        <v-card-title class="b-avatar_title b-avatar_title__position">
          {{ user.name }}
        </v-card-title>
        <v-card-subtitle class="b-avatar_title b-avatar_title__position-number">
          {{ user.phone }}
        </v-card-subtitle>
      </div>
      <div class="b-profile_border"></div>
      <item-menu :item="profile" />
    </v-card>
    <item-list :items="items" />
    <div class="b-profile_exit">
      <item-menu :item="exitButton" />
    </div>
  </div>
</template>

<script>
import ItemList from "@/components/item-list";
import { menuItems, profileItems, exit } from "@/fixtures";
import ItemMenu from "@/components/item-menu";

export default {
  name: "personal-profile",
  components: { ItemMenu, ItemList },
  comments: {
    ItemList,
  },
  data() {
    return {
      items: menuItems,
      profile: profileItems,
      user: {
        name: "Мария Маракова",
        phone: "+7 (911) 715-58-67",
        imageSrc: "../assets/images/avatar.png",
      },
      exitButton: exit,
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.b-personal-profile {
  width: 100%;
  height: 100vh;
  background: linear-gradient(360deg, #020266 0%, #0b00e5 100%);
  position: relative;
  display: flex;
  flex-direction: column;
}
.b-avatar {
  margin-bottom: 20px;
  .b-avatar_information {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .b-avatar_title {
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.24px;
    color: #ffffff;
    &__position {
      margin-top: 20px;
      padding: 0;
    }
    &__position-number {
      margin-top: 5px;
      padding: 0;
      margin-bottom: 30.5px;
    }
  }
  .b-avatar_image {
    width: 100px;
    object-fit: cover;
    object-position: center;
  }
  .b-avatar_img-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  .b-avatar_cross {
    margin-left: 31px;
    cursor: pointer;
  }
  .b-profile {
    padding: 13.73px 21.9px 13.73px 20.23px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    &_exit {
      margin-top: 40px;
    }

    .b-profile_menu-item {
      width: 100%;
      align-items: center;
      display: flex;
    }
    .b-profile_title {
      font-family: Montserrat, sans-serif !important;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.15px;
    }
    .b-profile_icon {
      margin-right: 30px;
    }
  }
}
.b-profile_exit {
  margin-top: 40px;
}
.b-profile_header {
  min-height: 197px;
  background: linear-gradient(360deg, #020266 0%, #0b00e5 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.15px;
  padding-left: 5px;
}

.b-profile_border {
  position: relative;
  z-index: 10;
  border-top: 1px solid rgba(52, 142, 255, 0.5);
  margin-left: 20px;
  margin-right: 20px;
}
.theme--light {
  background: linear-gradient(360deg, #020266 0%, #0b00e5 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.15px;
}

.b-avatar.b-avatar_container {
  width: 100%;
  padding-top: 27px;
  position: relative;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.15px;
}
</style>
