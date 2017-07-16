<template lang="html">
  <div class="card">
    <div class="card-header" style="display: flex;">
      <img src="/img/my-avatar.jpg" class="avatar">
      <div class="user-info">
        <span class="username">
          <strong>
            Vannizer
          </strong>
        </span>
        <small class="time">
          1h
        </small>
      </div>
    </div>
    <router-link to="/article/1">
      <img class="article-img" src="/img/article-bg.png" alt="">
    </router-link>
    <div class="card-desc">
      <h2>[SR][ JAPAN TRIP ] : ชมซากุระ : 5 เมือง 6 วัน : บันทึกความฝันไปด้วยกัน</h2>
      <p>
        ผมเชื่อเสมอว่า { ความฝัน } เป็นสิ่งที่ต่อเติมพลัง และเป็นแรงผลักดัน ให้ชีวิตเดินไปสู่ทิศทางที่ดี การได้ออกเดินทาง .. ได้ท่องเที่ยวไปยังสถานที่สวยงามต่างๆ ก็คงเป็น......
      </p>
    </div>
    <div class="card-footer">
      <span class="action">like</span>
      <span class="action">comment</span>
      <span class="action">share</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  max-width: 700px;
  box-shadow: 0px 1px 3px 0px #D4D4D5, 0px 0px 0px 1px #D4D4D5;
  border-radius: 0.28571429rem;
  margin-bottom: 20px;

  .card-header {
    display: flex;
    padding: 10px;

    .user-info {
      display: flex;
      flex-direction: column;

      .time {
        color: #999;
      }
    }


    .avatar {
      width: 48px;
      height: 48px;
      margin-right: 15px;
      border-radius: 5px;
    }
  }

  .article-img {
    width: 100%;
  }

  .card-desc {
    padding: 10px 20px 10px 20px;
  }

  .card-footer {
    border-top: 1px solid #ccc;
    padding: 10px 20px 10px 20px;

    .action {
      margin-right: 15px;
    }
  }
}
</style>
