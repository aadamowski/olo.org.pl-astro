import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import compress from '@playform/compress';

export default defineConfig({
  site: 'https://olo.org.pl',
  integrations: [
    mdx(),
    react(),
    compress(),
  ],
  // server: {
  //  host: '127.0.0.1', // Listen on IPv4 localhost in addition to IPv6
  // }
});
