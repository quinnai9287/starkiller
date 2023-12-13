<template>
  <div class="w-full h-full flex justify-center" @wheel="onWheel">
    <div class="flex justify-center items-center">
      <div class="left-info">
        <div class="profile-image w-[100px] h-[100px] rounded-full overflow-hidden">
          <img src="/me.jpg" class="w-full h-full" alt="profile image" />
        </div>
        <h2 class="font-Podkova leading-none mb-8 mt-6">AUTHOR</h2>
        <h2 class="massive-title">STEPHANI<br />YANG</h2>
        <ul class="title-list font-Podkova">
          <li class="now">Front-end Developer</li>
          <li>Former UI/UX Designer</li>
          <li>Former Graphic Designer</li>
        </ul>
        <p class="font-Podkova text-xs mt-8">
          Department of Information and Communication,<br />Yuan-Ze University, Taiwan
        </p>
        <Skills />
      </div>
      <div class="flex justify-center ml-10">
        <Timeline />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Timeline from './components/Timeline.vue';
import Skills from './components/Skills.vue';

const onWheel = (e: WheelEvent) => {
  e.preventDefault;
  console.log(e);
};
</script>

<style lang="scss" scoped>
.classname {
  height: 100px;
}

.massive-title {
  margin: 0;
  font-size: 80px;
  position: relative;
  transform: translateY(-15%);
  text-align: left;
  line-height: 0.8;
  letter-spacing: -4px;
  font-weight: bold;
  color: #ccc;
  width: 70%;
}

.slide {
  @apply w-full h-full;
  user-select: none;
}
.title-list {
  @apply mt-4;
  list-style: none;

  li {
    @apply mb-3;

    border-left: 5px solid #5ebbb3;
    padding-left: 10px;

    &.now {
      @apply text-2xl font-bold;
      border-color: #c76bff;
    }
  }
}
</style>
