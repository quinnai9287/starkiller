<template>
  <div id="SECTION_TOP" class="section" :style="{ 'min-height': dynamicHeight }">
    <div class="container">
      <div class="font-neon neon">stephani</div>
      <div class="font-dosis noise-title">
        <div class="noise" data-text="IN THE NEXT, OUR BODIES TURN TO ASHES">
          <span>IN THE NEXT, OUR BODIES TURN TO ASHES</span>
        </div>
        <div class="noise" data-text="OUR MINDS REMAIN IN SOME SHELLS">
          <span>OUR MINDS REMAIN IN SOME SHELLS</span>
        </div>
        <div class="noise" data-text="ONE BY ONE CONNECTING TO ANOTHER">
          <span>ONE BY ONE CONNECTING TO ANOTHER</span>
        </div>
        <div class="noise" data-text="TILL THE DAY WE LOSE THE VERY LAST BYTE">
          <span>TILL THE DAY WE LOSE THE VERY LAST BYTE</span>
        </div>
      </div>
      <a class="enter-link" href="#">READY TO FRONT END</a>
    </div>

    <!--     <div class="logo-wrap">
      <span class="title">S.T.F.N.</span>
      <span class="subtitle">DO SOMETHING FRONTEND</span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'KeyView',
  data(){
    return {
      dynamicHeight: 'auto',
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  mounted(){
    this.$nextTick(()=>{
      this.onResize()
    })
  },
  methods:{
    onResize(){
      this.dynamicHeight = `${window.innerHeight}px`
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes flash-left {
  0% {
    transform: translateX(1px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes flash-right {
  0% {
    transform: translateX(-0.5px);
  }
  100% {
    transform: translateX(0px);
  }
}
.container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}
.noise-title {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-bottom: 2rem;
}



.noise {
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  position: relative;
  display: inline-flex;
  flex-flow: column nowrap;
  line-height: 1;
  margin-bottom: 1rem;
  span {
    height: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    animation-name: flash-right;
    animation-iteration-count: infinite;
    position: relative;
    animation-duration: 0.2s;
    animation-delay: .5s;
    z-index: 2;
  }
  &::before,
  &::after {
    content: attr(data-text);
    white-space: nowrap;
    display: block;
    position: absolute;
    z-index: 1;
    height: 5px;
    overflow: hidden;
    animation-duration: 0.2s;
    animation-iteration-count: infinite;
    animation-name: flash-left;
    animation-delay: .5s;
  }
  &::before {
    top: -4px;
    left: 0px;
    display: flex;
    align-items: flex-start;
   // height: 61%;
  }
  &::after {
    bottom: -3px;
    display: flex;
    align-items: flex-end;
    left: -1px;
   // height: 87%;
  }
}

.light-mode .noise {
  span{ 
    animation: none;
  }
  &::before,
  &::after {
    animation: none;
  }
}

.enter-link {
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-family: 'Dosis', sans-serif;
  text-shadow: 1px 1px 10px cyan;
  cursor: pointer;
  display: flex;
  // opacity: 0.75;
  align-items: center;
  transition: opacity 0.2s ease-out;
  &:hover {
    text-decoration: none;
    // opacity: 1;
  }
  &::before,
  &::after {
    content: '';
    display: inline-block;
    margin: 0 10px;
    width: 30px;
    border-top: 1px solid currentColor;
  }
}
.light-mode .enter-link {
  color: $cyber-black;
  text-shadow: none;
}
.slogan {
  font-size: 5.5rem;
  font-family: 'Lato', sans-serif;
  color: #fff;
  font-weight: 700;
  white-space: pre-line;
  line-height: 1;
  text-shadow: 0px 0px 20px cyan;
  opacity: 0.7;

  &.flip {
    transform: scaleX(-1);
    opacity: 0.05;
    color: cyan;
    text-shadow: 10px 0px 0px $cyber-light-purple;
  }
}
.logo-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  color: #fff;
}
.title {
  font-size: 5rem;
  font-family: 'Fredericka the Great', cursive;
  margin-bottom: 0.25rem;
  line-height: 1;
}
.subtitle {
  font-weight: 100;
  font-family: 'Dosis', sans-serif;
  text-align: justify;
  letter-spacing: 7px;
  font-size: 0.625rem;
}

.neon {
  margin-top: 1rem;
  font-family: neon;
  // color: #ffa0e4;
  color: #b874a4;
  font-size: 3.25rem;
  line-height: 3.25rem;
  margin-bottom: 2rem;
}

.light-mode .neon{
  color: #555;
  text-shadow: 0 0 5vw #f7f7f7, 0 0 5vw #f7f7f7, 0 0 5vw #f7f7f7,
    0 0 5vw #f7f7f7, 0 0 0.4vw $cyber-grey, 0.5vw 0.5vw 0.1vw $cyber-grey;
  animation: none;
}

.neon{
  // color: $cyber-grey;
  // color: #b874a4;
  text-shadow: 0 0 5vw #94396e, 0 0 5vw #94396e, 0 0 5vw #94396e,
    0 0 5vw #94396e, 0 0 0.4vw #5f2746, 0.5vw 0.5vw 0.1vw #5f2746;
  animation: neon 2s ease-out infinite .1s;
  -moz-animation: neon 2s ease-out infinite .1s;
  -webkit-animation: neon 2s ease-out infinite .1s;
}

@media screen and (min-width: 768px) {

  .neon {
    font-size: 6rem;
    line-height: 6rem;
    margin-bottom: 2rem;
  }

  .noise {
    transform: scale(1.5);
    margin-bottom: 1.75rem;
  }

}

@media screen and (min-width: 992px) {

  @keyframes flash-left {
    0% {
      transform: translateX(4px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  @keyframes flash-right {
    0% {
      transform: translateX(-3px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  .neon {
    font-size: 8rem;
    line-height: 8rem;
    margin-bottom: 2rem;
  }
  .noise {
    cursor: pointer;
    font-size: 3rem;
    font-weight: bold;
    position: relative;
    display: inline-flex;
    flex-flow: column nowrap;
    line-height: 1;
    margin-bottom: 1rem;
    transform: scale(0.5);
    span {
      height: 23px;
      overflow: hidden;
      display: flex;
      align-items: center;
      animation-name: flash-right;
      animation-iteration-count: infinite;
      position: relative;
      animation-duration: 0.2s;
      z-index: 2;
    }
    &::before,
    &::after {
      content: attr(data-text);
      white-space: nowrap;
      display: block;
      position: absolute;
      z-index: 1;
      height: 32px;
      overflow: hidden;
      animation-duration: 0.2s;
      animation-iteration-count: infinite;
      animation-name: flash-left;
    }
    &::before {
      top: -13px;
      left: 1px;
      display: flex;
      align-items: flex-start;
      height: 61%;
    }
    &::after {
      bottom: -15px;
      display: flex;
      align-items: flex-end;
      left: -2px;
      height: 87%;
    }
  }
}

@keyframes neon {
  0%,
  100% {
    text-shadow: 0 0 1vw #94396e, 0 0 3vw #94396e, 0 0 10vw #94396e,
      0 0 10vw #94396e, 0 0 0.4vw #5f2746, 0.5vw 0.5vw 0.1vw #5f2746;
    color: #b874a4;
  }
  50% {
    text-shadow: 0 0 0.5vw #b25e9a, 0 0 1.5vw #b25e9a, 0 0 5vw #b25e9a,
      0 0 5vw #b25e9a, 0 0 0.2vw #5f2746, 0.5vw 0.5vw 0.1vw #5f2746;
    color: #ffa0e4;
  }
}
</style>
