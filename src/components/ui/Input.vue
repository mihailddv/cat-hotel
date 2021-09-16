<template lang="pug">
div(:class='[$style.container, isError ? $style.error : ``]')
  label(:class='$style.label', :for='label') {{ label }}
  input(
    v-if='type === "text"',
    :class='$style.input',
    :id='label',
    :type='type',
    :value='value',
    @focus='onFocus',
    @blur='onBlur',
    @input='onInput'
  )
  input(
    v-if='type === "number"',
    :class='$style.input',
    :id='label',
    :type='type',
    :value='value',
    :placeholder='placeholder',
    @keypress='onlyNumber',
    @focus='onFocus',
    @blur='onBlur',
    @input='onInput'
  )
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text',
    },
    isError: Boolean,
  },
  setup(_, { emit }) {
    const onInput = (event) => {
      emit('onInput', event.target.value);
    };

    const onFocus = () => {
      emit('onFocus');
    };

    const onBlur = () => {
      emit('onBlur');
    };

    const onlyNumber = ($event) => {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        $event.preventDefault();
      }
    };

    return {
      onInput,
      onFocus,
      onBlur,
      onlyNumber,
    };
  },
};
</script>

<style lang="scss" module src="@Scss/components/Input.scss">
</style>