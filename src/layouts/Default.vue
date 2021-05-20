<template>
  <div class="text-gray-200 bg-indigo-900 min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style="background-image:url('/sagiri-greenmapple17.png')">

    <!-- Header & Navigation -->
    <header class="p-6 flex flex-col md:flex-row items-center justify-between text-center">
      <strong>
        <g-link to="/" class="text-2xl">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="mt-4 md:mt-0 flex gap-x-4 text-gray-400">
        <g-link class="nav__link" to="/">Home</g-link>
        <!-- <g-link class="nav__link" to="/blog/">Blog</g-link> -->
      </nav>
    </header>

    <!-- Page Content -->
    <main class="p-6">
      <slot/>
    </main>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
/* Add any Global Styles Here */

.active--exact { /* Active Nav Link */
  @apply text-gray-300;
}
</style>