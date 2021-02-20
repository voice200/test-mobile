<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
body{
  background: linear-gradient(360deg, #020266 0%, #0B00E5 100%);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  //transform: matrix(-1, 0, 0, 1, 0, 0);
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0 auto;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.15px;
  color: #FFFFFF;
}
</style>
