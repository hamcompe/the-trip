<template>
  <div class="summary-list">
    <div class="summary">
      <span class="title">฿ 32,000</span>
      <span class="desc">Cost</span>
    </div>
    <div class="summary">
      <span class="title">2</span>
      <span class="desc">People(s)</span>
    </div>
    <div class="summary">
      <span class="title">3</span>
      <span class="desc">Day(s)</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.summary-list {
  display: flex;
  max-width: 700px;
  margin: 30px auto;
  flex-direction: column;

  .summary {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    margin-bottom: 20px;

    .title {
      font-size: 30px;
    }

    .desc {
      color: #999;
    }
  }
}
</style>
