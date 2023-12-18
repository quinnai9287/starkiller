<template>
  <div class="experience-wrap">
    <h3 class="font-bold mb-2 lg:mb-4">EXPERIENCE</h3>
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
        placement="top"
      >
        <el-card class="experience-card" body-class="experience-card-body" :class="{ present: activity.present }">
          <h3 class="title">{{ activity.title }}</h3>
          <h4 class="font-Podkova">{{ activity.company }}</h4>
          <p class="mt-2 lg:mt-4">{{ activity.period }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts" setup>
const activities = [
  {
    title: 'Front-end Developer',
    company: 'Freelancing w/ Alion Tech.',
    timestamp: '2023-09',
    period: '2023年9月 - present',
    present: true,
  },

  {
    title: 'Front-end Developer',
    company: 'TG3D Studio',
    timestamp: '2022-05',
    period: '2022年5月 - 2023年9月・1 年 5 個月',
  },
  {
    title: 'Front-end Developer',
    company: 'Freelancing w/ Alion Tech., Blockcode Inc.',
    timestamp: '2020-01',
    period: '2020年1月 - 2022年2月・2 年 2 個月',
  },
  {
    title: 'Front-end Developer',
    company: 'Albert Lan Creative 歐拔藍數位創意',
    timestamp: '2016-08',
    period: '2016年8月 - 2019年11月・3 年 4 個月',
  },
];
</script>

<style lang="scss" scoped>
.experience-wrap {
  transform-origin: left center;
  transform: scale(0.9);
  // color: #fff;
  @screen md {
    transform: scale(1);
  }
}
.experience-card {
  background: transparent;
  color: #fff;
  //   border-color: #5ebbb3;
  transform: scale(0.8);
  transform-origin: 0 0;
  user-select: none;

  &.present {
    border-color: #5ebbb3;
    transform: scale(1);

    .title {
      @apply pl-3;
      // border-left: 6px solid #c76bff;
      border-left: 6px solid #c76bff;
    }
  }

  .title {
    @apply font-bold mb-1 text-lg mb-4;
    line-height: 1;
  }
}

@media screen and (max-width: 480px) {
  :deep(.el-timeline-item) {
    padding-bottom: 10px;
  }
  :deep(.el-card__body) {
    padding: 10px;
  }
}
</style>
