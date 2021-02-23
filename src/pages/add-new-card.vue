<template>
  <v-container class="b-newCard">
    <div class="b-newCard_card">
      <card-orange :card-data="cardData" :key="componentKey"></card-orange>
    </div>
    <div class="b-newCard_inputs">
      <v-text-field
        label="Название Карты"
        placeholder="Master Card"
        outlined
        v-model="cardData.nameCard"
        dark
        @input="changeInputData"
        @blur="$v.cardData.nameCard.$touch()"
        v-if="step === 1"
      />
      <div
        class="invalid-feedback"
        v-if="!$v.cardData.nameCard.required && $v.cardData.nameCard.dirty"
      >
        Это поле обязательное для заполнения
      </div>
      <v-text-field
        v-if="step === 2"
        label="Номер Карты"
        placeholder="0000 0000 0000 0000"
        outlined
        v-model="cardData.numberCard"
        type="number"
        dark
        @input="changeInputData"
        @blur="$v.cardData.numberCard.$touch()"
      ></v-text-field>
      <div
        class="invalid-feedback"
        v-if="!$v.cardData.nameCard.required && $v.cardData.nameCard.dirty"
      >
        Это поле обязательное для заполнения
      </div>
      <div
        class="invalid-feedback"
        v-if="
          !$v.cardData.numberCard.maxLength || !$v.cardData.numberCard.minLength
        "
      >
        Номер карты должен состоять из
        {{ $v.cardData.numberCard.$params.maxLength.max }} цифр, сейчас длина
        {{ cardData.numberCard.length }}
      </div>
      <v-text-field
        v-if="step === 3"
        label="MM/YY"
        placeholder="MM/YY"
        outlined
        type="number"
        v-model="cardData.active"
        dark
        @blur="$v.cardData.active.$touch()"
        @input="changeInputData"
      ></v-text-field>
      <div
        class="invalid-feedback"
        v-if="!$v.cardData.active.required && $v.cardData.nameCard.dirty"
      >
        Это поле обязательное для заполнения
      </div>
      <div
        class="invalid-feedback"
        v-if="!$v.cardData.active.maxLength || !$v.cardData.active.minLength"
      >
        Это поле должно состоять из
        {{ $v.cardData.active.$params.maxLength.max }} цифр, сейчас длина
        {{ cardData.active.length }}
      </div>
    </div>
    <div class="b-newCard_button">
      <app-button :label-btn="label" :onClick="nextStep" v-if="step < 3" />
      <app-button
        :label-btn="labelSave"
        :onClick="nextStep"
        v-if="step === 3"
      />
    </div>
  </v-container>
</template>

<script>
import CardOrange from "@/components/card-orange";
import AppButton from "@/components/app-button";

const { required, minLength, maxLength } = require("vuelidate/lib/validators");
export default {
  name: "add-new-card",
  components: { AppButton, CardOrange },
  data() {
    return {
      step: 1,
      cardData: {
        nameCard: "",
        numberCard: "",
        active: "",
      },
      label: "Продолжить",
      labelSave: "Coхранить",
      disable: true,
      componentKey: 0,
    };
  },
  methods: {
    changeInputData() {
      this.componentKey++;
    },
    nextStep() {
      this.step++;
      if (this.step === 4) {
        this.$router.push("/payments");
      }
    },
  },
  validations: {
    cardData: {
      nameCard: {
        required,
      },
      numberCard: {
        required,
        minLength: minLength(16),
        maxLength: maxLength(16),
      },
      active: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(4),
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.b-newCard {
  width: 100%;
  height: 100vh;
  background: linear-gradient(360deg, #020266 0%, #0b00e5 100%);
  position: relative;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &_card {
    display: flex;
    justify-content: center;
  }
  &_button {
    display: flex;
    justify-content: center;
  }
  &_inputs {
    .b-newCard_input {
      border: none;
      color: #ffffff;
    }
  }
}
.invalid-feedback {
  position: relative;
  z-index: 55;
  display: block;
}
</style>
