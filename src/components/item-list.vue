<template>
  <v-card
  >
    <v-list class="b-menu b-menu_stylisation">
      <v-list-item-group class="b-menu_list" v-model="model">
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="goToPage(item.link)"
        >
          <v-list-item-icon>
            <img :src="getImg(item.icon)">
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
                class="b-menu_title b-menu_title__color"
                style="color: #FFFFFF">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon v-html="item.arrow">
          </v-list-item-icon>
        </v-list-item>
        <div class="b-menu_border">

        </div>
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
      model: 1,
    }
  },
  methods:{
    goToPage(link){
      this.$router.push(link)
    }
  },
  computed:{
    getImg(){
      return name =>{
        return  require(`@/assets/images/${name}`);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.b-menu{

  &.b-menu_stylisation{
    background: linear-gradient(180deg, #0B00E1 0%, #03026C 100%);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.15px;
  }
  & .b-menu_list{
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.15px;
    color: #FFFFFF !important;
  }
  .b-menu_border{
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 10;
    margin-left: 16px;
    width: 94%;
  }

}

</style>
