<template lang="pug">
div(:class='$style.container')
  div(:class='$style.filters')
    FiltersForm
  div(:class='$style.products')
    AppLoader(v-if='isLoading')
    ProductsList(v-else, :list='productsList')
    div(v-if='!productsList?.length', :class='$style.empty')
      div(:class='$style.emptyText')
        span Нет товаров с указанными характеристиками
      AppButton(
        text='Сбросить фильтр',
        styled='secondary',
        @click='handleReset'
      )
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import FiltersForm from '@Components/common/Filters/FiltersForm';
import ProductsList from '@Components/common/Products/ProductsList';
import AppLoader from '@UI/Loader';
import AppButton from '@UI/Button';

export default {
  components: {
    ProductsList,
    FiltersForm,
    AppLoader,
    AppButton,
  },
  setup() {
    const { state, commit, dispatch } = useStore();
    const productsList = computed(() => state.products.productsList);
    const isLoading = computed(() => state.products.isLoading);

    const fetchProducts = () => {
      dispatch('getProducts');
    };

    const handleReset = () => {
      commit('setFiltersReset');
      fetchProducts();
    };

    onMounted(() => {
      fetchProducts();
    });

    return {
      productsList,
      isLoading,
      handleReset,
    };
  },
};
</script>


<style lang="scss" module>
@import '@Scss/component.scss';

@include desktop() {
  .container {
    display: grid;
    grid-template-columns: 210px 1fr;
    grid-column-gap: 30px;
  }
}

.empty {
  @include flex-center;

  padding: 20% 0;
  flex-direction: column;

  &Text {
    margin-bottom: 16px;
  }

  & > [class^='Button'] {
    max-width: 185px;
  }
}
</style>