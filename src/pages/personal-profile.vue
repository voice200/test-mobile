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

        <v-card-title class="b-avatar_title">
          Мария Маракова
        </v-card-title>

        <v-card-subtitle>
          +7 (911) 715-58-67
        </v-card-subtitle>
      </v-card>
    </v-container>
      <item-list
        :items="items"
      />
  </div>
</template>

<script>
import ItemList from '@/components/item-list'
import { menuItems } from '@/fixtures'

export default {
  name: 'personal-profile',
  components: { ItemList },
  comments: {
    ItemList
  },
  data () {
    return {
      items: menuItems
    }
  }
}
</script>

<style  scoped>

</style>
