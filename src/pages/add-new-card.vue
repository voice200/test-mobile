<template>
  <v-container class="b-newCard">
    <div class="b-newCard_card">
      <card :card-data="cardData"></card>
    </div>
    <div class="b-newCard_inputs">
      <v-text-field
          label="Название Карты"
          placeholder="Master Card"
          outlined
          v-model="cardData.nameCard"
          dark
      ></v-text-field>
      <v-text-field
          label="Номер Карты"
          placeholder="0000 0000 0000 0000"
          outlined
          v-model="cardData.numberCard"
          dark
      ></v-text-field>
      <v-text-field
          label="MM/YY"
          placeholder="MM/YY"
          outlined
          v-model="cardData.active"
          dark
      ></v-text-field>
    </div>
    <div class="b-newCard_button">
      <app-button :label-btn="label" onClickContinue="clickContinue" :disabled="disable"/>
    </div>
  </v-container>
</template>

<script>
import Card from '@/components/card';
import AppButton from '@/components/app-button';
export default {
  name: 'add-new-card',
  components: { AppButton, Card },
  data() {
    return {
      cardData:{
        nameCard: '',
        numberCard: '',
        active: '',
        paymentsSystem: 'mastercard'
      },
      label: 'Продолжить',
      disable: true
    }
  },
  methods:{
    // clickContinue(){
    //   if ( this.cardData.nameCard )
    // }
  }
}
</script>

<style lang="scss" scoped>
.b-newCard{
  width: 100%;
  min-height: 700px;
  background: linear-gradient(360deg, #020266 0%, #0B00E5 100%);
  position: relative;
  padding-top: 100px;


  &_card{
    transform: rotate(90deg);
  }
  &_button{
    display: flex;
    justify-content: center;
  }
  &_inputs{
    .b-newCard_input{
      border: none;
      color: #FFFFFF;
    }
  }
}

</style>
