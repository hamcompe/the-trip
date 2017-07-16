<template lang="html">
  <div>
    <navbar></navbar>
    <hero></hero>
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
        อธิบายคร่าวๆ สำหรับรัฐ ALASKA เป็นรัฐขนาดใหญ่
        ที่มีเมืองที่ดังๆ และสำคัญอยู่ไม่กี่เมืองเท่านั้น คือ
        Juneau (เมืองหลวง), Anchorage, Fairbank (เห็นแสงเหนือชัดที่สุด)
        ชีวิตคนท้องถิ่นค่อนข้างเรียบง่าย ไม่หรูหรา และไม่มีห้างสรรพสินค้าอะไรที่ใหญ่โต
        อาหารการกินก็ออกไปในแนวอาหารอเมริกันสักส่วนใหญ่
        ยิ่งไปอยู่ในเมืองเล็กๆ แทบหาอาหารเอเชียไม่ได้เลย
      </p>
      <h2>
        : : เวลาที่เลือกไป : :
      </h2>
      <p>
        ช่วงเดือน มีนาคม เพราะเป็นช่วงที่เราสามารถเห็นแสงเหนือได้ชัดเจนและง่ายต่อการมองเห็นที่สุด แต่ก็หนาวที่สุดเช่นกันและบางที่สำคัญๆ จะไม่เปิดให้บริการ และถนนบางที่ก็จะปิดตัวลงเนื่องจากหิมะลงหนักมากกกกกกกกกกก
      </p>
      <h2>
        : : เมืองที่เลือกไป : :
      </h2>
      <p>
        Anchorage เป็นเมืองค่อนข้างใหญ่ ตั๋วเครื่องบินลงเมืองนี้ราคาถูกกว่าเมืองอื่นๆ และเป็นเสมือนศูนย์กลางที่ใกล้สถานที่ท่องเที่ยวสำคัญรอบๆ
Fairbank เพื่อไปดูแสงเหนือโดยเฉพาะ
      </p>
      <h2>
        : : ข้อควรรู้สำหรับดูแสงเหนือ : :
      </h2>
      <p>
        -    ต้องเป็นที่โล่งและมืด<br>
        -    ไม่มีเมฆหรือหมอก<br>
        -    ไม่มีแสงสว่าง<br>
        -    แสงเหนือมาตั้งแต่ 3 ทุ่มจนถึงตี 5 <br>
        -    ควรมี Application เพื่อเช็ดแสงเหนือ ชื่อ application aurora <br>
      </p>
      <img src="/img/article-cover-2.png" width="100%">
      <h2>THE NEIGHBORS:</h2>
      <h3>Newcomers and longtime residents, including many Federal workers and Members of Congress.</h3>
      <p>Because of the location, you never know who you might be sitting next to on the Hill, but its residents are keenly aware of who’s who in political life.</p>
      <img src="/img/article-cover-2.png" width="100%">
      <div class="double-image">
        <div class="double-wrapper">
        <img src="/img/article-cover-2.png" width="100%">
      </div>
        <div class="double-wrapper">
          <img src="/img/article-cover-2.png" width="100%">
        </div>
      </div>
      <p>Many staffers and interns live in group houses throughout the Hill and frequent the bars of Pennsylvania Avenue for the cherished happy hour tradition.</p>
      <img src="/img/article-cover-2.png" width="49.5%" style="display: inline">
      <img src="/img/article-cover-2.png" width="49.5%" style="display: inline">
      <h2>WHAT TO EXPECT:</h2>
      <h3>Bipartisan neighborliness</h3>
      <p>Politics matters on the Hill, with neighbors tending to socialize along partisan lines and to discuss the issues of the day.</p>
      <img src="/img/article-cover-2.png" width="49.5%" style="display: inline">
      <img src="/img/article-cover-2.png" width="49.5%" style="display: inline">
      <p>But Hill residents are unified in their support for their corner stores and home-grown businesses, with very few national chains in sight. And whether at the park, over the fence or across the aisle, neighbor still talks to neighbor in this small community.</p>
      <img src="/img/article-cover-2.png" width="100%">
    </article>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar'
import SummaryList from '../../components/SummaryList'
import HeroBanner from '../../components/HeroBanner'
import Divider from '../../components/Divider'
import Hero from '../../components/Hero'

export default {
  components: {
    Navbar,
    SummaryList,
    HeroBanner,
    Divider,
    Hero
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
    font-family: "Helvetica Neue", Arial, sans-serif;
    padding-top: 7px;
    padding-bottom: 7px;
    margin-bottom: 20px;
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
