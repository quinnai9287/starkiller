<template>
  <div class="w-full h-full">
    <div v-for="(p, i) in projects" :key="p.name" class="slide" :data-anchor="`slide${i}`">
      <div class="slide-inner">
        <div class="slide-content">
          <h2>
            <span class="text-6xl font-bold">{{ p.name }}</span>
          </h2>
          <div class="tags-box font-Podkova">
            <span v-for="tag in p.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
          <div v-if="p.sns" class="sns-box font-Podkova">
            <a v-for="(s, idx) in p.sns" :key="idx" :href="s.url" class="link" target="_blank">
              <el-icon v-if="s.elIcon" :size="20" :color="`#fff`">
                <component :is="s.elIcon" />
              </el-icon>
              <span v-if="s.iconComp">
                <component :is="s.iconComp" />
              </span>
            </a>
          </div>
          <ul v-if="p.des" class="title-list font-Podkova">
            <li v-for="d in p.des" :key="d.txt">{{ d.txt }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter.js';
const counterStore = useCounterStore();
const projects = counterStore.projects;
</script>

<style lang="scss" scoped>
.slide-inner {
  @apply flex justify-center items-center w-[100vw] h-[100vh];
}
.slide-content {
  @apply flex flex-col w-[70%] h-[65%];
}

.tags-box {
  @apply flex flex-wrap mt-2 max-w-[400px];

  .tag {
    @apply mr-2;
  }
}

.sns-box {
  @apply flex flex-wrap my-4 max-w-[400px];

  .link {
    @apply mr-2;
  }
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
~/stores/projects.js
