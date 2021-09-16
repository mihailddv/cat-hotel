<template lang="pug">
div(:class='$style.container')
  div(:class='$style.title') {{ title }}
  div(:class='$style.content')
    slot
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" module>
.container + .container {
  margin-top: 36px;
}

.title {
  margin-bottom: 20px;
}
</style>