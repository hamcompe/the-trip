<template lang="html">
  <div>
    <navbar></navbar>
    <HeroBanner></HeroBanner>
    <summary-list></summary-list>
    <divider></divider>
    <article>
      <h1>
        AROUND THE BLOCK
      </h1>
      <h2>
        CAPITOL HILL:
      </h2>
      <h3>
        An engaged community infused with history.
      </h3>
      <p>
        The neighborhood began over two hundred years ago at the same time as Washington DC, and was the first place to house members of Congress and their families. Today it’s one large historic district, filled with people experiencing the nation’s capital for the first time. And from Pennsylvania Avenue to Eastern Market and Barrack’s Row, Capitol Hill’s shops, restaurants and cafes continue to charm locals and visitors alike.
      </p>
      <img src="/images/article-cover-2.png" width="100%">
      <h2>THE NEIGHBORS:</h2>
      <h3>Newcomers and longtime residents, including many Federal workers and Members of Congress.</h3>
      <p>Because of the location, you never know who you might be sitting next to on the Hill, but its residents are keenly aware of who’s who in political life.</p>
      <img src="/images/article-cover-2.png" width="100%">
      <div class="double-image">
        <div class="double-wrapper">
        <img src="/images/article-cover-2.png" width="100%">
      </div>
        <div class="double-wrapper">
          <img src="/images/article-cover-2.png" width="100%">
        </div>
      </div>
      <p>Many staffers and interns live in group houses throughout the Hill and frequent the bars of Pennsylvania Avenue for the cherished happy hour tradition.</p>
      <img src="/images/article-cover-2.png" width="49.5%" style="display: inline">
      <img src="/images/article-cover-2.png" width="49.5%" style="display: inline">
      <h2>WHAT TO EXPECT:</h2>
      <h3>Bipartisan neighborliness</h3>
      <p>Politics matters on the Hill, with neighbors tending to socialize along partisan lines and to discuss the issues of the day.</p>
      <img src="/images/article-cover-2.png" width="49.5%" style="display: inline">
      <img src="/images/article-cover-2.png" width="49.5%" style="display: inline">
      <p>But Hill residents are unified in their support for their corner stores and home-grown businesses, with very few national chains in sight. And whether at the park, over the fence or across the aisle, neighbor still talks to neighbor in this small community.</p>
      <img src="/images/article-cover-2.png" width="100%">
    </article>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar'
import SummaryList from '../../components/SummaryList'
import HeroBanner from '../../components/HeroBanner'
import Divider from '../../components/Divider'

export default {
  components: {
    Navbar,
    SummaryList,
    HeroBanner,
    Divider
  }
}
</script>

<style lang="scss" scoped>
article {
  max-width: 700px;
  margin: 60px auto 20px auto;

  h1 {
    font-size: 24px;
    font-weight: 600;
    font-style: normal;
    margin-bottom: 40px;
    text-align: center;
  }
  h2 {
    font-size: 18px;
    font-weight: 600;
  }
  h3 {
    font-size: 28px;
    font-weight: 400;
    font-style: italic;
    line-height: 40px;
    color: #a3a3a3;
  }
  p {
    padding-top: 7px;
    padding-bottom: 7px;
  }

  .double-image {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .double-wrapper {
      flex-basis: 49.5%;
    }
  }
}
</style>
