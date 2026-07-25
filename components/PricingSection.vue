<template>
  <section id="pricing" class="relative py-24 lg:py-32 bg-dark-950 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="barber-stripe"></div>
        <h2 class="section-title">Harga <span class="text-primary-400">Terjangkau</span></h2>
        <p class="section-subtitle">Kualitas premium dengan harga yang bersahabat. Pilih paket yang sesuai kebutuhan Anda.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div v-for="(plan, i) in pricing" :key="plan.name" class="glass-card p-8 card-hover relative" :class="{ 'border-primary-500/50 ring-1 ring-primary-500/20 scale-105 md:scale-110 z-10': plan.popular }">
          <!-- Popular badge -->
          <div v-if="plan.popular" class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg shadow-primary-500/25">
            Most Popular
          </div>

          <div class="text-center mb-8">
            <h3 class="text-xl font-semibold text-white mb-2">{{ plan.name }}</h3>
            <div class="text-4xl font-display font-bold text-primary-400 mb-2">{{ plan.price }}</div>
            <p class="text-gray-500 text-sm">{{ plan.desc }}</p>
          </div>

          <ul class="space-y-3 mb-8">
            <li v-for="item in plan.items" :key="item" class="flex items-center gap-3 text-gray-300 text-sm">
              <svg class="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              {{ item }}
            </li>
          </ul>

          <a href="#contact" class="block text-center py-3 rounded-lg font-semibold transition-all duration-300" :class="plan.popular ? 'btn-primary' : 'bg-dark-700/50 hover:bg-dark-700 text-white border border-dark-600'">
            Choose Plan
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const pricing = [
  {
    name: 'Basic',
    price: 'Rp75K',
    desc: 'Perfect for quick refresh',
    popular: false,
    items: [
      'Premium Haircut',
      'Hair Wash & Conditioning',
      'Basic Styling',
      'Free Consultation',
      'Hot Towel'
    ]
  },
  {
    name: 'Premium',
    price: 'Rp150K',
    desc: 'Complete grooming experience',
    popular: true,
    items: [
      'Premium Haircut',
      'Beard Grooming',
      'Hair Wash & Conditioning',
      'Premium Styling',
      'Hot Towel Shave',
      'Beverage Included'
    ]
  },
  {
    name: 'Royal',
    price: 'Rp250K',
    desc: 'The ultimate luxury package',
    popular: false,
    items: [
      'All Premium Services',
      'Hair Treatment',
      'Facial Grooming',
      'Head Massage',
      'Royal Shave',
      'Premium Beverage',
      'Priority Queue'
    ]
  }
]
</script>
