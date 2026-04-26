import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'www.livingnorth.com' },
      { protocol: 'https', hostname: 'cdn.uengage.io' },
      { protocol: 'https', hostname: 'www.figjar.com' },
      { protocol: 'https', hostname: 'www.spoonfulofflavor.com' },
      { protocol: 'https', hostname: 'assets.beanbox.com' },
      { protocol: 'https', hostname: 'thefirstyearblog.com' },
      { protocol: 'https', hostname: 'www.oetker.ca' },
      { protocol: 'https', hostname: 'static.toiimg.com' },
      { protocol: 'https', hostname: 'frostingandfettuccine.com' },
      { protocol: 'https', hostname: 'icecreambakery.in' },
      { protocol: 'https', hostname: 'stellanspice.com' },
      { protocol: 'https', hostname: 'www.eatingwell.com' },
      { protocol: 'https', hostname: 'preppykitchen.com' },
    ],
  },
  turbopack: {
    root: __dirname,
  },
};


export default nextConfig;
