<template lang="pug">
main(:class='$style.container')
  slot
</template>

<style lang="scss" module>
.container {
  padding-right: 10px;
  padding-left: 10px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 1400px) {
  .container {
    width: 1200px;
  }
}

@media (min-width: 1500px) {
  .container {
    width: 1390px;
  }
}
</style>
