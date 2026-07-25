<template>
  <section id="about" class="relative py-24 lg:py-32 bg-dark-950 overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Image collage -->
        <div class="relative">
          <div class="relative z-10 rounded-2xl overflow-hidden">
            <div class="aspect-[4/5] bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl border border-dark-600/50 flex items-center justify-center">
              <div class="text-center p-12">
                <div class="w-24 h-24 mx-auto mb-6 bg-primary-500/10 rounded-full flex items-center justify-center">
                  <svg class="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6V12M12 12L8 16M12 12L16 16"/>
                  </svg>
                </div>
                <p class="text-gray-400 text-lg italic">"Rambut bukan sekadar rambut. Ini mahkota, ini identitas."</p>
                <div class="mt-4 text-primary-400 font-semibold">— Barberland Team</div>
              </div>
            </div>
          </div>
          <!-- Decorative box -->
          <div class="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary-500/20 rounded-2xl -z-10"></div>
          <div class="absolute -top-6 -left-6 w-32 h-32 bg-primary-500/10 rounded-2xl -z-10"></div>
        </div>

        <!-- Right: Content -->
        <div>
          <div class="barber-stripe"></div>
          <h2 class="section-title">Tempat Dimana <span class="text-primary-400">Gaya</span> Bertemu dengan <span class="text-primary-400">Kelas</span></h2>
          <p class="section-subtitle text-left mx-0 mb-8">
            Berdiri sejak 2018, Barberland Jogja telah menjadi destinasi grooming pria terpercaya di jantung kota Jogjakarta.
          </p>

          <div class="space-y-6">
            <div v-for="(item, i) in highlights" :key="i" class="flex items-start gap-4">
              <div class="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <component :is="item.icon" class="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <h3 class="text-white font-semibold text-lg mb-1">{{ item.title }}</h3>
                <p class="text-gray-400">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <div class="mt-10 flex flex-wrap gap-4">
            <a href="#contact" class="btn-primary">Book Now</a>
            <a href="#gallery" class="btn-outline">View Gallery</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const highlights = [
  {
    title: 'Barber Profesional & Berpengalaman',
    desc: 'Tim barber kami memiliki pengalaman bertahun-tahun dan terus mengikuti tren terkini di dunia grooming pria.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
    ])
  },
  {
    title: 'Produk Premium & Higienis',
    desc: 'Kami hanya menggunakan produk grooming berkualitas tinggi dengan standar kebersihan yang terjaga.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' })
    ])
  },
  {
    title: 'Suasana Premium & Nyaman',
    desc: 'Interior modern dengan sentuhan klasik, dirancang untuk memberikan pengalaman relaksasi maksimal.',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707' })
    ])
  }
]
</script>
