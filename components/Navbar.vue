<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="scrolled ? 'bg-dark-950/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V12M12 12L8 16M12 12L16 16"/>
            </svg>
          </div>
          <span class="font-display text-2xl font-bold text-white">Barberland</span>
          <span class="text-primary-400 text-sm hidden sm:inline">Jogja</span>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-8">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm font-medium tracking-wide uppercase">
            {{ link.label }}
          </a>
          <a href="#contact" class="btn-primary text-sm">
            Book Now
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileOpen = !mobileOpen" class="lg:hidden text-white p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-4" leave-active-class="transition duration-150 ease-in" leave-to-class="opacity-0 -translate-y-4">
      <div v-if="mobileOpen" class="lg:hidden bg-dark-900/98 backdrop-blur-md border-t border-dark-700">
        <div class="px-4 py-6 space-y-4">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="mobileOpen = false" class="block text-gray-300 hover:text-primary-400 py-2 text-sm font-medium tracking-wide uppercase">
            {{ link.label }}
          </a>
          <a href="#contact" @click="mobileOpen = false" class="btn-primary block text-center text-sm">
            Book Now
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

const scrolled = ref(false)
const mobileOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
