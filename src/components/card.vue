<template>
  <div class="b-card">
    <div class="b-card_name">
      <span class="b-card_label">CB | </span> <span class="b-card_name-bank">{{ card.nameCard }}</span>
    </div>
    <div class="b-card_name-system">{{ card.paymentsSystem }}</div>
    <div class="b-card_payment_system">
    </div>
    <div class="b-card_payment_union">
    </div>
    <div class="b-card_chip">
    </div>
    <div class="b-card_number">
      {{ card.numberCard}}
    </div>
    <div class="b-card_active">
      {{ card.active }}
    </div>

  </div>

</template>

<script>
export default {
  props: ['color', 'cardData'],
  name: "card",
  data() {
  return{
    background: this.color,
    card: this.cardData
  }
  }
}
</script>

<style lang="scss" scoped>
.b-card{
  width: 260px;
  height: 410px;
  background:url("../assets/images/card_1.svg");
  position: relative;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;

  &_name-system{
    transform: rotate(-90deg);
    position: absolute;
    color: #FFFFFF;
    font-size: 6px;
    right: 14px;
    top: 58px;
  }

  &_name{
    position: absolute;
    left: -48px;
    bottom: 107px;
    transform: rotate(-90deg);
  }
  &_label{
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 2.37px;
    color: #FFFFFF;
  }
  &_name-bank{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.6);
  }
  &_number{
    position: absolute;
    right: -13px;
    bottom: 113px;
    transform: rotate(-90deg);
    font-family: 'Source Sans Pro', sans-serif;;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
  }
  &_active{
    position: absolute;
    right: 22px;
    bottom: 46px;
    transform: rotate(-90deg);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.01em;
    color: rgba(255, 255, 255, 0.6);
  }

  &_chip{
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    width: 49px;
    height: 59px;
    position: absolute;
    left: 91px;
    bottom: 37px;
  }
  &_payment_system{
    background:url("../assets/images/system.svg") no-repeat;
    position: absolute;
    right: 25px;
    top: 39px;
    width: 55px;
    height: 45px;
    background-position: center;
    background-size: contain;
  }
  &_payment_union{
    background:url("../assets/images/Union.svg") no-repeat;
    position: absolute;
    left: 103px;
    top: 36px;
    width: 24px;
    height: 24px;
    background-position: center;
    background-size: contain;
  }
}

</style>
