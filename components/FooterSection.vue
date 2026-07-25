<template>
  <section class="relative py-16 bg-dark-950 border-t border-dark-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top section -->
      <div class="grid md:grid-cols-4 gap-8 pb-12 border-b border-dark-800/50">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V12M12 12L8 16M12 12L16 16"/>
              </svg>
            </div>
            <span class="font-display text-2xl font-bold text-white">Barberland</span>
          </div>
          <p class="text-gray-500 text-sm leading-relaxed max-w-md">
            Premium barbershop di jantung Jogjakarta dengan 5 cabang. Kami berdedikasi memberikan pengalaman grooming terbaik untuk pria modern sejak 2018.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.label">
              <a :href="link.href" class="text-gray-500 hover:text-primary-400 text-sm transition-colors">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Location -->
        <div>
          <h4 class="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Cabang Utama</h4>
          <p class="text-gray-500 text-sm leading-relaxed">
            Jl. Malioboro No. 123<br>
            Yogyakarta 55271<br>
            <a href="https://maps.app.goo.gl/DRpSDXHMAFXfa1kb7?g_st=ic" target="_blank" class="text-primary-400 hover:text-primary-300 transition-colors">📍 Lihat di Google Maps</a>
          </p>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-gray-600 text-sm">
          &copy; {{ year }} Barberland Jogja. All rights reserved.
        </p>
        <div class="flex items-center gap-6 text-gray-600 text-xs">
          <span>5 Cabang di Jogjakarta</span>
          <span>✦</span>
          <span>Premium Barbershop</span>
          <span>✦</span>
          <span>Since 2018</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const year = new Date().getFullYear()

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]
</script>
