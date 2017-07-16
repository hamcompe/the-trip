<template lang="html">
  <header>
    <router-link to="/home">Trip Dude</router-link>
    <div class="new-article">
      <a href="/new-article">
        new article
      </a>
    </div>
  </header>

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
  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.1);
}
a {
  color: #666;
  text-decoration: none;
}
.new-article {
  margin-left: auto;
}
</style>
