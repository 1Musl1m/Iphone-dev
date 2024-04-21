<template>
  <header class="w-full py-5 px-5 flex justify-between items-center">
    <nav class="flex w-full ms-auto me-auto relative max-w-[1120px]">
      <img src="/images/apple.svg" alt="Apple" width="14" height="18" />

      <div class="flex flex-1 justify-center">
        <div
          v-for="nav in navLists"
          :key="nav"
          class="px-5 text-gray-300 text-xs cursor-pointer text-gray hover:text-white transition-all"
        >
          {{ nav }}
        </div>
      </div>

      <div class="flex items-baseline gap-7">
        <NuxtLink to="/market">
          <IconShoppingCart width="18" height="18"/>
        </NuxtLink>
        <NuxtLink to="/">
          <IconUser width="18" height="18"/>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    navLists() {
      return ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'];
    }
  }
}
</script>