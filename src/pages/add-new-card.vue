<template>
  <v-container class="b-newCard">
    <div class="b-newCard_card">
      <card :card-data="cardData"></card>

    </div>


  </v-container>
</template>

<script>
import Card from '@/components/card';
export default {
  name: 'add-new-card',
  components: { Card },
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
.b-newCard{
    width: 100%;
    min-height: 400px;
    background: linear-gradient(360deg, #020266 0%, #0B00E5 100%);

  &_card{

  }
}

</style>
