<template>
  <header>
    <div class="p-4">
      <Logo />
    </div>
    <ul class="list">
      <li v-for="nav in props.navigator" :key="nav.label">
        <div class="nav-link" :class="{ active: props.activeSection === nav.label }" @click="onClickNavlink(nav.label)">
          {{ nav.label }}
        </div>
      </li>
      <li>
        <div class="credit-links">
          <a class="flex justify-center">
            <el-icon :size="14" :color="`#fff`">
              <Message />
            </el-icon>
          </a>
          <a class="flex justify-center">
            <el-icon :size="14" :color="`#fff`">
              <Message />
            </el-icon>
          </a>
          <a class="flex justify-center">
            <el-icon :size="14" :color="`#fff`">
              <Message />
            </el-icon>
          </a>
          <a class="flex justify-center">
            <el-icon :size="14" :color="`#fff`">
              <Message />
            </el-icon>
          </a>
        </div>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  activeSection: string;
  navigator: {
    label: string;
    path: string;
    anchor: string;
  }[];
}>();

const { $event } = useNuxtApp();

const onClickNavlink = (anchor: string) => {
  $event('page:slider', anchor);
};
</script>

<style scoped>
header {
  @apply fixed top-[4%] left-[2%] m-auto w-[120px] min-h-[100px] z-50;
  color: #444;
  background-color: rgba(45, 45, 45, 0.5);
}
.credit-links {
  @apply mt-auto py-1 flex justify-between;

  > * {
    cursor: pointer;
  }
}

.list {
  @apply grid grid-cols-1 divide-y h-full text-sm mb-2;
  border-top: 1px solid #444;
  font-family: 'Podkova', serif;

  > li {
    @apply py-2 px-5;
  }
}

.nav-link {
  color: #fff;
  cursor: pointer;
  user-select: none;

  &.active {
    color: #6cdbd2;
  }
}
</style>
