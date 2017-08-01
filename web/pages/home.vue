<template lang="html">
  <div>
    <navbar></navbar>
    <Sidebar>
      <router-link to="/home">Follow List</router-link>
    </Sidebar>
    <div class="content">
      <div class="container">
        <article-card></article-card>
        <article-card></article-card>
        <article-card></article-card>
      </div>
    </div>
    <!-- <main>
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
    </main> -->
  </div>
</template>

<script>
import Navbar from '~components/Navbar'
import ArticleCard from '~components/ArticleCard'
import Sidebar from '~components/Sidebar'

export default {
  components: {
    Navbar,
    ArticleCard,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
$sidebarSize: 300px;
$sidebarBreakpoint: 800px;

.content {
  @media (max-width: $sidebarBreakpoint) {
    margin-left: 0px;
  }
  margin-left: $sidebarSize;
}
main {
  display: grid;
  grid-template-columns: auto 290px 700px 300px auto;
  margin-top: 20px;
}
</style>
