<template lang="pug">
div(:class='$style.container')
  ProductItem(v-for='product in list', :product='product')
</template>

<script>
import ProductItem from '@Components/common/Products/ProductItem';
export default {
  components: {
    ProductItem,
  },
  props: {
    list: Array,
  },
};
</script>

<style lang="scss" module>
@import '@Scss/component.scss';

.container {
  display: grid;
  grid-gap: 30px;
  grid-auto-rows: min-content;
}

@include ls-tablets() {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@include tablets() {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>