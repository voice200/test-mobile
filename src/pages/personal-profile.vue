<template>
  <div>
    <v-container>
          <p>Личный кабинет</p>
      <v-card
          class="mx-auto b-avatar"
          max-width="344"
      >
        <v-img
            src="../assets/images/avatar.png"
        ></v-img>
        <div class="b-avatar_information">
          <v-card-title class="b-avatar_title">
            Мария Маракова
          </v-card-title>

          <v-card-subtitle>
            +7 (911) 715-58-67
          </v-card-subtitle>
        </div>
      </v-card>
      <div class="b-profile">
        <item-list :items="profile"/>
      </div>
    </v-container>
      <item-list
        :items="items"
      />
  </div>
</template>

<script>
import ItemList from '@/components/item-list'
import { menuItems, profileItems } from '@/fixtures'

export default {
  name: 'personal-profile',
  components: { ItemList },
  comments: {
    ItemList
  },
  data () {
    return {
      items: menuItems,
      profile: profileItems
    }
  }
}
</script>

<style  scoped>
.b-avatar{

}
.b-avatar_information{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.theme--light{
  background: linear-gradient(360deg, #020266 0%, #0B00E5 100%);
  width: 100%;
}

</style>
