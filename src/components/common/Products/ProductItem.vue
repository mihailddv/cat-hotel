<template lang="pug">
div(:class='$style.container')
  div(:class='$style.picture')
    img(:src='image', :alt='title')

  div(:class='$style.content')
    div(:class='$style.title') {{ title }}

    div(:class='$style.info')
      ul(:class='$style.infoList')
        li(:class='$style.infoListItem') Размер (ШхГхВ) - {{ size }} см
        li(:class='$style.infoListItem') Площадь - {{ area[0] }} м
          sup 2
        li(:class='$style.infoListItem')
          span Оснащение номера:
          ul(:class='$style.equipment')
            li(v-if='isEquipEmpty', :class='$style.equipmentItem')
              IconEmpty
            li(v-if='isEquipBad', :class='$style.equipmentItem')
              IconBad
            li(v-if='isEquipClaw', :class='$style.equipmentItem')
              IconClaw
            li(v-if='isEquipGame', :class='$style.equipmentItem')
              IconGame
            li(v-if='isEquipHouse', :class='$style.equipmentItem')
              IconHouse
        li(:class='$style.infoListItem') Цена за сутки
          span(:class='$style.price') {{ price }}
          | &#8381;

    .product__actions
      AppButton(text='Забронировать', styled='order', @click='handleOrder')
</template>

<script>
import { computed } from 'vue';

import AppButton from '@UI/Button';
import IconEmpty from '@Icons/IconEmpty';
import IconBad from '@Icons/IconBad';
import IconClaw from '@Icons/IconClaw';
import IconGame from '@Icons/IconGame';
import IconHouse from '@Icons/IconHouse';

export default {
  props: {
    product: Array,
  },
  components: {
    AppButton,
    IconEmpty,
    IconBad,
    IconClaw,
    IconGame,
    IconHouse,
  },
  setup(props) {
    const title = computed(() => props.product.title);
    const image = computed(() => props.product.image);
    const area = computed(() => props.product.area);
    const size = computed(() => props.product.size);
    const price = computed(() => props.product.price);
    const equipment = computed(() => props.product.equipment);

    const isEquipEmpty = equipment.value.includes('empty');
    const isEquipBad = equipment.value.includes('bad');
    const isEquipClaw = equipment.value.includes('claw');
    const isEquipGame = equipment.value.includes('game');
    const isEquipHouse = equipment.value.includes('house');

    const handleOrder = () => {
      alert('В разработке');
    };

    return {
      title,
      image,
      area,
      size,
      price,
      equipment,
      isEquipEmpty,
      isEquipBad,
      isEquipClaw,
      isEquipGame,
      isEquipHouse,
      handleOrder,
    };
  },
};
</script>

<style lang="scss" module src="@Scss/components/ProductItem.scss">
</style>