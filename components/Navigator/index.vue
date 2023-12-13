<template>
  <header>
    <div class="p-2 md:p-2 lg:p-4">
      <div class="active-text">{{ activePage }}</div>
    </div>
    <ul class="list">
      <li v-for="nav in props.navigator" :key="nav.label">
        <nuxt-link class="link" :class="{ active: route.path === nav.path }" :to="nav.path">
          {{ nav.label }}
        </nuxt-link>
      </li>
      <li>
        <div class="credit-links">
          <a
            class="flex justify-center"
            href="mailto:keira0930@gmail.com?subject=Hey Steph! I would like to know more about make a website!&body=Hey Steph! I would like to know more about make a website!"
          >
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

const route = useRoute();

const activePage = computed(() => {
  const activeNav = props.navigator.find((nav) => nav.path === `/${String(route.name)}`);
  return activeNav?.activeTxt || 'ST/FND.';
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
