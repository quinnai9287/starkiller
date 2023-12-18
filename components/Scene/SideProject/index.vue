<template>
  <div class="side-project-container">
    <h1 class="massive-title">
      <span>Get your own <br />prototype now!</span>
    </h1>
    <div>
      <nuxt-link class="main-button shiney-btn" to="/drawlab">
        Get Started <el-icon class="icon"><Right /></el-icon>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.side-project-container {
  @apply relative w-[90vw] lg:w-[auto] m-auto;
  z-index: 100;
  background-repeat: no-repeat;
  background-size: 100% auto;

  @screen lg {
    background-size: 100% auto;
  }
}

.massive-title {
  @apply mt-0 mb-4 text-5xl lg:text-7xl lg:w-[80vw];
  position: relative;
  transform: translateY(-15%);
  text-align: left;
  line-height: 0.75;
  letter-spacing: -4px;
  font-weight: bold;
  color: #000;
}

$purple: #673ab7;
$light-purple: #894ef2;
$shiney-purple: #9a67f6;

.main-button {
  @apply md:py-4 rounded inline-flex items-center justify-center md:w-[188px] lg:font-bold;
  border: 1px solid $purple;
  cursor: pointer;
  font-size: 18px;
  background-color: $purple;
  transition: all 0.3s ease-in-out;
  outline: none;
  position: relative;
  overflow: hidden;

  .icon {
    @apply ml-1;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    .icon {
      @apply ml-2;
    }
  }
}

.shiney-btn {
  background: $light-purple;
  color: #fff;
  border: none;
  border-radius: 50px;
  border: 1px solid $light-purple;
  transition: 0.4s;
}

.shiney-btn:before {
  content: '';
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
  width: 25px;
  display: block;
  position: absolute;
  top: 0;
  left: -65px;
  transform: skewX(-45deg) translateX(0);
  transition-delay: 0.5s;
  transition: 0.6s;
}

.shiney-btn:hover {
  background: $shiney-purple;
  color: #fff;
}

.shiney-btn:focus,
.shiney-btn:active {
  background: $purple;
  color: #fff;
}

.shiney-btn:hover:before {
  left: calc(100% + 20px);
}

@media screen and (max-width: 480px) {
  .main-button {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 12px;
  }
}
</style>
