<template>
  <footer>
    <div class="footer">
      <div class="flex m-auto w-full items-start max-w-[1180px]">
        <div class="flex flex-col justify-center items-center">
          <PiecesLogo white class="w-[50px]" />
        </div>
        <div class="flex ml-auto mt-2">
          <ul class="footer-links w-[100px] mr-5">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <ul class="footer-links w-[100px] mr-5">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright flex items-center h-16">
      <div class="flex m-auto w-full justify-end max-w-[1180px]">
        <span class="text-sm">© 2024 Pieces. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply w-full py-12;
  color: white;
  background-color: #009a9f;
}
.copyright {
  @apply w-full;
  color: white;
  background-color: #81cdcd;
}
.footer-links {
  @apply flex flex-col font-semibold;
  list-style: none;
  li {
    @apply mb-2;
  }
  a {
    white-space: nowrap;
  }
}
</style>
