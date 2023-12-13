<template>
  <div class="side-project-container">
    <h1 class="massive-title">
      <span>Get your own <br />prototype now!</span>
    </h1>
    <div>
      <button class="main-button shiney-btn">
        Get Started <el-icon class="icon"><Right /></el-icon>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.side-project-container {
  position: relative;
  z-index: 100;
  background-size: 100% auto;
}

.massive-title {
  @apply mt-0 mb-4;
  font-size: 80px;
  position: relative;
  transform: translateY(-15%);
  text-align: left;
  line-height: 0.75;
  letter-spacing: -4px;
  font-weight: bold;
  color: #000;
  width: 80vw;
}

.main-button {
  @apply py-4 rounded flex items-center justify-center;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid #673ab7;
  cursor: pointer;
  background-color: #673ab7;
  transition: all 0.3s ease-in-out;
  outline: none;
  position: relative;
  width: 188px;
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

button.shiney-btn {
  background: #894ef2;
  color: #fff;
  border: none;
  border-radius: 50px;
  border: 1px solid #894ef2;
  transition: 0.4s;
}

button.shiney-btn:before {
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

button.shiney-btn:hover {
  background: #9a67f6;
  color: #fff;
}

button.shiney-btn:focus,
button.shiney-btn:active {
  background: #673ab7;
  color: #fff;
}

button.shiney-btn:hover:before {
  left: calc(100% + 20px);
}
</style>
