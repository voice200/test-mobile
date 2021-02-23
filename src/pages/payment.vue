<template>
  <v-container class="b-payment">
    <div class="b-payment_cards">
      <card :cardData="cardData" />
    </div>
    <div class="b-payment_button">
      <app-button :label-btn="label" :onClick="goToPage" />
    </div>
  </v-container>
</template>

<script>
import Card from "@/components/card";
import AppButton from "@/components/app-button";

export default {
  name: "payment",
  components: { AppButton, Card },
  data() {
    return {
      cardData: {
        nameCard: "Universal Bank",
        numberCard: "5489   7452   5726   9827",
        active: "04/24",
        paymentsSystem: "mastercard",
      },
      label: "Добавить новую карту",
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {},
      },
    };
  },
  methods: {
    goToPage() {
      this.$router.push("/addCard");
    },
  },
};
</script>

<style lang="scss" scoped>
.b-payment {
  width: 100%;
  height: 100vh;
  background: linear-gradient(360deg, #020266 0%, #0b00e5 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 30px;

  &_cards {
    width: 100%;
    max-height: 400px;
    margin-bottom: 55px;
    display: flex;
    justify-content: center;
  }
  &_button {
    display: flex;
    justify-content: center;
  }
}
</style>
