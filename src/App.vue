<template lang="pug">
#app
  component(:is='layout')
    router-view
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import DefaultLayoutVue from './layouts/default.vue';

export default {
  setup() {
    const route = useRoute();

    const layout = computed(() => route.meta.layout || DefaultLayoutVue);

    return {
      layout,
    };
  },
};
</script>
