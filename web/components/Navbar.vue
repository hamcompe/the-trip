<template lang="html">
  <div class="test">
    <header>
      <router-link to="/home">Trip Dude</router-link>
      <div class="new-article">
        <a href="/new-article">
          new article
        </a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  width: 100%;
  background: #fff;
  padding: 20px;
  border-bottom: 1px solid #ececec;
  position: fixed;
  top: 0;
  z-index: 1000;
}
a {
  color: #666;
  text-decoration: none;
}
.new-article {
  margin-left: auto;
}
.test {
  margin-bottom: 80px;
}
</style>
