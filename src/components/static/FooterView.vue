<template>
  <footer class="bg-gray-800 text-gray-300 py-8 border-t-2 dark:border-slate-500">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between">
        <!-- Footer Links -->
        <div class="w-full md:w-1/3 mb-8 md:mb-0">
          <h4 class="text-lg font-semibold text-white mb-4">
            Huangli
          </h4>
          <ul>
            <li class="mb-2">
              <RouterLink to="/" class="hover:text-white">
                Home
              </RouterLink>
            </li>
            <li class="mb-2">
              <RouterLink to="/about" class="hover:text-white">About Us</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Social Media Links -->
        <div class="w-full md:w-1/3 mb-8 md:mb-0">
          <h4 class="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <ul class="space-y-2">
            <li>
              <a href="https://x.com/Xiang_sTan" target="_blank" class="flex items-center hover:text-white">
                <img src="@/assets/img/twitter.svg" alt="Twitter" class="h-4 w-4 mr-1"> Twitter
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/xiangstan/" target="_blank" class="flex items-center hover:text-white">
                <img src="@/assets/img/linkedin.svg" alt="LinkedIn" class="h-4 w-4 mr-1"> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/xiangstan" target="_blank" class="flex items-center hover:text-white">
                <img src="@/assets/img/github-light.svg" alt="LinkedIn" class="h-4 w-4 mr-1"> GitHub
              </a>
            </li>
          </ul>
        </div>

        <!-- App Info and Version -->
        <div class="w-full md:w-1/3">
          <h4 class="text-lg font-semibold text-white mb-4">About Huangli Calendar</h4>
          <p class="mb-2">Your go-to tool for seeking your fortune under lunisolar calendar.</p>
          <p>&copy; 2024 Lunisolar Calendar.</p>
          <p>Version: 1.0.0</p>
        </div>
      </div>
    </div>
  </footer>
</template>