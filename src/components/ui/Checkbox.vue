<template lang="pug">
label(:class='$style.container')
  input(
    :class='$style.input',
    type='checkbox',
    :checked='checked',
    @change='onChange'
  )
  div(:class='$style.checkbox', :style='backgroundStyles(image)')
  div(:class='$style.text')
    div(v-if='isArea')
      span {{ label }} м
        sup 2
    div(v-else)
      span {{ label }}
</template>

<script>
// TODO: вставить картинку
import ImageCheck from '@Images/icons/check.svg';
import { computed } from 'vue';
export default {
  props: {
    label: String,
    value: String,
    isArea: Boolean,
    checked: Boolean,
  },

  setup(props, { emit }) {
    const imageCheck = ImageCheck;
    const onChange = () => {
      emit('onChange', props.value);
    };

    const backgroundStyles = () => {
      if (props.checked) {
        return { 'background-image': `url(${ImageCheck})` };
      }
    };

    return {
      imageCheck,
      backgroundStyles,
      onChange,
    };
  },
};
</script>

<style lang="scss" module src="@Scss/components/Checkbox.scss">
</style>