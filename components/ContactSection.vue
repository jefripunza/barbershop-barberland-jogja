<template>
  <section id="contact" class="relative py-24 lg:py-32 bg-dark-900 overflow-hidden">
    <!-- Decorative -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="barber-stripe"></div>
        <h2 class="section-title">Hubungi <span class="text-primary-400">Kami</span></h2>
        <p class="section-subtitle">Siap tampil beda? Booking sekarang dan dapatkan pengalaman grooming premium di Barberland Jogja.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div v-for="(info, i) in contactInfo" :key="i" class="glass-card p-6 card-hover">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <component :is="info.icon" class="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h3 class="text-white font-semibold mb-1">{{ info.title }}</h3>
                <p class="text-gray-400" v-html="info.detail"></p>
              </div>
            </div>
          </div>

          <!-- Social -->
          <div class="flex gap-4">
            <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" class="w-12 h-12 bg-dark-700/50 hover:bg-primary-500/20 border border-dark-600/50 hover:border-primary-500/30 rounded-xl flex items-center justify-center transition-all duration-300 group">
              <component :is="social.icon" class="w-5 h-5 text-gray-400 group-hover:text-primary-400" />
            </a>
          </div>
        </div>

        <!-- Booking Form -->
        <div class="glass-card p-8">
          <h3 class="text-2xl font-display font-semibold text-white mb-6">Book Appointment</h3>
          <form @submit.prevent="submitForm" class="space-y-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-gray-400 text-sm mb-2">Nama Lengkap</label>
                <input v-model="form.name" type="text" required class="w-full bg-dark-700/50 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500/50 transition-colors" placeholder="Your name">
              </div>
              <div>
                <label class="block text-gray-400 text-sm mb-2">No. WhatsApp</label>
                <input v-model="form.phone" type="tel" required class="w-full bg-dark-700/50 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500/50 transition-colors" placeholder="08xxxxxxxxxx">
              </div>
            </div>
            <div>
              <label class="block text-gray-400 text-sm mb-2">Email (opsional)</label>
              <input v-model="form.email" type="email" class="w-full bg-dark-700/50 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500/50 transition-colors" placeholder="email@example.com">
            </div>
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-gray-400 text-sm mb-2">Layanan</label>
                <select v-model="form.service" required class="w-full bg-dark-700/50 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500/50 transition-colors">
                  <option value="" disabled selected>Pilih layanan</option>
                  <option value="haircut">Haircut Premium — Rp75K</option>
                  <option value="beard">Beard Grooming — Rp50K</option>
                  <option value="shave">Royal Shave — Rp85K</option>
                  <option value="combo">Hair & Beard Combo — Rp110K</option>
                  <option value="color">Hair Coloring — Rp200K</option>
                  <option value="kids">Kids Haircut — Rp55K</option>
                  <option value="treatment">Hair Treatment — Rp100K</option>
                  <option value="styling">Styling & Waxing — Rp45K</option>
                </select>
              </div>
              <div>
                <label class="block text-gray-400 text-sm mb-2">Tanggal</label>
                <input v-model="form.date" type="date" required class="w-full bg-dark-700/50 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500/50 transition-colors">
              </div>
            </div>
            <div>
              <label class="block text-gray-400 text-sm mb-2">Pesan Tambahan</label>
              <textarea v-model="form.message" rows="3" class="w-full bg-dark-700/50 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500/50 transition-colors" placeholder="Request khusus..."></textarea>
            </div>
            <button type="submit" class="btn-primary w-full text-center" :disabled="submitted">
              {{ submitted ? '✅ Pesanan Terkirim!' : '📅 Book Now' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h, reactive, ref } from 'vue'

const contactInfo = [
  {
    title: 'Cabang Utama — Malioboro',
    detail: 'Jl. Malioboro No. 123<br>Yogyakarta 55271<br><a href="https://maps.app.goo.gl/DRpSDXHMAFXfa1kb7?g_st=ic" target="_blank" class="text-primary-400 hover:text-primary-300 underline">📍 Buka Google Maps</a>',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }),
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' })
    ])
  },
  {
    title: 'Cabang 2 — Sleman',
    detail: 'Jl. Kaliurang Km 5.5<br>Sleman, Yogyakarta',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }), h('circle', { cx: '12', cy: '11', r: '3', 'stroke-width': '2' })])
  },
  {
    title: 'Cabang 3 — Bantul',
    detail: 'Jl. Bantul No. 45<br>Bantul, Yogyakarta',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }), h('circle', { cx: '12', cy: '11', r: '3', 'stroke-width': '2' })])
  },
  {
    title: 'Cabang 4 — Maguwo',
    detail: 'Jl. Maguwoharjo No. 78<br>Depok, Sleman',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }), h('circle', { cx: '12', cy: '11', r: '3', 'stroke-width': '2' })])
  },
  {
    title: 'Cabang 5 — Godean',
    detail: 'Jl. Godean Km 3<br>Godean, Sleman',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }), h('circle', { cx: '12', cy: '11', r: '3', 'stroke-width': '2' })])
  },
  {
    title: 'Jam Operasional',
    detail: 'Senin - Sabtu: 09:00 - 21:00<br>Minggu: 10:00 - 18:00 (kecuali cabang utama buka seperti biasa)',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' })
    ])
  },
  {
    title: 'Kontak Pusat',
    detail: 'Tel: (0274) 123-4567<br>WA: 08xxxxxxxxx<br>IG: @barberlandjogja',
    icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' })
    ])
  }
]

