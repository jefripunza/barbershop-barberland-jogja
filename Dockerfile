# =============================================================================
# Barberland Jogja — Nuxt 3 Landing Page
# =============================================================================
# Stage 1: Build
# =============================================================================
FROM node:20-alpine AS builder

# Fix npm edgesOut bug
RUN npm install -g npm@10.9.2 --silent

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build for production
RUN npm run build

# =============================================================================
# Stage 2: Production (Nitro + Node)
# =============================================================================
FROM node:20-alpine AS runner

WORKDIR /app

# Copy built output from builder
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/package.json /app/package.json

# Expose port
EXPOSE 3000

# Run Nuxt 3 production server
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NODE_ENV=production

CMD ["node", ".output/server/index.mjs"]
