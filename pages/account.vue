<template>
  <div class="page__wrapper">
    <div class="container">
      <div class="account__container">
        <aside>
          <button class="active">Profile Setting <img src="" /></button>
          <button>Membership Details <img src="" /></button>
          <button>Log out <img src="" /></button>
        </aside>
        <div class="content">ss</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.account__container {
  display: flex;
  gap: 20px;
  min-height: calc(100vh - 310px);
  aside {
    max-width: 250px;
    width: 100%;
    overflow: hidden;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    background: $white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    button {
      border: none;
      padding: 10px 20px;
      border-radius: 7px;
      font-size: 16px;
      cursor: pointer;
    }
    .active{
        background: $primary;
        color: $white;
    }
  }
  .content {
    background: $white;
    width: 100%;
    min-height: calc(100vh - 310px);
    border-radius: 16px;
    padding: 20px;
  }
}
</style>
