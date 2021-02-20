<template>
  <v-container class="b-payment">
    <div >
      <div class="b-payment_cards">
        <card :cardData="cardData"/>
      </div>
      <div class="b-payment_button">
        <app-button :label-btn="label"/>
      </div>

    </div>
  </v-container>
</template>

<script>
import Card from '@/components/card';
import AppButton from '@/components/app-button';
export default {
name: "payment",
  components: { AppButton, Card },
  data() {
    return {
      cardData:{
          nameCard: 'Universal Bank',
          numberCard: '5489   7452   5726   9827',
          active: '04/24',
          paymentsSystem: 'mastercard'
      },
      label: 'Добавить новую карту'
    }
  }
}
</script>

<style lang="scss" scoped>
.b-payment{
  width: 100%;
  min-height: 400px;
  background: linear-gradient(360deg, #020266 0%, #0B00E5 100%);
  border-radius: 0px;

  &_cards{
    width: 100%;
    min-height: 300px;
    margin-bottom: 55px;
    display: flex;
    justify-content: center;
  }
  &_button{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
}
</style>
