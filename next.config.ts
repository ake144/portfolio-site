import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'source.unsplash.com',
              port: '',
              pathname: '/**',
          },
          {
            
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          }
      ]
  }      
};


export default nextConfig;
