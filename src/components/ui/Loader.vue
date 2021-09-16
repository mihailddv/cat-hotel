<template lang="pug">
div(:class='$style.container')
  div(:class='$style.spinner')
</template>

<style lang="scss" module>
.container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.spinner {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: transparent;
  border: 4px solid #222;
  border-top-color: #009688;
  animation: 1s spin linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>