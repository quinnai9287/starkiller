<template>
  <div class="w-full h-full flex justify-center">
    <div class="slide">
      <div class="slide-inner">
        <div class="profile-image">
          <img src="/me2.jpg" class="w-full h-full" alt="profile image" />
        </div>
        <h2 class="font-Podkova leading-none mt-3 mb-6 lg:my-4 lg:mb-8 lg:mt-6">AUTHOR</h2>
        <h2 class="massive-title">STEPHANI<br />YANG</h2>
        <ul class="title-list font-Podkova">
          <li class="now">Front-end Developer</li>
          <li>Former UI/UX Designer</li>
          <li>Former Graphic Designer</li>
        </ul>
        <p class="font-Podkova text-xs mt-4 lg:mt-8">
          Department of Information and Communication,<br />Yuan-Ze University, Taiwan
        </p>
        <Skills />
      </div>
    </div>
    <div class="slide">
      <div class="slide-inner">
        <Timeline />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Timeline from './components/Timeline.vue';
import Skills from './components/Skills.vue';
</script>

<style lang="scss" scoped>
.classname {
  height: 100px;
}

.slide-inner {
  @apply lg:p-6 m-auto max-w-[90vw] lg:max-w-[450px] md:first-letter:flex md:justify-center md:ml-10;
}

.profile-image {
  @apply w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full overflow-hidden;
}

.massive-title {
  @apply text-5xl lg:text-7xl;
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
    @apply mb-2 lg:mb-3;

    border-left: 5px solid #5ebbb3;
    padding-left: 10px;

    &.now {
      @apply text-xl lg:text-2xl font-bold;
      border-color: #c76bff;
    }
  }
}
</style>
