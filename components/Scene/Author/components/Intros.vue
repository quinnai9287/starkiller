<template>
  <div class="flex">
    <div class="intros">
      <div class="intros-title mt-0">About Me</div>
      <div class="paragraph mb-10">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As someone who used to be a graphic designer and
          UI designer, what matters to me the most is whether the webpage layout is aesthetically pleasing. Next in line
          are user experience and webpage performance. However, in web development, these aspects complement each other,
          and all are indispensable.
        </p>
        <p>
          I'm a self-taught front-end developer. My self-taught journey enabled me to acquire comprehensive skills in
          the field of front-end development. While some front-end designers might face challenges in learning
          programming, I overcame these limitations. This comprehensiveness allows me not only to engage in web design
          but also to write code, which is a highly valuable skill combination.
        </p>
      </div>
      <div class="paragraph">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now, my front-end development skills have far
          surpassed those of many front-end designers. From developing official brand websites to creating cross-device
          web applications, I've amassed a wealth of experience.
        </p>
        <p>
          It's not just about developing web interfaces; it involves writing interactive functionalities for users and
          applications, which often requires extensive API integrations and data processing.
        </p>
      </div>
    </div>
    <div class="intros">
      <div class="paragraph mb-10">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm grateful for the opportunity my previous
          company's project provided, allowing me to venture into the realms of Web3 and blockchain, accumulating
          relevant development experience. This experience will make me more competitive in this emerging field and
          potentially allow me to have a greater impact in the future.
        </p>
        <p>
          Looking back at my early days as a beginner, I exclaimed, "Wow! I've come so far and learned so much." All of
          this is attributed to my curiosity, perseverance, and the guidance and support from mentors and colleagues.
        </p>
      </div>
      <div class="intros-title">Future Prospects</div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I've accumulated enough development experience to
        create the software applications I've always wanted. Own a software application is every programmer's dream!
        I'll continue to delve deeper into my favorite field - the intersection of technology with fashion and
        creativity.
      </p>
      <img class="sign" :src="sign" />
    </div>
  </div>
</template>

<script setup>
import sign from '@/assets/images/sign.png';
</script>

<style lang="scss" scoped>
.intros {
  @apply p-4 rounded-md text-base max-w-[450px] max-h-[660px] mx-4 leading-5;
  // border: 1px solid #444;
  p {
    @apply mb-4;
  }
}

.intros-title {
  @apply mb-6;
  font-size: 3.5rem;
  color: #5ebbb3;
  font-weight: 700;
  opacity: 0.8;
  line-height: 0.8;
}

.sign {
  @apply w-[55%] ml-auto mt-auto;
}
</style>
