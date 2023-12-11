<template>
  <header>
    <div class="p-4">
      <div class="active-text">{{ activePage }}</div>
    </div>
    <ul class="list">
      <li v-for="nav in props.navigator" :key="nav.label">
        <div class="nav-link" :class="{ active: props.activeSection === nav.label }" @click="onClickNavlink(nav)">
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
          <a class="flex justify-center" href="">
            <IconsGithub width="14" height="14" />
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
    labelTxt: string;
    activeTxt: string;
  }[];
}>();

const { $event, $router } = useNuxtApp();
const route = useRoute();

const activePage = computed(() => {
  const activeNav = props.navigator.find((nav) => nav.path === `/${String(route.name)}`);
  return activeNav?.activeTxt || 'ST/FND.';
});

const onClickNavlink = (nav: any) => {
  if (nav.type === 'page') return $router.push(nav.path);
  $event('page:slider', nav.label);
};
</script>

<style scoped>
header {
  @apply fixed top-[4%] left-[2%] m-auto w-[120px] min-h-[100px] z-50;
  color: #444;
  background-color: rgba(45, 45, 45, 0.5);
}
.credit-links {
  @apply mt-auto py-1 flex justify-start;

  > * {
    cursor: pointer;
    margin-right: 10px;
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

.active-text {
  @apply p-4 text-4xl;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  display: flex;
  align-items: flex-end;
  width: fit-content;
  font-weight: 600;
  /* font-family: 'Fredericka the Great', san-serif; */
  letter-spacing: -1px;
  /* font-family: 'Podkova', serif; */
}
</style>
