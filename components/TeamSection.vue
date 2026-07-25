<template>
  <section id="team" class="relative py-24 lg:py-32 bg-dark-950 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="barber-stripe"></div>
        <h2 class="section-title">Kenali <span class="text-primary-400">Barber</span> Kami</h2>
        <p class="section-subtitle">Tim barber profesional yang berdedikasi memberikan pengalaman grooming terbaik untuk Anda.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="member in team" :key="member.name" class="text-center group">
          <div class="relative w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-dark-700 to-dark-800 border-2 border-dark-600/50 group-hover:border-primary-500/50 transition-all duration-300 flex items-center justify-center overflow-hidden">
            <span class="text-6xl">{{ member.avatar }}</span>
          </div>
          <h3 class="text-white font-display text-xl font-semibold mb-1">{{ member.name }}</h3>
          <p class="text-primary-400 text-sm font-medium mb-3">{{ member.role }}</p>
          <div class="flex items-center justify-center gap-1 mb-3">
            <svg v-for="n in member.rating" :key="n" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <p class="text-gray-500 text-sm">{{ member.exp }} pengalaman</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const team = [
  { avatar: '👨‍🦰', name: 'Adi Prasetyo', role: 'Master Barber', rating: 5, exp: '12 tahun' },
  { avatar: '👨‍🦱', name: 'Rudi Hartono', role: 'Senior Barber', rating: 5, exp: '8 tahun' },
  { avatar: '👨‍🦳', name: 'Andi Wijaya', role: 'Barber Stylist', rating: 4, exp: '6 tahun' },
  { avatar: '👨‍🦲', name: 'Budi Santoso', role: 'Junior Barber', rating: 4, exp: '3 tahun' },
]
</script>
