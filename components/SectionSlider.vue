<template>
  <div class="w-full h-full">
    <div class="slide">
      <div class="slide-inner">
        <div class="device-box-container">
          <DeviceBox :backgrounds="backgrounds" />
        </div>
        <div class="slide-content">
          <h2 v-if="data?.name" class="mb-2">
            <span class="text-2xl lg:text-6xl font-bold whitespace-pre-line">{{ data?.name }}</span>
          </h2>
          <div v-if="data?.tags" class="tags-box font-Podkova">
            <span v-for="(tag, i) in data.tags" :key="i" class="tag">
              {{ tag }}
            </span>
          </div>
          <div v-if="data?.sns" class="sns-box font-Podkova">
            <a v-for="(s, idx) in data.sns" :key="idx" :href="s.url" class="link" target="_blank">
              <el-icon v-if="s.elIcon" :color="`#fff`">
                <component :is="s.elIcon" />
              </el-icon>
              <span v-if="s.iconComp">
                <component :is="s.iconComp" />
              </span>
            </a>
          </div>
          <ul v-if="data?.des" class="title-list font-Podkova">
            <li v-for="d in data.des" :key="d.txt">
              <a v-if="d.url" :href="d.url" target="_blank">{{ d.txt }}</a>
              <span v-else>{{ d.txt }}</span>
            </li>
          </ul>
          <TagBox :tags="data?.devTags" />
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
  },
  backgrounds: {
    type: Object,
  },
});

const { data, backgrounds } = toRefs(props);
</script>

<style lang="scss" scoped>
.slide-inner {
  @apply flex flex-col justify-center items-center w-[100vw] h-[100vh] p-6;
}
.slide-content {
  @apply flex flex-col mb-5 lg:mb-auto w-[90%] lg:w-[70%] lg:h-[65%] relative z-50;
}

.device-box-container {
  @apply absolute z-10;
}

.tags-box {
  @apply flex flex-wrap mt-2 max-w-[400px] text-xs lg:text-base;

  .tag {
    @apply mr-2;
  }
}

.sns-box {
  @apply flex flex-wrap my-2 lg:my-4 max-w-[400px] text-xs lg:text-base;

  .link {
    @apply mr-2;
  }
}

.title-list {
  @apply mt-2 lg:mt-4 mb-3 lg:mb-6 text-sm lg:text-base leading-4 lg:leading-normal;
  list-style: none;

  li {
    @apply mb-2 lg:mb-3 pl-2 lg:pl-4;

    border-left: 5px solid #5ebbb3;

    &.now {
      @apply text-base lg:text-2xl font-bold;
      border-color: #c76bff;
    }
  }
}

@media screen and (max-width: 480px) {
  .device-box-container {
    @apply relative;
    transform: scale(0.8);
    left: -11%;
    top: 8%;
  }
}
</style>
