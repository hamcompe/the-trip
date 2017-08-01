<template>
  <div class="card-header">
    <img src="/img/my-avatar.jpg" class="avatar">
    <div class="user-info">
      <div class="author">
        <a href="/" class="username">
          Vannizer
        </a>
      </div>
      <small class="time">
        1h
      </small>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    .username {
      color: #333;
      text-decoration: none;
      font-weight: 600;
    }

    .time {
      color: #999;
    }
  }
}
</style>
