<template lang="html">
  <div class="card">
    <router-link to="/articlev2/1">
      <img class="article-img" src="/img/article-bg.png" alt="">
    </router-link>
    <div class="card-desc">
      <h2>[SR][ JAPAN TRIP ] : ชมซากุระ : 5 เมือง 6 วัน : บันทึกความฝันไปด้วยกัน</h2>
      <p>
        ผมเชื่อเสมอว่า { ความฝัน } เป็นสิ่งที่ต่อเติมพลัง และเป็นแรงผลักดัน ให้ชีวิตเดินไปสู่ทิศทางที่ดี การได้ออกเดินทาง .. ได้ท่องเที่ยวไปยังสถานที่สวยงามต่างๆ ก็คงเป็น......
      </p>
    </div>
    <div class="card-header">
      <img src="/img/my-avatar.jpg" class="avatar">
      <div class="user-info">
        <div class="author">
          <a href="/" class="username">
            Vannizer
          </a>
          <small class="time">
            1h
          </small>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="status">
        <div class="info">
          <span class="num">720</span>
          <span class="label">Views</span>
        </div>
        <div class="info">
          <span class="num">48</span>
          <span class="label">Comments</span>
        </div>
        <div class="info">
          <span class="num">127</span>
          <span class="label">Likes</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  max-width: 700px;
  box-shadow: 0px 6px 7px -3px rgba(0, 0, 0, 0.08), 0px 3px 5px 1px rgba(0, 0, 0, 0.05);
  border-radius: 0.28571429rem;
  margin-bottom: 20px;

  .card-header {
    display: flex;
    align-items: center;
    // justify-content: flex-end;
    padding: 20px;

    .user-info {
      display: flex;
      flex-direction: column;

      .username {
        color: #333;
        text-decoration: none;
        font-weight: 600;
      }

      .time {
        color: #999;
      }
    }


    .avatar {
      width: 28px;
      height: 28px;
      margin-right: 15px;
      border-radius: 50%;
    }
  }

  .article-img {
    width: 100%;
  }

  .card-desc {
    padding: 10px 20px 10px 20px;
  }

  .card-footer {
    padding: 10px 20px 10px 20px;

    .status {
      border-top: 1px solid #DDD;
      padding-top: 20px;
      display: flex;
      // flex-direction: column;
      font-size: 14px;

      .info {
        margin-bottom: 10px;
        margin-right: 20px;

        .num {
          font-weight: bold;
          color: #666;
        }

        .label {
          margin-left: 8px;
          color: #666;
        }
      }
    }
  }
}
</style>
