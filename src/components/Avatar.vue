<template>
  <div class="avatar" :class="{ avatar__selected: !!selected }">
    <div class="avatar_face">
      <img src="../assets/face.jpeg" />
    </div>
    <h2 class="avatar_name">你好, 阿星egg</h2>
    <p class="avatar_tips">
      今日有雨 <i class="fa fa-tint" aria-hidden="true"></i> 出门记得带伞
      <br />你还有 {{ todayTasks.length }} 个任务要完成
    </p>
    <p class="avatar_date">{{ today }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { getYear, getMonth, getDay, getWeekDayChinese } from "../utils/date";
export default {
  data() {
    return {
      today: `${getYear()}年 ${getMonth()}月${getDay()}日 ${getWeekDayChinese()}`,
    };
  },
  computed: {
    ...mapState(["selected"]),
    ...mapGetters(["todayTasks"]),
  }
};
</script>

<style lang="scss">
.avatar {
  display: flex;
  padding: 0 40px;
  // height: 300px;
  flex: 1;
  justify-content: flex-end;
  flex-direction: column;
  transition: all 0.5s ease;
}
.avatar__selected {
  transform: translate3d(0, 20px, 0);
  opacity: 0;
}
.avatar_face {
  width: 44px;
  height: 44px;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.avatar_name {
  margin-top: 32px;
  padding: 0 6px;
  font-size: 32px;
  letter-spacing: 1px;
  font-weight: 300;
}
.avatar_tips {
  margin-top: 16px;
  padding: 0 6px;
  font-size: 13px;
  font-weight: 100;
  opacity: 0.8;
  line-height: 1.6em;
}
.avatar_date {
  margin-top: 44px;
  margin-bottom: 16px;
  padding: 0 6px;
  font-size: 14px;
}
</style>
