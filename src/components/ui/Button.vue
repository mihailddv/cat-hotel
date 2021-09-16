<template lang="pug">
button(
  :class='[$style.container, styled ? $style[styled] : ``]',
  v-on='$listeners'
)
  div(:class='$style.text') {{ text }}
  div(:class='$style.icon')
    IconPaw(v-if='styled === "order"')
</template>

<script>
import { computed } from 'vue';

import IconPaw from '@Icons/IconPaw';

export default {
  props: {
    text: String,
    styled: {
      type: String,
      default: 'primary',
    },
  },
  components: {
    IconPaw,
  },
  setup(props) {
    const styled = computed(() => props.styled);

    return {
      styled,
    };
  },
};
</script>

<style lang="scss" module src="@Scss/components/Button.scss">
</style>