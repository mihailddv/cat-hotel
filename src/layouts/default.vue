<template lang="pug">
Container
  div(:class='$style.content')
    slot
</template>


<script>
import Container from '@Components/layout/Container';
export default {
  name: 'DefaultLayoutVue',
  components: {
    Container,
  },
};
</script>

<style lang="scss" module>
.content {
  padding: 20px 0;
}
</style>