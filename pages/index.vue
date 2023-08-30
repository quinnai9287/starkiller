<template>
  <main>
    <KeyView />
    <!-- <VSection>
      <CardSlider :title="`CONCEPTS`" :data="concepts"/>
    </VSection>
    <div>
      <div class="magic-line-horizon">
        <SVGIconMagicLine :page-y-offset="pageYOffset"/>
      </div>
    </div>
    <VSection>
      <CardSlider :title="`DIARY/LOGS`" :data="diaryLogs" :align="`right`" />
    </VSection>
    <VSection 
      :title="`AUTHOR`"
      :align="`center`"
    >
     <Author />
    </VSection> -->
  </main>
</template>

<script>
import ConceptsJson from '~/config/concepts.js'
import DiaryLogJson from '~/config/diary-logs.js'
export default {
  name: 'IndexPage',
  layout: 'default',
  data(){
    return {
      concepts: ConceptsJson,
      diaryLogs: DiaryLogJson,
      pageYOffset: 0,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll(){
      this.pageYOffset = window.pageYOffset
    }
  }
}
</script>

<style lang="scss" scoped>

.magic-line-horizon{
  position: absolute;
  width: 80%;
  height: 1400px;
  left:50%;
  transform: translate(-50%,-50%);
}

.magic-line{
  position: absolute;
  top:0;
  width: 50%;
  height: 100%;

  &.flip{
    right:0;
  }
}

.card {
  width: 100%;
  border-radius: 5px;
  border: 1px solid $cyber-powder-purple;
  background-color: rgba(0, 0, 0, 0.75);
  margin-bottom: 1.875rem;
  &:before {
    content: '';
    display: block;
    padding-bottom: 65%;
  }
  &.narrow {
    &:before {
      padding-bottom: 63%;
    }
  }
}
</style>
