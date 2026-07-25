<template>
  <section id="services" class="relative py-24 lg:py-32 bg-dark-900 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="barber-stripe"></div>
        <h2 class="section-title">Layanan <span class="text-primary-400">Premium</span> Kami</h2>
        <p class="section-subtitle">Dari potongan klasik hingga grooming modern — setiap layanan dirancang untuk membuat Anda tampil maksimal.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="service in services" :key="service.name" class="glass-card p-6 card-hover group">
          <div class="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-500/20 transition-all duration-300">
            <component :is="service.icon" class="w-8 h-8 text-primary-400" />
          </div>
          <h3 class="text-white font-display text-xl font-semibold mb-3">{{ service.name }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">{{ service.desc }}</p>
          <div class="flex items-center text-primary-400 text-sm font-semibold">
            <span>Mulai {{ service.price }}</span>
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const services = [
  {
    name: 'Haircut Premium',
    desc: 'Potongan rambut customized sesuai bentuk wajah & gaya Anda, dengan konsultasi gratis dari barber ahli.',
    price: 'Rp75K',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
    ])
  },
  {
    name: 'Beard Grooming',
    desc: 'Rapikan & styling jenggot dengan teknik precision menggunakan produk premium pilihan.',
    price: 'Rp50K',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' })
    ])
  },
  {
    name: 'Royal Shave',
    desc: 'Cukur tradisional dengan hot towel, pre-shave oil, dan aftershave balm untuk experience klasik.',
    price: 'Rp85K',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' })
    ])
  },
  {
    name: 'Hair & Beard Combo',
    desc: 'Paket lengkap haircut + beard grooming dengan harga spesial. Hemat & tampil maksimal!',
    price: 'Rp110K',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' })
    ])
  },
  {
    name: 'Hair Coloring',
    desc: 'Warnai rambut Anda dengan produk berkualitas tinggi aman untuk rambut.',
    price: 'Rp200K',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' })
    ])
  },
  {
    name: 'Kids Haircut',
    desc: 'Potongan rambut anak dengan suasana nyaman dan barber yang sabar & ramah anak.',
    price: 'Rp55K',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' })
    ])
  },
  {
    name: 'Hair Treatment',
    desc: 'Perawatan rambut dengan produk profesional untuk rambut sehat & berkilau.',
    price: 'Rp100K',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' })
    ])
  },
  {
    name: 'Styling & Waxing',
    desc: 'Styling rambut untuk acara spesial dengan pomade/wax premium pilihan.',
    price: 'Rp45K',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' })
    ])
  }
]
</script>
