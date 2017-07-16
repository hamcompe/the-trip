<template>
  <div class="container">
    <div class="hero">
      <h1>
        <span>
          Get  Lost  In  The  Beauty Of  The  ALASKAN  Wilderness
        </span>
      </h1>
      <h1>
        <span>
          : : ตามล่าแสงเหนือในรัฐอะลาสก้า : :
        </span>
      </h1>
    </div>
    <div class="right-side">
      <summary-list></summary-list>
      <my-button>Create Party</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from './MyButton'
import SummaryList from './SummaryList'

export default {
  components: {
    MyButton,
    SummaryList
  }
}
</script>

<style lang="scss" scoped>
.right-side {
  margin-left: 50px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;

  .hero {
    background-image: url('/img/atlas-green-1507.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 400px;
    flex-basis: 800px;

    h1 {
      max-width: 600px;
      line-height: 2.5;
      padding: 10px;
      margin-left: 50px;

      span {
        background: #fff;
        box-shadow: -.2em -.2em 0 #fff,
          .2em -.2em 0 #fff,
          -.2em .2em 0 #fff,
          .2em .2em 0 #fff;
      }
    }
  }
}
</style>
