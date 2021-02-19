<template>
  <v-card
  >
    <v-list>
      <v-list-item-group v-model="model">
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
        >
          <v-list-item-icon v-html="item.icon">
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon v-html="item.arrow">
          </v-list-item-icon>
        </v-list-item>
        <v-divider
            inset
        ></v-divider>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: ['items'],
  name: 'item-list',
  data () {
    return {
      model: 1
    }
  }
}
</script>

<style scoped>
.b-fon {
  background: linear-gradient(180deg, #0B00E1 0%, #03026C 100%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
}

</style>
