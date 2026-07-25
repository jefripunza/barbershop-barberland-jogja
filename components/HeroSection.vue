<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image with Gradient Overlay -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"></div>
      <div class="absolute inset-0 opacity-20" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d47d2a\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      <div class="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-dark-950 to-transparent"></div>
    </div>

    <!-- Animated barber pole effect -->
    <div class="absolute right-0 top-0 bottom-0 w-32 opacity-10">
      <div class="h-full w-full" style="background: repeating-linear-gradient(180deg, #d47d2a 0px, #d47d2a 20px, #1a1a1a 20px, #1a1a1a 40px);"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <!-- Tagline -->
      <div class="animate-fade-in mb-6">
        <span class="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium tracking-wider uppercase">
          ✂️ Premium Barbershop di Jogjakarta
        </span>
      </div>

      <!-- Main Heading -->
      <h1 class="animate-fade-in-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight">
        <span class="block">Style That</span>
        <span class="block text-primary-400">Speaks Volumes</span>
      </h1>

      <p class="animate-fade-in-up text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style="animation-delay: 0.2s;">
        Dari potongan klasik hingga gaya modern — barber berpengalaman kami siap memberikan <span class="text-primary-400 font-semibold">pengalaman grooming terbaik</span> untuk Anda.
      </p>

      <!-- CTA Buttons -->
      <div class="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style="animation-delay: 0.3s;">
        <a href="#contact" class="btn-primary text-lg px-10 py-4 group">
          <span class="flex items-center gap-2">
            Book Appointment
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </span>
        </a>
        <a href="#services" class="btn-outline text-lg px-10 py-4">
          Our Services
        </a>
      </div>

      <!-- Stats -->
      <div class="animate-fade-in mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto" style="animation-delay: 0.4s;">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-3xl md:text-4xl font-display font-bold text-primary-400 mb-1">{{ stat.value }}</div>
          <div class="text-gray-500 text-sm uppercase tracking-wider">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '8+', label: 'Years Experience' },
  { value: '15+', label: 'Expert Barbers' },
  { value: '4.9', label: 'Rating ★' },
]
</script>
