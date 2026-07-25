<template>
  <section class="relative py-24 lg:py-32 bg-dark-900 overflow-hidden">
    <!-- Decorative -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 w-40 h-40 border border-primary-500/30 rounded-full"></div>
      <div class="absolute bottom-10 right-10 w-60 h-60 border border-primary-500/20 rounded-full"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="barber-stripe"></div>
        <h2 class="section-title">Apa Kata <span class="text-primary-400">Mereka</span></h2>
        <p class="section-subtitle">Kepuasan pelanggan adalah prioritas utama kami. Berikut testimoni dari pelanggan setia Barberland.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="glass-card p-6 card-hover">
          <div class="flex items-center gap-1 mb-4">
            <svg v-for="n in 5" :key="n" class="w-4 h-4" :class="n <= testimonial.rating ? 'text-yellow-400' : 'text-dark-600'" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed mb-6 italic">"{{ testimonial.text }}"</p>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/30 to-dark-700 flex items-center justify-center text-lg font-semibold text-primary-400">
              {{ testimonial.initials }}
            </div>
            <div>
              <p class="text-white text-sm font-semibold">{{ testimonial.name }}</p>
              <p class="text-gray-600 text-xs">{{ testimonial.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Dimas Pratama',
    initials: 'DP',
    label: 'Pelanggan Tetap',
    rating: 5,
    text: 'Barberland Jogja benar-benar juara! Hasil potongannya rapi, barbernya ramah dan paham banget sama yang saya mau. Udah langganan 2 tahun dan gak pernah kecewa.'
  },
  {
    name: 'Fajar Nugroho',
    initials: 'FN',
    label: 'Pengusaha',
    rating: 5,
    text: 'Suasananya premium banget, cocok buat saya yang butuh tampil rapi untuk meeting. Royal Shave-nya recommended banget! Hot towel treatment-nya bikin rileks.'
  },
  {
    name: 'Rendy Saputra',
    initials: 'RS',
    label: 'Mahasiswa',
    rating: 5,
    text: 'Harga terjangkau buat anak kos kayak saya. Hasil potongannya sesuai request, barbernya juga sabar ngasih saran gaya rambut. Top abis!'
  }
]
</script>
