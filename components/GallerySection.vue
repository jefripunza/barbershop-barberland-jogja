<template>
  <section id="gallery" class="relative py-24 lg:py-32 bg-dark-900 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="barber-stripe"></div>
        <h2 class="section-title">Hasil <span class="text-primary-400">Karya</span> Kami</h2>
        <p class="section-subtitle">Lihat langsung hasil kerja barber profesional kami — dari potongan klasik hingga gaya modern.</p>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <!-- Featured image 1 -->
        <div class="relative group cursor-pointer overflow-hidden rounded-xl aspect-square md:col-span-2 md:row-span-2">
          <div class="w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 rounded-xl overflow-hidden border border-dark-600/30">
            <img src="/images/barbershop-1.jpg" alt="Barbershop interior" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p class="text-white font-semibold text-lg">Barberland Interior</p>
          </div>
        </div>

        <!-- Image 2 -->
        <div class="relative group cursor-pointer overflow-hidden rounded-xl aspect-square">
          <div class="w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 rounded-xl overflow-hidden border border-dark-600/30">
            <img src="/images/barbershop-2.jpg" alt="Barbershop detail" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p class="text-white font-semibold text-sm">Grooming Tools</p>
          </div>
        </div>

        <!-- Placeholder gallery items -->
        <div v-for="item in galleryItems" :key="item.title" class="relative group cursor-pointer overflow-hidden rounded-xl aspect-square">
          <div class="w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 rounded-xl overflow-hidden border border-dark-600/30 flex items-center justify-center">
            <div class="text-center p-4">
              <div class="text-5xl mb-2">{{ item.emoji }}</div>
              <p class="text-white font-semibold text-sm">{{ item.title }}</p>
              <p class="text-gray-500 text-xs mt-1">{{ item.barber }}</p>
            </div>
          </div>
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
const galleryItems = [
  { emoji: '💇', title: 'Classic Pompadour', barber: 'By Adi' },
  { emoji: '🧔', title: 'Beard Trim Master', barber: 'By Rudi' },
  { emoji: '💈', title: 'Modern Undercut', barber: 'By Andi' },
  { emoji: '✨', title: 'Textured Crop', barber: 'By Budi' },
  { emoji: '🌟', title: 'Slick Back Style', barber: 'By Adi' },
  { emoji: '🔥', title: 'Taper Fade', barber: 'By Rudi' },
]
</script>
