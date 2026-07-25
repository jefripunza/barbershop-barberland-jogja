// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#fdf8f0',
              100: '#f9edda',
              200: '#f2d7b0',
              300: '#e9bb7d',
              400: '#e0994a',
              500: '#d47d2a',
              600: '#c56521',
              700: '#a44d1e',
              800: '#843f20',
              900: '#6c351d',
              950: '#3a1a0d',
            },
            dark: {
              50: '#f6f6f6',
              100: '#e7e7e7',
              200: '#d1d1d1',
              300: '#b0b0b0',
              400: '#888888',
              500: '#6d6d6d',
              600: '#5d5d5d',
              700: '#4f4f4f',
              800: '#454545',
              900: '#1a1a1a',
              950: '#0d0d0d',
            }
          },
          fontFamily: {
            display: ['Playfair Display', 'Georgia', 'serif'],
            body: ['Inter', 'system-ui', 'sans-serif'],
          },
          backgroundImage: {
            'hero-pattern': "url('/images/hero-bg.jpg')",
            'texture-dark': "url('/images/texture-dark.png')",
            'barber-stripes': "repeating-linear-gradient(45deg, #1a1a1a, #1a1a1a 4px, #d47d2a 4px, #d47d2a 8px)",
          },
          animation: {
            'fade-in': 'fadeIn 0.6s ease-out',
            'fade-in-up': 'fadeInUp 0.6s ease-out',
            'slide-in-left': 'slideInLeft 0.6s ease-out',
            'slide-in-right': 'slideInRight 0.6s ease-out',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
            fadeInUp: {
              '0%': { opacity: '0', transform: 'translateY(30px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            slideInLeft: {
              '0%': { opacity: '0', transform: 'translateX(-30px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' },
            },
            slideInRight: {
              '0%': { opacity: '0', transform: 'translateX(30px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' },
            },
          }
        }
      }
    }
  },

  app: {
    head: {
      title: 'Barberland Jogja — Barbershop Premium di Jogjakarta',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Barberland Jogja — Barbershop profesional di Jogjakarta. Nikmati pengalaman potong rambut premium dengan barber berpengalaman.' },
        { name: 'keywords', content: 'barbershop, barberland jogja, potong rambut, jogjakarta, grooming, beard trim, haircut premium' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap' }
      ]
    }
  },

  compatibilityDate: '2024-07-01',

  nitro: {
    preset: 'node-server'
  },

  ssr: true
})