const socials = [
  { name: 'Instagram', url: '#', icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [ h('rect', { x: '2', y: '2', width: '20', height: '20', rx: '5', ry: '5', 'stroke-width': '2' }), h('circle', { cx: '12', cy: '12', r: '5', 'stroke-width': '2' }), h('circle', { cx: '17.5', cy: '6.5', r: '1.5', fill: 'currentColor' }) ]) },
  { name: 'TikTok', url: '#', icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [ h('path', { 'stroke-width': '2', d: 'M17.857 0H20.82v4.342a5.92 5.92 0 01-4.623 1.732v4.649A10.641 10.641 0 0116.2 21.346c-2.618 2.977-7.16 3.262-10.167.641-3.007-2.62-3.308-7.17-.68-10.16a7.224 7.224 0 015.08-2.457v4.787a2.728 2.728 0 00-1.444.896c-.728.9-.615 2.218.267 2.96.88.743 2.166.635 2.912-.245l.016.016a2.589 2.589 0 00.617-1.562V0h3.054' }) ]) },
  { name: 'WhatsApp', url: '#', icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [ h('path', { 'stroke-width': '2', d: 'M12 0C5.373 0 0 5.373 0 12c0 2.137.558 4.146 1.537 5.887L.536 23.535l6.147-1.544A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.207 17.021a1.178 1.178 0 01-.836.836c-.627.167-1.452.252-2.075.252-5.114 0-9.27-4.156-9.27-9.27 0-.623.084-1.448.252-2.075a1.178 1.178 0 01.836-.836c.167 0 .334-.084.836-.418.418-.251.836-.585 1.17-1.002.334-.418.585-.919.585-1.503 0-.585-.418-1.545-.585-2.089-.251-.543-.585-.836-1.002-.919C7.112 2.418 3.828 6.482 3.828 11.39c0 5.696 4.614 10.31 10.31 10.31 4.908 0 8.972-3.284 9.862-7.765-.084-.418-.377-.752-.919-1.002-.544-.167-1.505-.585-2.09-.585-.584 0-1.085.251-1.503.585-.417.334-.835.585-1.002 1.002-.334.502-.501.836-.919 1.17-.334.334-.752.334-1.17.084-.627-.334-1.545-.919-2.339-1.713-.794-.794-1.379-1.712-1.713-2.339-.251-.418-.251-.836.084-1.17.334-.418.585-.585.919-1.002.334-.418.585-.919.585-1.503 0-.585-.251-1.462-.585-2.09-.418-.627-.752-.918-1.002-1.002a1.178 1.178 0 00-.836-.836c-.627-.168-1.17-.168-1.462-.168-.418 0-.919.084-1.295.418-.418.251-.794.585-1.17 1.002-.418.418-.794.919-1.17 1.503-.418.585-.418 1.17-.418 1.503 0 .919.167 1.713.502 2.506.334.794.794 1.545 1.379 2.339.585.794 1.254 1.462 2.089 2.089.669.543 1.462.794 2.089 1.17.585.376 1.17.752 1.462 1.17.376.418.543.919.543 1.17 0 .418-.167.794-.418 1.17-.251.418-.585.752-1.002 1.002-.418.251-.585.418-.585.836z' }) ]) },
  { name: 'Google Maps', url: '#', icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [ h('path', { 'stroke-width': '2', d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' }) ]) },
]

const form = reactive({
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  message: ''
})

const submitted = ref(false)

function submitForm() {
  const text = `Halo Barberland Jogja! Saya ingin booking:%0A%0A👤 Nama: ${form.name}%0A📱 WA: ${form.phone}%0A📧 Email: ${form.email || '-'}%0A✂️ Layanan: ${form.service}%0A📅 Tanggal: ${form.date}%0A💬 Pesan: ${form.message || '-'}`
  window.open(`https://wa.me/628xxxxxxxxx?text=${text}`, '_blank')
  submitted.value = true
  setTimeout(() => { submitted.value = false }, 5000)
}
</script>
