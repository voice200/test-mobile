<template>
  <button
    class="b-button"
    :class="{ btn_disable: disable }"
    :disabled="disable"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ["labelBtn", "disabled", "onClick"],
  data() {
    return {
      label: this.labelBtn,
      disable: this.disabled,
    };
  },
  updated() {
    this.disable = this.disabled;
  },
};
</script>

<style lang="scss" scoped>
.b-button {
  width: 335px;
  height: 50px;
  background: #ffffff;
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
.btn_disable {
  color: rgba(2, 2, 102, 0.5);
  background: rgba(255, 255, 255, 0.7);
}
</style>
