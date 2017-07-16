<template lang="html">
  <div>
    <navbar></navbar>
    <main class="container">
      <div class="left-bar"></div>
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
      <div class="middle">
        <article-card></article-card>
        <article-card></article-card>
        <article-card></article-card>
        <article-card></article-card>
      </div>
      <!-- <flex></flex> -->
    </main>
  </div>
</template>

<script>
import Navbar from '~components/Navbar'
import ArticleCard from '~components/ArticleCard'

export default {
  components: {
    Navbar,
    ArticleCard
  }
}
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: auto 290px 700px 300px auto;
  margin-top: 20px;

  // .follow {
  //   width: 300px;
  // }
}
</style>
