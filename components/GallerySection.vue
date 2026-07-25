<template>
  <section id="gallery" class="relative py-24 lg:py-32 bg-dark-900 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="barber-stripe"></div>
        <h2 class="section-title">Hasil <span class="text-primary-400">Karya</span> Kami</h2>
        <p class="section-subtitle">Lihat langsung hasil kerja barber profesional kami — dari potongan klasik hingga gaya modern.</p>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(item, i) in gallery" :key="i" class="relative group cursor-pointer overflow-hidden rounded-xl aspect-square" :class="{ 'md:col-span-2 md:row-span-2': item.featured }">
          <div class="w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center border border-dark-600/30 rounded-xl overflow-hidden">
            <div class="text-center p-4">
              <div class="text-5xl mb-3">{{ item.emoji }}</div>
              <p class="text-white font-semibold text-sm">{{ item.title }}</p>
              <p class="text-gray-500 text-xs mt-1">{{ item.barber }}</p>
            </div>
          </div>
          <!-- Hover overlay -->
          <div class="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-all duration-300 rounded-xl border border-transparent group-hover:border-primary-500/30"></div>
        </div>
      </div>

      <div class="text-center mt-12">
        <a href="#contact" class="btn-primary">Book Your Look</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const gallery = [
  { emoji: '💇', title: 'Classic Pompadour', barber: 'By Adi', featured: true },
  { emoji: '✂️', title: 'Modern Fade', barber: 'By Rudi', featured: false },
  { emoji: '🧔', title: 'Beard Trim', barber: 'By Andi', featured: false },
  { emoji: '💈', title: 'Undercut', barber: 'By Budi', featured: false },
  { emoji: '✨', title: 'Textured Crop', barber: 'By Adi', featured: false },
  { emoji: '🪒', title: 'Royal Shave', barber: 'By Rudi', featured: false },
  { emoji: '👤', title: 'Buzz Cut', barber: 'By Andi', featured: false },
  { emoji: '🌟', title: 'Slick Back', barber: 'By Budi', featured: false },
  { emoji: '🔥', title: 'Taper Fade', barber: 'By Adi', featured: true },
  { emoji: '⭐', title: 'French Crop', barber: 'By Rudi', featured: false },
]
</script>
