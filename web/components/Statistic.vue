<template>
  <div class="summary">
    <span class="value">{{ value }}</span>
    <span class="label">{{ label }}</span>
  </div>
</template>

<script>
  export default {
    props: ['label', 'value']
    // data() {
    //   return {
    //     label
    //   }
    // }
  }
</script>

<style lang="scss" scoped>
.summary {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  margin-bottom: 20px;

  .value {
    font-size: 30px;
  }

  .label {
    font-size: 16px;
    color: #999;
  }
}
</style>
