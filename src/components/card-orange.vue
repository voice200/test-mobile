<template>
  <div class="b-card">
    <div class="b-card_name">
      <span class="b-card_label">CB | </span> <span class="b-card_name-bank">{{ card.nameCard }}</span>
    </div>
    <div class="b-card_name-system"></div>
    <div class="b-card_payment_system">
    </div>
    <div class="b-card_payment_union">
    </div>
    <div class="b-card_chip">
    </div>
    <div class="b-card_number">
      {{ formatDateForNumber(card.numberCard)}}
    </div>
    <div class="b-card_active">
      {{ formatDateForYear(card.active) }}
    </div>

  </div>

</template>

<script>
const defaultValue = {
  nameCard: 'Название Карты',
  numberCard: '****************',
  active: 'MMYY',
  paymentsSystem: 'mastercard'
}
export default {
  props: ['color', 'cardData'],
  name: "card",
  data() {
    return{
      background: this.color,
      card: {
        nameCard: this.cardData.nameCard ? this.cardData.nameCard : defaultValue.nameCard,
        numberCard: this.cardData.numberCard ? this.cardData.numberCard : defaultValue.numberCard,
        active: this.cardData.active ? this.cardData.active : defaultValue.active,
        paymentsSystem: 'mastercard'
      }
    }
  },
  methods:{

  },
  computed:{
    formatDateForNumber(){
      return data =>{
        let secondPart = [],
            firstPart = [],
            thirdPart = [],
            fourPart = [];
        data.split('')
            .map((item, i)=>{
              if(i <= 3) {
                firstPart = [...firstPart, item]
              }else if ( i >= 4 && i <= 7) {
                  secondPart = [...secondPart, item]
              } else if ( i >= 8 && i <= 11 ){
                thirdPart = [...thirdPart, item]
              } else {
                fourPart = [...fourPart, item]
              }})
        return `${firstPart.join('')} ${secondPart.join('')} ${thirdPart.join('')} ${fourPart.join('')}`
      }
    },
    formatDateForYear(){
      return data =>{
        let secondPart = [],
            firstPart = [];

        data.split('')
            .map((item, i)=>{
              if(i <= 1) {
                firstPart = [...firstPart, item]
              }else if ( i >= 2 && i <= 3) {
                secondPart = [...secondPart, item]
             }})
        return `${firstPart.join('')}/${secondPart.join('')}`
      }
    },

  },
}
</script>

<style lang="scss" scoped>
.b-card{
  width: 334px;
  height: 212px;
  background:url("../assets/images/orange-card.svg");
  position: relative;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;

  &_name-system{
    position: absolute;
    color: #FFFFFF;
    font-size: 6px;
    right: 14px;
    top: 58px;
  }

  &_name{
    position: absolute;
    left: 20px;
    top: 22px;
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
    left: 22px;
    top:128px;
    font-family: 'Source Sans Pro', sans-serif;;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
  }
  &_active{
    position: absolute;
    left: 20px;
    bottom: 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.01em;
    color: rgba(255, 255, 255, 0.6);
  }

  &_payment_system{
    background:url("../assets/images/mc_vrt_rev 1.svg") no-repeat;
    position: absolute;
    right: 26px;
    bottom: 10px;
    width: 55px;
    height: 45px;
    background-position: center;
    background-size: contain;
  }
}

</style>
