import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_OPENAPI_KEY: process.env.NEXT_PUBLIC_OPENAPI_KEY || '',
  },
}

export default nextConfig
