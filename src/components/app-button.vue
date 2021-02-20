<template>
  <button class="b-button">
      {{ label }}
  </button>
</template>

<script>
export default {
  props:['labelBtn'],
  data () {
    return{
      label: this.labelBtn
    }
  }

}
</script>

<style lang="scss" scoped>
.b-button{
  width: 335px;
  height: 50px;
  background: #FFFFFF;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.24px;
  color: #020266;
  outline: none;
}

</style>
