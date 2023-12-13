<template>
  <div class="side-project-container">
    <h1 class="massive-title">
      <span>Get your own <br />prototype now!</span>
    </h1>
    <div>
      <button class="main-button">Get Started</button>
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
  @apply px-4 py-2 rounded;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #000;
  cursor: pointer;
  background-color: violet;
  transition: all 0.3s ease-in-out;
}
</style>
