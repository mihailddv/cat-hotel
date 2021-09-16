<template lang="pug">
aside(:class='$style.container')
  div(:class='$style.filtersList')
    FiltersFormSection(title='Цена за сутки, ₽')
      div(:class='$style.filtersPrice')
        AppInput(
          label='от',
          type='number',
          :value='minPriceValue',
          placeholder='0',
          @onBlur='handleBlurMinPrice',
          @onInput='handleMinPrice'
        )
        AppInput(
          label='до',
          type='number',
          placeholder='0',
          :value='maxPriceValue',
          @onBlur='handleBlurMaxPrice',
          @onInput='handleMaxPrice'
        )

    FiltersFormSection(title='Площадь')
      FiltersFormBlock(v-for='item in areaList', :key='item.value')
        AppCheckbox(
          :label='item.value',
          :value='item.value',
          isArea,
          :checked='item.selected',
          @onChange='handleChangeArea'
        )

    FiltersFormSection(title='Оснащение номера')
      FiltersFormBlock(v-for='item in equipmentList', :key='item.value')
        AppCheckbox(
          :label='item.title',
          :value='item.value',
          :checked='item.selected',
          @onChange='handleChangeEquip'
        )

  div(:class='$style.actions')
    AppButton(text='Применить', @click='handleSetFilter')
    AppButton(
      v-if='isResetVisible',
      text='Сбросить фильтр',
      styled='secondary',
      @click='handleReset'
    )
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import FiltersFormSection from '@Components/common/Filters/FiltersFormSection';
import FiltersFormBlock from '@Components/common/Filters/FiltersFormBlock';
import AppInput from '@UI/Input';
import AppCheckbox from '@UI/Checkbox';
import AppButton from '@UI/Button';

export default {
  components: {
    FiltersFormSection,
    FiltersFormBlock,
    AppInput,
    AppCheckbox,
    AppButton,
  },
  setup() {
    const { state, commit, dispatch } = useStore();

    const minPriceValue = computed(() => state.products.minPrice);
    const maxPriceValue = computed(() => state.products.maxPrice);
    const areaList = computed(() => state.products.filters.area);
    const equipmentList = computed(() => state.products.filters.equipment);
    const isResetVisible = computed(() => state.products.isResetVisible);

    const handleChangeArea = (value) => {
      commit('setFilterAreaCheckbox', value);
    };

    const handleChangeEquip = (value) => {
      commit('setFilterEquipCheckbox', value);
    };

    const handleMinPrice = (value) => {
      commit('setMinPrice', +value);
    };

    const handleMaxPrice = (value) => {
      commit('setMaxPrice', +value);
    };

    const handleBlurMaxPrice = () => {
      if (
        maxPriceValue.value > 0 &&
        maxPriceValue.value < minPriceValue.value
      ) {
        commit('setMinPrice', 0);
      }
    };

    const handleBlurMinPrice = () => {
      if (minPriceValue.value > maxPriceValue.value) {
        commit('setMaxPrice', 0);
      }
    };

    const handleSetFilter = () => {
      dispatch('getProducts');
    };

    const handleReset = () => {
      commit('setFiltersReset');
      handleSetFilter();
    };

    return {
      minPriceValue,
      maxPriceValue,
      areaList,
      equipmentList,
      isResetVisible,
      handleMinPrice,
      handleMaxPrice,
      handleBlurMaxPrice,
      handleBlurMinPrice,
      handleSetFilter,
      handleChangeArea,
      handleChangeEquip,
      handleReset,
    };
  },
};
</script>


<style lang="scss" module src="@Scss/components/FiltersForm.scss">
</style>